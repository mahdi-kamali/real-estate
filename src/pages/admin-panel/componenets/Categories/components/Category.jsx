import { Icon } from '@iconify/react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
import { data } from '../../charts/WeeklyArranges';
const Category = ({ categoryProp } , {}) => {



    const CATEGORY_DELETE = "http://192.168.1.106/api/Category-delete.php"
    
    const dispatcher = useDispatch();



    const headers = {
        'Authorization': 'Bearer paperboy'
    }

    const deleteData = {
        id: categoryProp.id
    }



    function deleteCategory() {
        axios.delete(CATEGORY_DELETE + "")
            .then(response => {
                alert(response)
            })
    }

    function updateCategory() {
        dispatcher(setPopUp({popUpType : "Category Update"}))
    }

    return (
        <div className="cat">
            <div className="cat-header">
                <img src={categoryProp.catImage} alt="" />
            </div>
            <div className="cat-body">
                <div className="cat-name">
                    {categoryProp.catName}
                </div>
            </div>
            <div className="cat-buttons">
                <Icon className='edit icon' icon="material-symbols:edit-outline" onClick={()=>{updateCategory()}} />
                <Icon className='delete icon' icon="material-symbols:delete-outline" onClick={() => deleteCategory()} />
            </div>
        </div>
    )
}

export default Category
