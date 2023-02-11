import { Icon } from '@iconify/react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ALERT_STATUS_DANGER, ALERT_STATUS_SUCCESS, ALERT_STATUS_WARNING, ALERT_TYPE_TEXT } from 'src/consts/Alert/ALERTS_CONSTS';
import { BASE_SERVER_ULR, BASE_URL_ADMIN } from 'src/consts/API/API_CONSTS';
import { refreshGallery } from 'src/features/admin-panel/GalleryStates';
import { setLoading } from 'src/features/admin-panel/LoadingStates';
import { addAlert } from 'src/features/alert/AlertsState';
import ProImage from 'src/pages/Images/ProImage';



const GalleryCard = ({ data }) => {


  const dispatcher = useDispatch()

  const src = BASE_SERVER_ULR + data?.attributes.postGalleryImage
  const type = data.attributes.type
  const token = useSelector(state => state.user.value.token)
  const GALLERY_DELETE_URL = BASE_URL_ADMIN + `post/gallery/${data.galleryId}`



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

  const onItemDeleteClick = () => {
    dispatcher(setLoading({ show: true }))
    axios.delete(GALLERY_DELETE_URL, config)
      .then(response => {
        dispatcher(refreshGallery())
        if (response.status === 200) {
          dispatcher(setLoading({ show: false }))
          dispatcher(addAlert({
            type: ALERT_TYPE_TEXT,
            status: ALERT_STATUS_WARNING,
            header: "Image Deleted !",
            body: response.data.message,
            timeOut: 3
          }))
        }
      }).catch(error => {
        console.log(error)
      })
  }



  return (
    <div className="item primary">

      <div className={`item-header ${type}`}>
        <ProImage
          src={src}
          animation={"fadeIn"}
          selfClass={"item-image"} />
      </div>
      <div className="item-body">
        <div className="item-type">
          <button><Icon icon="ic:sharp-star" />Primary</button>
        </div>
      </div>
      <div className="item-buttons">
        <button className="delete" onClick={onItemDeleteClick}>
          <Icon icon="ic:baseline-delete" />
        </button>
        <button className="view">
          <Icon icon="ic:outline-remove-red-eye" />
        </button>
        <button className="type">
          <Icon icon="eos-icons:system-ok-outlined" />
        </button>
      </div>
    </div>
  )
}

export default GalleryCard
