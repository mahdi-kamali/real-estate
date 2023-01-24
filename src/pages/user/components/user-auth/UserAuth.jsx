import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';
const UserAuth = () => {


    const [mode, setMode] = useState("Login");




    return (
        <div className="user-popup-container">
            <div className="left" >
                <div className="left-header">
                    <h1 className={`${mode === "Login" ? "go-left" : "go-right"}`}>
                        {mode}
                    </h1>
                </div>
                {mode === "Login" ? <UserLogin setMode={setMode} /> : ""}
                {mode === "SignUp" ? <UserSignUp setMode={setMode} /> : ""}
            </div>
            <div className="right">
                <img src={require("../../images/2.jpg")} alt="" />
            </div>
        </div>
    )
}

export default UserAuth
