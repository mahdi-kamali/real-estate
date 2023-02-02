import { Icon } from '@iconify/react';





const TagItem = ({ data, removeTag }) => {
    const handleOnDeleteClick = () => {
        removeTag(data);
    }

    return (
        <div className="tag-item">
            <h1>{data.title}</h1>
            <button
                type='button'
                onClick={() => removeTag(data)}><Icon
                    icon="mdi:close-circle" />
            </button>
        </div>
    )
}

export default TagItem
