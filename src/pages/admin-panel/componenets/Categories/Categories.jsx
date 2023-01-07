import { useState } from 'react'
import Category from './components/Category';
import { Icon } from '@iconify/react';
import CreateCategory from './components/CreateCategory';
const Categories = () => {

    const [categories, setCategories] = useState([
        {
            catImage: require('../../images/mid/1.jpg'),
            catName: "test",
            catLink: "https://google.com"
        },
        {
            catImage: require('../../images/mid/2.jpg'),
            catName: "test1",
            catLink: "https://google.com"
        },
        {
            catImage: require('../../images/mid/3.jpg'),
            catName: "test2",
            catLink: "https://google.com"
        },
        {
            catImage: require('../../images/mid/4.jpg'),
            catName: "test3",
            catLink: "https://google.com"
        },
        {
            catImage: require('../../images/mid/5.jpg'),
            catName: "test2",
            catLink: "https://google.com"
        },
        {
            catImage: require('../../images/mid/6.jpg'),
            catName: "test2",
            catLink: "https://google.com"
        },
    ]);

    const [isCreatingCat , setCreatingCat] = useState(false);


    function createNewCategory (state) {
        setCreatingCat(state)
    }

    console.log(isCreatingCat);


    return (
        <div className="mid-side">
            <div className="categories">
                <div className="categories-header">
                    <h1>Categories</h1>
                    <div className="create">
                        <button onClick={()=>createNewCategory(true)}><Icon icon="material-symbols:add" /> New Category  </button>
                    </div>
                </div>
                <div className="categories-body">
                    {categories.map((categoryProp, index) => {
                        return <Category key={index} categoryProp={categoryProp} />
                    })}
                    {categories.map((categoryProp, index) => {
                        return <Category key={index} categoryProp={categoryProp} />
                    })}
                    {categories.map((categoryProp, index) => {
                        return <Category key={index} categoryProp={categoryProp} />
                    })}
                </div>
                { isCreatingCat ?  <CreateCategory setCreatingCat={setCreatingCat} /> : ""  }

            </div>
        </div>
    )
}

export default Categories
