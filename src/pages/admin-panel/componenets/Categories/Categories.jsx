import { useState } from 'react'
import Category from './components/Category';
import { Icon } from '@iconify/react';
import CreateCategory from './components/CreateCategory';
import PopUp from 'src/pages/pop-ups/PopUp';
import { useEffect } from 'react';
import axios from 'axios';
import UpdateCategory from './components/UpdateCategory';
import { useDispatch, useSelector } from 'react-redux';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
import { BASE_URL } from 'src/consts/API/API_CONSTS';
import { CATEGORY_POP_CREATE, CATEGORY_POP_UPDATE } from 'src/consts/popUp/POP_UP_CONTS';
import { addAlert } from 'src/features/alert/AlertsState';
import { ALERT_STATUS_DANGER, ALERT_STATUS_SUCCESS, ALERT_TYPE_TEXT } from 'src/consts/Alert/ALERTS_CONSTS';
const Categories = () => {


    const dispatcher = useDispatch()
    const popUp = useSelector(state => state.popUp.value);
    const token = useSelector(state => state.user.value.token)
    const categoriesRefresh = useSelector(state => state.categories.value)


    const CATS_BASE_URL = BASE_URL + "category"

    const [categories, setCategories] = useState([]);








    const headers = {
        headers: {
            Accept: 'application/json',
            Content_Type: "application/json",
            Authorization: `Bearer ${token}`
        }
    }


    useEffect(() => {

        axios.get(CATS_BASE_URL, headers)
            .then(response => {
                const temp = response
                if (response.status == 200) {
                    setCategories(temp.data.data)
                }
            }).catch(error => {
                console.log(error.message);
                // console.log(error.response.data.message);
                if (error.message) {
                    dispatcher(addAlert({
                        type: ALERT_TYPE_TEXT,
                        status: ALERT_STATUS_DANGER,
                        header: "NETWORK ERROR",
                        body: "somthing Wrong with your connection ! please check you are connected to internet or Not !",
                        timeOut: 10
                    }))
                }

            }).finally()
    }, [categoriesRefresh])






    function createNewCategory() {
        dispatcher(setPopUp(CATEGORY_POP_CREATE))
    }


    const closePopUp = () => {
        dispatcher(setPopUp({ popUpType: "none" }))
    }



    return (
        <div className="mid-side">
            <div className="categories">
                <div className="categories-header">
                    <h1>Categories</h1>
                    <div className="create">
                        <button onClick={() => createNewCategory()}><Icon icon="material-symbols:add" /> New Category  </button>
                    </div>
                </div>
                <div className="categories-body">
                    {categories.map((categoryProp, index) => {
                        return <Category key={index} categoryProp={categoryProp} />
                    })}
                </div>
                {<PopUp component={<UpdateCategory />} isShowing={popUp.type === CATEGORY_POP_UPDATE} closePopUp={closePopUp} />}
                {<PopUp component={<CreateCategory />} isShowing={popUp === CATEGORY_POP_CREATE} closePopUp={closePopUp} />}
            </div>
        </div>
    )
}

export default Categories
