import { Icon } from '@iconify/react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'src/features/admin-panel/LoadingStates';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
import { login } from 'src/features/user/user';
import Loading from 'src/pages/loadings/Loading';

const UserLogin = ({ setMode }) => {

    const BASE_LOGIN_URL = "http://192.168.1.106/api/login"


    const tempEmail = "admin@gmail.com"
    const tempPassword = "12345678"

    const [email, setEmail] = useState()
    const [password, setPassword] = useState();

    const [disabled, setDisabled] = useState(false)


    const [error, setError] = useState()
    const [success, setSuccess] = useState()


    const dispatcher = useDispatch()


    const emailInputChange = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const passwordInputChange = (e) => {
        const value = e.target.value
        setPassword(value)
    }


    const params = {
        email: email,
        password: password
    }



    const loginClick = (e) => {
        dispatcher(setLoading({ show: true }))
        setDisabled(true)
        setTimeout(() => {
            axios.post(BASE_LOGIN_URL, params)
                .then(response => {
                    let user = undefined;
                    if (response.status == 200) {
                        user = response.data.data;
                        const message = response.data.message
                        setError(undefined)
                        setSuccess(message)
                        setTimeout(() => {
                            dispatcher(login(user))
                            dispatcher(setPopUp("CLOSE"))
                        }, 3000)

                    }
                })
                .catch(thrown => {
                    const message = thrown.response.data.message
                    setError(message)
                    setSuccess(undefined)
                })
            setDisabled(false)
            dispatcher(setLoading({ show: false }))

        }, 3000)
    }


    return (
        <div className="left-body login">
            <fieldset className="form-group">
                <legend><Icon icon="ic:round-alternate-email" />Email</legend>
                <input type="email" required onChange={emailInputChange} />
            </fieldset>
            <fieldset className="form-group">
                <legend><Icon icon="mdi:password" />Password</legend>
                <input type="text" required onChange={passwordInputChange} />
            </fieldset>
            <div className="form-states">
                {error !== undefined ? <p className='error'>
                    {error} <Icon className='icon' icon="mdi:close-thick" />
                </p> : ""}

                {
                    success !== undefined ? <p className='success'>
                        {success}  <Icon className='icon' icon="mdi:success-bold" />
                    </p> : ""
                }


            </div>
            <div className="form-change">
                <button type='button' onClick={() => setMode("SignUp")}>Need an account? Sign Up </button>
            </div>
            <div className="form-buttons">
                <div className="options">
                    <button disabled={disabled} type='button'>
                        Google
                        <Icon icon="flat-color-icons:google" />
                    </button>
                    <button type='button'>
                        facebook
                        <Icon icon="logos:facebook" />
                    </button>
                </div>
                <div className="submits">
                    <button onClick={loginClick} type="button" disabled={disabled}>
                        Login<Icon icon="material-symbols:keyboard-arrow-right" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default UserLogin
