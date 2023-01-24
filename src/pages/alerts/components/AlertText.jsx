import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { useStateManager } from 'react-select';
import { removeAlert } from 'src/features/alert/AlertsState';

const AlertText = ({ alertId, alertHeader, alertBody, outTime, status }) => {

    const dispatcher = useDispatch()

    const [isShowing, setIsShowing] = useState("show");
    const [timerProgress, setTimerProgress] = useState(0);
    const [destroy, setDestroy] = useState(false)

    let icon;
    switch (status) {
        case "success": { icon = 'ep:success-filled'; break; }
        case 'danger': { icon = "material-symbols:cancel"; break; }
        case "warning": { icon = "mdi:warning-circle"; break; }
        case "question": { icon = "mdi:question-mark-circle"; break; }
        default: { icon = "mdi:question-mark-circle"; break; }
    }


    const onCloseClick = () => {
        dispatcher(removeAlert(alertId))
    }





    useEffect(() => {

        let timerOne, timeTwo;
        if (outTime) {
            let timerOne = setTimeout(() => {
                setTimerProgress(100)
            }, 2000);
            let hideTimer = setTimeout(() => {
                setIsShowing("hide")
            }, (outTime + 2) * 1000)

            let destroyTimer = setTimeout(() => {
                setDestroy(true)
            }, (outTime + 3) * 1000)
        }

        return () => {
            clearTimeout(timerOne);
            clearTimeout(timeTwo)
            setDestroy(true);
        }


    }, [])


    if (destroy === false) {
        return (
            <div className={`alertText ${isShowing} ${status} `}>
                <div className="left">
                    <Icon className='icon' icon={icon} />
                    <CircularProgressbar
                        className='timer'
                        value={timerProgress}
                        styles={{
                            // Customize the root svg element
                            root: {

                            },
                            // Customize the path, i.e. the "completed progress"
                            path: {
                                // Path color
                                stroke: `rgb(255,255,255)`,
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Customize transition animation
                                transition: `stroke-dashoffset ${(outTime ? outTime : 3)}s ease 0s`,
                                // Rotate the path
                                transform: 'rotate(0turn)',
                                transformOrigin: 'center center',
                            },
                            // Customize the circle behind the path, i.e. the "total progress"
                            trail: {
                                // Trail color
                                stroke: 'rgba(0,0,0,0)',
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Rotate the trail
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            // Customize the text
                            text: {
                                // Text color
                                fill: '#f88',
                                // Text size
                                fontSize: '16px',
                            },
                            // Customize background - only used when the `background` prop is true
                            background: {
                                fill: '#3e98c7',
                            },
                        }} />
                </div>
                <div className="right">
                    <h1 className="alert-header">
                        {alertHeader}
                    </h1>
                    <div className="alert-body">
                        <p>
                            {alertBody}
                        </p>
                        <button className='closeAlert' onClick={onCloseClick}>
                            <Icon icon="ion:trash-sharp" color='#000000' />
                        </button>
                    </div>

                </div>
            </div>
        )
    }

}

export default AlertText
