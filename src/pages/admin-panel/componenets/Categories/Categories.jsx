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
const Categories = () => {


    const CATS_BASE_URL = "http://192.168.1.106/api/Category.php"

    const [categories, setCategories] = useState([
        {
            catImage: require('../../images/mid/1.jpg'),
            catName: "test",
            catLink: "https://google.com"
        },
    ]);

    // useEffect(() => {
    //     axios.get(CATS_BASE_URL)
    //         .then(response => {
    //             const temp = response.data
    //             console.log(temp);
    //             setCategories(temp)
    //         }).catch(error => {
    //             console.log(error);
    //         }).finally()
    // }, [])


    const dispatcher = useDispatch()
    const popUpType = useSelector(state => state.popUp.value.popUpType);




   
    function createNewCategory() {
        dispatcher(setPopUp({popUpType : "Category Create"}))
    }
    const closePopUp = () => {
        dispatcher(setPopUp({popUpType : "none"}))
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
                {<PopUp component={<UpdateCategory />} isShowing={popUpType === "Category Update"} closePopUp={closePopUp} />}
                {<PopUp component={<CreateCategory />} isShowing={popUpType === "Category Create"} closePopUp={closePopUp} />}
            </div>
        </div>
    )
}

export default Categories
