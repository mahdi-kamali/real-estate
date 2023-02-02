import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_SERVER_ULR, BASE_URL_ADMIN } from "src/consts/API/API_CONSTS";
import { CLOSE_POP_UP } from "src/consts/popUp/POP_UP_CONTS";
import { refreshCategories } from "src/features/admin-panel/CategoriesState";
import { setLoading } from "src/features/admin-panel/LoadingStates";
import { setPopUp } from "src/features/admin-panel/PopUpStates";


const UpdateCategory = () => {

  const popUp = useSelector(state => state.popUp.value)


  const category = popUp.category ? popUp.category : undefined

  let CATEGORY_UPDATE_URL = BASE_URL_ADMIN + "category/" + category?.id;



  const dispatcher = useDispatch();


  const [catName, setCatName] = useState();
  const [catImage, setCatImage] = useState();
  const img = useRef()


  useEffect(() => {
    if (category !== undefined) {
      setCatName(category.name)
      setCatImage(BASE_SERVER_ULR + category.image.indexArray.largeRect)
    }

  }, [category])



  const token = useSelector(state => state.user.value.token)




  function handleFormSubmit(e) {

    e.preventDefault();

    dispatcher(setLoading({ show: true }))

    const formData = new FormData(e.target)

    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: function (progressEvent) {
        console.log(Math.round((progressEvent.loaded * 100) / progressEvent.total));
      }
    };

    formData.append("_method", "PUT")


    axios.post(
      CATEGORY_UPDATE_URL,
      formData,
      config,
    )
      .then(res => {
        if (res.status == 201) {
          dispatcher(setPopUp(CLOSE_POP_UP))
          dispatcher(refreshCategories())
          console.log(res.data);
        }
        dispatcher(setLoading({ show: false }))
      })
      .catch(error => {
        console.log(error.response.data.message)
        dispatcher(setLoading({ show: false }))
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
    <div className="update-category-pop-up">
      <div className="update-header">
        <h1>EDIT CATEGORY</h1>
        <small> ID : ${category?.id}</small>
      </div>
      <form encType="multipart/form-data" className="update-body" onSubmit={(e) => { handleFormSubmit(e) }}>

        <div className="form-left">

          <fieldset className="form-group">
            <legend>Category Name</legend>
            <input
              type="text"
              name="name"
              required
              defaultValue={catName}
              onChange={(e) => setCatName(e.target.value)} />
          </fieldset>

          <fieldset className="form-group">
            <legend>Category Image</legend>
            <input
              type="file"
              name="image"
              required accept="image/*"
              onChange={(e) => handleImagePreview(e)}
            />
          </fieldset>

          <div className="form-buttons">
            <button
              className="submit"
              type="submit">
              Submit
            </button>
            <button
              className="cancel"
              type="button"
              onClick={handleCancelClick}>
              Cancel</button>
          </div>

        </div>
        <div className="form-right">
          <div className="form-image-preview">
            <img ref={img} src={catImage} />
          </div>
        </div>

      </form>
    </div>
  )
}

export default UpdateCategory
