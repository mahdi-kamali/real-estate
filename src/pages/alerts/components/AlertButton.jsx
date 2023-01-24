import { Icon } from '@iconify/react';

const AlertButton = () => {
    return (
        <div className="alertButton">
            <div className="left">
                <Icon className='icon' icon="ep:success-filled" />
            </div>
            <div className="right">
                <h1 className="alert-header">
                    Want Continue ?
                </h1>
                <ul className="alert-body">
                    <li>
                        <button>Accept</button>
                    </li>
                    <li>
                        <button>Cancel</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AlertButton
