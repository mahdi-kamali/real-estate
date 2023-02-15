

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { BASE_APP_URL, BASE_SERVER_ULR } from 'src/consts/API/API_CONSTS';
import SwiperCardList from '../cards/SwiperCardList';
import SearchBigCard from '../search/card-big/SearchBigCard';







const ByCategory = () => {





    const [byCategoriesCards, setByCategoriesCards] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()


    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat)
    }

    useEffect(() => {
        if (selectedCategory) {
            let BY_CATEGORY_GET_URL =
                BASE_APP_URL +
                "category-posts/" + selectedCategory?.id
            axios.get(BY_CATEGORY_GET_URL)
                .then(response => {
                    setByCategoriesCards(response.data.data)
                })
        }
    }, [selectedCategory])

    useEffect(() => {
        let CATEGORIES_GET_BASE_URL = BASE_APP_URL + "category"
        axios.get(CATEGORIES_GET_BASE_URL)
            .then(response => {
                setCategories(response.data.data)
                setSelectedCategory(response.data.data[0])
            })
    }, [])

    const Category = ({ cat }) => {
        return (
            <div className={`cat ${selectedCategory?.id === cat.id ? "selected" : ""}`}
                onClick={() => handleCategorySelect(cat)}>
                <div className="cat-header">
                    <div className="cat-image">
                        <img
                            src={
                                BASE_SERVER_ULR +
                                cat.attributes.image.indexArray.largeRect
                            } />
                    </div>
                </div>
                <div className="cat-body">
                    <div className="cat-name">
                        <h1>{cat.attributes.name}</h1>
                    </div>
                    <div className="cat-count">
                        <small>4 item</small>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <section className="by-category">
            <div className="by-category-header">
                <h1>
                    <span> By Category  </span>
                </h1>
            </div>
            <div
                className=
                "by-category-body  page-grid-style-responsive">
                <div className="left-side">
                    <div className="left-side-header">
                        By Category
                    </div>
                    <div className="left-side-body">
                        {
                            categories.map((cat, index) => {
                                return <Category
                                    cat={cat}
                                    key={index} />
                            })
                        }
                    </div>
                </div>
                <div className="right-side">
                    <SearchBigCard />
                </div>
                <div className="bottom-side">
                    <SwiperCardList cards={byCategoriesCards} />
                </div>
            </div>
        </section>
    )
}

export default ByCategory
