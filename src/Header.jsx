import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Accordion, AccordionButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from './pages/pop-ups/PopUp';
import UserPopUp from './pages/user/UserPopUp';
import { setPopUp } from './features/admin-panel/PopUpStates';
import { USER_POP_OPEN } from './consts/popUp/POP_UP_CONTS';


const Header = () => {
    const sideBar = useRef(null)
    const sideBarSvg = useRef(null)
    const [sideBarState, setSideBarState] = useState(false)
    const navigate = useNavigate();

    const sideBarMenuOpenCloseClick = () => {
        !sideBarState ? sideBar.current.style.transform = 'translateY(0%)' : sideBar.current.style.transform = 'translateY(-120%)'
        setSideBarState(!sideBarState);
    }

    const dispatcher = useDispatch()

    const popUp = useSelector(state => state.popUp.value)

    const data = useSelector(state => state.user.value)

    const user = data ? data.user.role : undefined

    console.log(user);

    function signOrLogClick() {
        dispatcher(setPopUp(USER_POP_OPEN))
    }



    return (
        <>
            <header>
                <div className="left">
                    <div className="logo">
                        <img src={require('./pages/main-page/components/images/header/logo/1.png')} alt="" />
                    </div>
                    <div className="text">
                        <div className="row">
                            <h1>Home & CO</h1>
                        </div>
                    </div>
                    <div className="rent">
                        <button>rent</button>
                    </div>
                    <div className="buy">
                        <button>buy</button>
                    </div>
                    <div className="mortgage">
                        <button>mortgage</button>
                    </div>
                    {
                        user === 1 ? <div className="mortgage">
                            <button onClick={() => { navigate('/admin-panel/dashboard') }} >Admin Panel</button>
                        </div> : ""

                    }



                </div>
                <div className="right">
                    <ul className='header-list'>
                        <li>
                            <span>3</span>
                            Saved Homes
                        </li>
                        <li>
                            New Estates
                        </li>
                        <li>Agents</li>
                        <li>Home</li>

                    </ul>
                    <button className="account" onClick={signOrLogClick}>
                        <Icon icon="ic:round-account-circle" />
                        {data ? data.user.name : "Login / SignUp"}
                    </button>
                    <div className="side-bar">
                        <div className="side-bar-open-close-button" ref={sideBarSvg} onClick={sideBarMenuOpenCloseClick} >
                            <button>
                                {!sideBarState ? <Icon icon="healthicons:ui-menu-grid" /> : <Icon icon="ep:close-bold" />}
                            </button>
                        </div>
                        <Accordion defaultActiveKey={0} className='side-bar-acordion-list' ref={sideBar}>
                            <button className="side-bar-accordion-account">
                                <Icon icon="ic:round-account-circle" />
                                Sign Up Or Login
                            </button>
                            <Accordion.Item key={0} eventKey="0" onClick={() => { }} >
                                <Accordion.Header >
                                    <Icon icon="ic:outline-real-estate-agent" />
                                    RESIDENTIAL
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="item">
                                        <a href="#">Family House</a>
                                    </div>
                                    <div className="item">
                                        <a href="#">Duplex</a>
                                    </div>
                                    <div className="item">
                                        <a href="#">Apartment</a>
                                    </div>
                                    <div className="item">
                                        <a href="#">Vacation Home</a>
                                    </div>
                                    <div className="item">
                                        <a href="#">Condominiums</a>
                                    </div>
                                    <div className="item">
                                        <a href="#">Town House</a>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item key={1} eventKey="1">
                                <Accordion.Header>
                                    <Icon icon="cil:factory" />
                                    COMMERCIAL
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="item">
                                        <a href="#">
                                            Office
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            Hotels
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            Shopping Mails
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            Industrial
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            Restaurant
                                        </a>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item key={2} eventKey="2">
                                <Accordion.Header>
                                    <Icon icon="la:handshake" />
                                    BUY
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="item">
                                        <a href="#">
                                            Home
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            Office
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            Restaurant
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            Hotel
                                        </a>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item key={3} eventKey="3">
                                <Accordion.Header>
                                    <Icon icon="fluent:key-20-regular" />
                                    Rent
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="item">
                                        <a href="#">
                                            All Rentals
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            Apartment For Rent
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            House For Rent
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            And Others ...
                                        </a>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <div className="no-acordion-item">
                                <Icon icon="ci:home-alt-plus" />
                                New homes
                            </div>
                        </Accordion>
                    </div>
                </div>

            </header>
            <PopUp component={<UserPopUp />} isShowing={popUp === USER_POP_OPEN} />
        </>

    )
}

export default Header
