import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
import UserLogin from './UserLogin';
const UserAuth = () => {


    const [mode,setMode] = useState("SignUp");

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    


    return (
        <div className="login">
            <form className="left" onSubmit={handleFormSubmit}>
                <div className="left-header">
                    <h1 className={`${mode==="login" ? "go-left" : "go-right"}`}>
                        {mode}
                    </h1>
                </div>
               {mode === "Login" ? <UserLogin setMode={setMode}/> : ""}
            </form>
            <div className="right">
                <img src={require("../images/2.jpg")} alt="" />
            </div>
        </div>
    )
}

export default UserAuth
