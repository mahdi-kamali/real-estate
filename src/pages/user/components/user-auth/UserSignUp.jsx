import { Icon } from '@iconify/react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'src/features/admin-panel/LoadingStates';
import { closePopUp, setPopUp } from 'src/features/admin-panel/PopUpStates';
import user, { signUp } from 'src/features/user/user';

const UserSignUp = ({ setMode }) => {


    const BASE_SIGN_UP_URL = "http://192.168.1.106/api/register"

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState()

    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const [disabled, setDisabled] = useState(false)


    const tempEmail = `${Math.floor(Math.random() * 1000)}@gmail.com`
    const tempPassword = "12345678"
    const tempName = "tester"


    const dispatcher = useDispatch()


    const nameInputChange = (e) => {
        const value = e.target.value
        setName(value)
    }

    const emailInputChange = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const passwordInputChange = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const passwordConfirmationInputChange = (e) => {
        const value = e.target.value
        setPasswordConfirmation(value)
    }

    const signUpClick = () => {
        const params = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }
        const headers = {
            'Content-Type': 'application/vnd.api+json',
        }

        dispatcher(setLoading({show : true}))
        setDisabled(true)

        setTimeout(() => {
            axios.post(BASE_SIGN_UP_URL, params, headers)
                .then(response => {
                    if (response.status == 200) {
                        const message = response.data.message
                        setSuccess(message)
                        setError(undefined)
                        const user = response.data.data
                        setTimeout(() => {
                            dispatcher(signUp(user))
                            dispatcher(setPopUp("CLOSE"))
                        }, 3000)
                    }
                })
                .catch(error => {
                    const errorMessage = error.response.data.message
                    setError(errorMessage)
                    setSuccess(undefined)
                })
                dispatcher(setLoading({show : false}))
                setDisabled(false)
        }, 3000)


    }



    return (
        <div className="left-body sign-up">
            <fieldset className="form-group">
                <legend><Icon icon="wpf:name" />Name</legend>
                <input type="text" required onChange={nameInputChange} />
            </fieldset>
            <fieldset className="form-group">
                <legend><Icon icon="ic:round-alternate-email" />Email</legend>
                <input type="email" required onChange={emailInputChange} />
            </fieldset>
            <fieldset className="form-group">
                <legend><Icon icon="mdi:password" />Password</legend>
                <input type="password" required onChange={passwordInputChange} />
            </fieldset>
            <fieldset className="form-group">
                <legend><Icon icon="mdi:password" />Password Confirmation </legend>
                <input type="password" required onChange={passwordConfirmationInputChange} />
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
                <button type='button' onClick={() => setMode("Login")}> Having an Account ? Login </button>
            </div>
            <div className="form-buttons">
                <div className="options">
                    <button type='button' disabled={disabled}>
                        Google
                        <Icon icon="flat-color-icons:google" />
                    </button>
                    <button type='button' disabled={disabled}>
                        facebook
                        <Icon icon="logos:facebook" />
                    </button>
                </div>
                <div className="submits">
                    <button onClick={signUpClick} disabled={disabled}>
                        Sign Up<Icon icon="material-symbols:keyboard-arrow-right" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default UserSignUp
