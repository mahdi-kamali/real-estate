import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ALERT_TYPE_TEXT } from 'src/consts/Alert/ALERTS_CONSTS';
import AlertButton from './components/AlertButton';
import AlertText from './components/AlertText';



const AlertsBox = (props) => {

  const [isShowing, setShowing] = useState("show")

  const [status, setStatus] = useState("question")


  const alerts = useSelector(state => state.alerts.value)





  return (
    <div className="alertsBox">
      {
        alerts.map((alert, index) => {
          switch (alert.type) {
            case ALERT_TYPE_TEXT: {
              return <AlertText
                key={index}
                alertId = {alert.id}
                alertHeader={alert.header}
                alertBody={alert.body}
                outTime={alert.timeOut}
                status={alert.status} />

              break;
            }


          }
        })
      }

      {/* <AlertButton /> */}
    </div>
  )
}

export default AlertsBox
