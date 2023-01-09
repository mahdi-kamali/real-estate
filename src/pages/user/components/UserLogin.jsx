import { Icon } from '@iconify/react';

const UserLogin = ({ setMode }) => {
    return (
        <div className="left-body login">
            <fieldset className="form-group">
                <legend><Icon icon="ic:round-alternate-email" />Email</legend>
                <input type="email" required />
            </fieldset>
            <fieldset className="form-group">
                <legend><Icon icon="mdi:password" />Password</legend>
                <input type="password" required />
            </fieldset>
            <div className="form-change">
                <button type='button' onClick={() => setMode("signUp")}>Need an account? Sign Up </button>
            </div>
            <div className="form-buttons">
                <div className="options">
                    <button type='button'>
                        Google
                        <Icon icon="flat-color-icons:google" />
                    </button>
                    <button type='button'>
                        facebook
                        <Icon icon="logos:facebook" />
                    </button>
                </div>
                <div className="submits">
                    <button>
                        Login<Icon icon="material-symbols:keyboard-arrow-right" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default UserLogin
