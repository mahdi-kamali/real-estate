import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_APP_URL, BASE_SERVER_ULR } from "src/consts/API/API_CONSTS"

const Categories = () => {


    const CATEGORIES_GET_BASE_URL = BASE_APP_URL + "category"

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(CATEGORIES_GET_BASE_URL).then(
            response => {
                setCategories(response.data.data)
            }
        )
    }, [])



    const Category = ({ data }) => {
        return (
            <div className="cat">
                <div className="cat-header">
                    <h1>{data.attributes.name}</h1>
                </div>
                <div className="cat-body">
                    <img src={BASE_SERVER_ULR + data.attributes.image.indexArray.large} alt="" />
                </div>
            </div>
        )
    }


    return (
        <section className="categories">
            <div className="categories-header">
                <h1>
                    <span>Categories</span>
                </h1>
            </div>
            <div className="categories-body">
                {
                    categories.map((cat, index) => {
                        return <Category key={index} data={cat} />
                    })
                }

            </div>
        </section>
    )
}

export default Categories
