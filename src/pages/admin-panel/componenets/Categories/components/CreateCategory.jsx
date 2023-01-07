import { Icon } from '@iconify/react';
const CreateCategory = ( {setCreatingCat} ) => {


  function onCloseClick () {
    setCreatingCat(false);
  }


  return (
    <div className="create-category">
      <div className="container">
        <div className="create-header">
          Create Category :
        </div>
        <div className="create-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque recusandae ipsum magni qui autem similique eaque, vero doloremque non. Officia soluta laboriosam debitis rerum aliquam et eaque perspiciatis provident.
        </div>
        <div className="create-buttons">
          <Icon icon="ri:close-circle-fill" onClick={onCloseClick} />
        </div>
      </div>
    </div>
  )
}

export default CreateCategory
