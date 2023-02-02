import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL_ADMIN } from "src/consts/API/API_CONSTS";
import Category from "./components/Category";

const SelectorCategory = ({ data , selectedID }) => {


  const [categories, setCategores] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [categoryID, setCategoryID] = useState(selectedID);


  const token = useSelector(state => state.user.value.token)



  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  useEffect(() => {
    axios.get((BASE_URL_ADMIN + "category"), config)
      .then(response => {
        setCategores(response.data.data)
      })
  }, [])


  return (
    <div className="category-selector ">
      <div className="category-selector-header">
        <button type="button" onClick={toggle}>
          {isOpen ? "Close Categories" : "Open Categories"}
        </button>
      </div>
      <div className={`category-selector-body ${isOpen ? "show" : "hide"} `}>
        {
          categories.map((category, index) => {
            return (
              <Category
                key={index}
                data={category}
                crrentSelectedID={categoryID}
                setCategoryID={setCategoryID} />
            )

          })
        }
        <input type="text" value={categoryID} name="cat_id" />
      </div>
    </div>
  )
}

export default SelectorCategory
