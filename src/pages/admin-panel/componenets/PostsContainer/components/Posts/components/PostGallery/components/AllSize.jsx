import { BASE_SERVER_ULR, BASE_URL_ADMIN } from "src/consts/API/API_CONSTS";
import ProImage from "src/pages/Images/ProImage";

import { Icon } from '@iconify/react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { refreshCategories } from "src/features/admin-panel/CategoriesState";
import { useEffect } from "react";
import GalleryCard from "./GalleryCard";
import { useState } from "react";











const AllSizes = () => {

  const token = useSelector(state => state.user.value.token)
  const postID = useSelector(state => state.popUp.value.id)
  const GALLERY_GET_URL = BASE_URL_ADMIN + `post/gallery/${postID}`
  const refreshGallery = useSelector(state => state.gallery.value)
  const [data, setData] = useState([])

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    },


    onUploadProgress: function (progressEvent) {
      console.log(Math.round((progressEvent.loaded * 100) / progressEvent.total));
    }
  };


  useEffect(() => {
    if (postID) {
      axios.get(GALLERY_GET_URL, config).then(response => {
        setData(response.data.data)
      }).catch(response => {

      })
    }

  },
    [refreshGallery])


  return (
    <div className="default-size">
      <div className="row">
        <div className="header">
          <h1>Primary Images</h1>
        </div>
        <div className="body">
          {data?.map((item, index) => {
            return <GalleryCard data={item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default AllSizes
