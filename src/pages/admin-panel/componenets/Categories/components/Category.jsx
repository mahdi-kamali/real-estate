import { Icon } from '@iconify/react';
const Category = ({ categoryProp }) => {


    return (
        <div className="cat">
            <div className="cat-header">
                <img src={categoryProp.catImage} alt="" />
            </div>
            <div className="cat-body">
                <div className="cat-name">
                    {categoryProp.catName}
                </div>
            </div>
            <div className="cat-buttons">
                <Icon className='edit icon' icon="material-symbols:edit-outline" />
                <Icon className='delete icon'  icon="material-symbols:delete-outline" />
            </div>
        </div>
    )
}

export default Category
