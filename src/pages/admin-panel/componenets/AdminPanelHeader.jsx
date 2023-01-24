import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { ALERT_STATUS_SUCCESS, ALERT_TYPE_TEXT } from 'src/consts/Alert/ALERTS_CONSTS';
import { addAlert } from 'src/features/alert/AlertsState';

function AdminPanelHeader() {

  const dispatcher = useDispatch()

  const onImgClick = () => {
  
  }

  return (
    <header>
      <div className="left">
        <img src={require('../images/header/1.png')} alt="" />
        <h1>Home & Co</h1>
      </div>
      <div className="mid">
        <div className="column">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="column">
          <div className="icon">
            <Icon icon="carbon:notification" color="black" />
          </div>
          <div className="icon">
            <Icon icon="simple-line-icons:calender" color="black" />
          </div>
          <div className="icon">
            <Icon icon="bi:chat-square-text" color="black" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="img">
          <img src={require('../images/header/2.webp')} alt="" onClick={onImgClick} />
        </div>
        <div className="info">
          <h1> Admin Name </h1>
          <h1> Project Manager </h1>
        </div>
      </div>
    </header>
  )
}

export default AdminPanelHeader
