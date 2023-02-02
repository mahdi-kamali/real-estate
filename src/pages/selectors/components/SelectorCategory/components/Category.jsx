import { BASE_SERVER_ULR } from "src/consts/API/API_CONSTS"

const Category = ({ data, setCategoryID, crrentSelectedID }) => {


    // console.log(setCategoryID);

    const onClick = () => {
        setCategoryID(data.id)
    }


    const imageSrc = BASE_SERVER_ULR + data.image.indexArray.large
    return (
        <div className={`category ${crrentSelectedID === data.id ? "selected" : ""} `} onClick={onClick}>
            <img src={imageSrc} />
            <h1>{data.name}</h1>
            <h2>#{data.id}</h2>
        </div>
    )
}

export default Category
