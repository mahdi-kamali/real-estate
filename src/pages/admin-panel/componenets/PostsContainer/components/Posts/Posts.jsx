import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL_ADMIN } from "src/consts/API/API_CONSTS"
import { setLoading } from "src/features/admin-panel/LoadingStates"
import { refreshPosts } from "src/features/admin-panel/PostsState"
import PostsItem from "./components/PostsItem"

const Posts = () => {


  const [posts, setPosts] = useState()
  const token = useSelector(state => state.user.value.token)
  const isRefreshing = useSelector(state => state.posts.value)


  const POSTS_BASE_URL = BASE_URL_ADMIN + "post"



  const dispatcher = useDispatch();
  

  const headers = {
    headers: {
      Accept: 'application/json',
      Content_Type: "application/json",
      Authorization: `Bearer ${token}`
    }
  }



  useEffect(() => {
    dispatcher(setLoading({ show: true }))
    axios.get(POSTS_BASE_URL, headers)
      .then(response => {
        setPosts(response.data.data)
        dispatcher(setLoading({ show: false }))
      }).catch(error => {
      }).finally()
  }, [isRefreshing])






  return (
    <section className="posts">
      {
        posts?.map((item, index) => {
          return <PostsItem key={index} data={item} />
        })
      }
    </section>
  )
}

export default Posts
