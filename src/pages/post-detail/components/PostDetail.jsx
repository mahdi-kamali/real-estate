import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { BASE_APP_URL, BASE_SERVER_ULR } from "src/consts/API/API_CONSTS"
import ImageSlider from "src/pages/main-page/components/image-slider/ImageSlider"
import CardDescription from "src/pages/main-page/components/search-explore/card-rows/CardDescription"
import CardComments from "./card-rows/CardComments"
import CardTheme from "./card-rows/CardTheme"





const PostDetail = () => {

  const [post, setPost] = useState()
  const params = useParams()
  const postID = params.id
  const POST_GET_BASE_URL = BASE_APP_URL + "detail/" + postID

  useEffect(() => {
    axios.get(POST_GET_BASE_URL)
      .then(response => {
        setPost(response.data.data[0])
      })
  }, [postID])






  if (post) {
    return (
      <section className="search-explore">
        <div className="section-header">
          <h1>
            <span>Property</span>
            <span>Detail</span>
          </h1>
        </div>
        <div className="section-body">
          {
            <div className="card">

              <div className="card-row">
                <ImageSlider post={post} />
              </div>

              <div className="card-row">
                <CardDescription post={post}  />
              </div>


              <div className="card-row">
                < CardTheme post={post} />
              </div>

              <div className="card-row">
                <CardComments card={post} />
              </div>

              <div className="card-row">
                {/* <CardInformation card={props.card} /> */}
              </div>

              <div className="card-row">
                {/* <PriceTrends card={props.card} /> */}
              </div>

              <div className="card-row">
                {/* <CardProprtyProvider card={props.card} /> */}
              </div>

              <div className="card-row">
                {/* <CardArrangeViewing card={props.card} /> */}
              </div>

            </div>
          }

        </div>
      </section>
    )
  }



}

export default PostDetail
