import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
import Loading from '../loadings/Loading';

const PopUp = (props) => {
    const isShowing = props.isShowing;
    const component = props.component
    const dispatcher = useDispatch()



    const closePopUp = () => {
        dispatcher(setPopUp("CLOSE"))
    }



    return (
        <div className={`pop-up ${isShowing ? "" : "pop-up-hide"}`}>
            <div className="container">
                {component}
                <div className="close-buttons">
                    <Icon icon="ri:close-circle-fill" onClick={closePopUp} />
                </div>
            </div>
        </div>
    )
}

export default PopUp
