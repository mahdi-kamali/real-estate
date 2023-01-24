import { Icon } from '@iconify/react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from 'src/consts/API/API_CONSTS';
import { CATEGORY_POP_UPDATE } from 'src/consts/popUp/POP_UP_CONTS';
import { refreshCategories } from 'src/features/admin-panel/CategoriesState';
import { setLoading } from 'src/features/admin-panel/LoadingStates';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
const Category = ({ categoryProp }) => {



    const CATEGORY_DELETE = BASE_URL + "category/" + categoryProp.id




    const dispatcher = useDispatch();




    const token = useSelector(state => state.user.value.token)

    const popUp = useSelector(state => state.popUp.value);


    const headers = {
        headers: {
            Accept: 'application/json',
            Content_Type: "application/json",
            Authorization: `Bearer ${token}`
        }
    }


    function deleteCategory() {
        dispatcher(setLoading({ show: true }))
        axios.delete(CATEGORY_DELETE, headers)
            .then(response => {
                if (response.status == 200) {
                    dispatcher(refreshCategories())
                    dispatcher(setLoading({ show: false }))
                }
                console.log(response);
            })

    }

    function updateCategory() {
        dispatcher(setPopUp({ type: CATEGORY_POP_UPDATE, category: categoryProp }))
    }


    return (
        <div className="cat">
            <div className="cat-header">
                <img src={"http://192.168.1.106/" + categoryProp.image.indexArray.largeRect} alt="" />
            </div>
            <div className="cat-body">
                <div className="cat-id">
                    #{categoryProp.id}
                </div>
                <div className="cat-name">
                    {categoryProp.name}
                </div>
            </div>
            <div className="cat-buttons">
                <Icon className='edit icon' icon="material-symbols:edit-outline" onClick={() => { updateCategory() }} />
                <Icon className='delete icon' icon="material-symbols:delete-outline" onClick={() => deleteCategory()} />
            </div>
        </div>
    )
}

export default Category
