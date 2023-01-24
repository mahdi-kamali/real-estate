import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALERT_STATUS_DANGER, ALERT_TYPE_TEXT } from "src/consts/Alert/ALERTS_CONSTS";
import { BASE_URL } from "src/consts/API/API_CONSTS";
import { CLOSE_POP_UP } from "src/consts/popUp/POP_UP_CONTS";
import { refreshCategories } from "src/features/admin-panel/CategoriesState";
import { setLoading } from "src/features/admin-panel/LoadingStates";
import { setPopUp } from "src/features/admin-panel/PopUpStates";
import { addAlert } from "src/features/alert/AlertsState";

const CreateCategory = () => {

  const CATEGORY_CREATE_URL = BASE_URL + "category";

  const dispatcher = useDispatch();


  const [catName, setCatName] = useState();
  const [catImage, setCatImage] = useState();
  const img = useRef()



  const token = useSelector(state => state.user.value.token)




  function handleFormSubmit(e) {

    e.preventDefault();

    dispatcher(setLoading({ show: true }))


    const headers = {

    }

    const formData = new FormData(e.target)


    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: function (progressEvent) {
        console.log(Math.round((progressEvent.loaded * 100) / progressEvent.total));
      }
    };

    axios.post(
      CATEGORY_CREATE_URL,
      formData,
      config,
    )
      .then(res => {
        if (res.status == 201) {
          dispatcher(setPopUp(CLOSE_POP_UP))
          dispatcher(refreshCategories())
        }
        dispatcher(setLoading({ show: false }))
      })
      .catch(error => {
        console.log("Error => " + error.response.data.message)
        dispatcher(setLoading({ show: false }))
        if (error.message) {
          dispatcher(addAlert({
            type : ALERT_TYPE_TEXT ,
            status : ALERT_STATUS_DANGER , 
            header : "Error !" ,
            body : error.nessage ,
            timeOut : 10 
          }))
        }
      })
  }


  function handleImagePreview(e) {

    try {
      const file = e.target.files[0];


      const fileLoader = new FileReader()

      fileLoader.readAsDataURL(file)

      fileLoader.onload = (e) => {
        const src = e.target.result;
        img.current.src = src
        setCatImage(src)
      }
    } catch (e) {

    }

  }

  const handleCancelClick = () => {
    dispatcher(setPopUp(CLOSE_POP_UP))
  }


  return (
    <div className={`create-category-pop-up`}>
      <div className="create-header">
        Create Category
      </div>
      <form encType="multipart/form-data" className="create-body" onSubmit={(e) => { handleFormSubmit(e) }}>

        <div className="form-left">

          <fieldset className="form-group">
            <legend>Category Name</legend>
            <input type="text" name="name" required onChange={(e) => setCatName(e.target.value)} />
          </fieldset>

          <fieldset className="form-group">
            <legend>Category Image</legend>
            <input type="file" name="image" required accept="image/*" onChange={(e) => handleImagePreview(e)} />
          </fieldset>

          <div className="form-buttons">
            <button className="submit" type="submit">Submit</button>
            <button className="cancel" type="button" onClick={handleCancelClick}>Cancel</button>
          </div>

        </div>
        <div className="form-right">
          <div className="form-image-preview">
            <img ref={img} src={require("../../../images/mid/1.jpg")} />
          </div>
        </div>

      </form>
    </div>
  )
}

export default CreateCategory
