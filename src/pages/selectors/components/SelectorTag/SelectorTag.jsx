import { useState } from "react"
import TagItem from "./components/TagItem"
import { Icon } from '@iconify/react';
const SelectorTag = ({ defultTags }) => {

    const [tags, setTags] = useState(defultTags ? [...defultTags] : [])
    const [value, setValue] = useState()

    const handleOnAddClick = () => {
        setTags([...tags, { title: value }])
    }


    const removeTag = (data) => {
        const temp = [...tags]
        const index = temp.indexOf(data)
        temp.splice(index, 1)
        setTags(temp)
    }






    return (
        <div className="seletor-tags">
            <div className="tags-body">
                {
                    tags.map((data, index) => {
                        return <TagItem removeTag={removeTag} data={data} key={index} />
                    })
                }
            </div>
            <div className="tags-header">
                <input type="text"
                    onChange={(e) => { setValue(e.target.value) }} />
                <Icon className="icon"
                    onClick={handleOnAddClick}
                    icon="material-symbols:add-circle-rounded" />
            </div>
            <input type="hidden" name="tags" value={JSON.stringify(tags)} />

        </div>
    )
}

export default SelectorTag
