import { useRef } from "react";

const CreateCategory = (props) => {



  const isShowing = props.isShowing
  const img = useRef()

  function handleFormSubmit(e) {
    e.preventDefault();
  }


  function handleImagePreview(e) {

    const file = e.target.files[0];
    console.log(file.name);


    const fileLoader = new FileReader()

    fileLoader.readAsDataURL(file)

    fileLoader.onload = (e) => {
      const src = e.target.result;
      console.log(src);
      img.current.src = src

    }



  }



  return (
    <div className={`create-category`}>
      <div className="create-header">
        Create Category
      </div>
      <form className="create-body" onSubmit={(e) => { handleFormSubmit(e) }}>

        <div className="form-left">


          <fieldset className="form-group">
            <legend>Category Name</legend>
            <input type="text" name="cat-name" required />
          </fieldset>


          <fieldset className="form-group">
            <legend>Category Image</legend>
            <input type="file" name="cat-image" required accept="image/*" onChange={(e) => handleImagePreview(e)} />
          </fieldset>

          <div className="form-buttons">
            <button>Submit</button>
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
