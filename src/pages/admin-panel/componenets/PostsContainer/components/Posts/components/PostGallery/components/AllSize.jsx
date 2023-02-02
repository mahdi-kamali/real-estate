import { BASE_SERVER_ULR } from "src/consts/API/API_CONSTS";



const AllsizeCard = ({ data }) => {
  console.log(data.attributes);
  return (
    <div className="item">
      <div className="item-header">
        <img src={BASE_SERVER_ULR + data.attributes.postGalleryImage.indexArray.largeRect } alt="" />
      </div>
      <div className="item-body"></div>
    </div>
  )
}


const AllSizes = ({ data }) => {


  return (
    <div className="default-size">
      <div className="header">
        <h1>All Size</h1>
      </div>
      <div className="body">
        {data?.map((item, index) => {
          return <AllsizeCard data={item} />
        })}
      </div>
    </div>
  )
}

export default AllSizes
