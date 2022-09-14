
import React, { useState } from 'react';
import DatePicker from 'sassy-datepicker';


// Redux & States
import { useDispatch } from 'react-redux';
import { setDate } from 'src/features/admin-panel/DateStates';
import { setLoading } from 'src/features/admin-panel/LoadingStates';

function RightSide() {


    const dispatcher = useDispatch()

    const onChange = (date) => {
        let array = date.toString().split(' ')
        const temp = {
            day: array[2],
            month: array[1],
            year: array[3],
            weekDay: array[0]
        }

        dispatcher(setDate({ ...temp }))
        dispatcher(setLoading({ show: true }))


        window.setTimeout(() => {
            dispatcher(setLoading({ show: false }))
        }, 1000)

    };

    return (
        <div className="right-side">
            <DatePicker className='calender' onChange={onChange} />
            <div className="todays-most-popular">
                <div className="popular-header">
                    <h1>Today's most popular</h1>
                </div>
                <div className="popular-body">
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/mid/1.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1> 665 Norfleet Rd NW </h1>
                                <small> Atlanta, GA 30305 </small>
                            </div>
                            <div className="rating">
                                24%
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/mid/2.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1> 99 Chestnut Hill Ave </h1>
                                <small> Brighton, MA 02135 </small>
                            </div>
                            <div className="rating">
                                24%
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/mid/3.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1> 665 Norfleet Rd NW </h1>
                                <small> Atlanta, GA 30305 </small>
                            </div>
                            <div className="rating">
                                24%
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/mid/4.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1> 99 Chestnut Hill Ave </h1>
                                <small> Brighton, MA 02135 </small>
                            </div>
                            <div className="rating">
                                24%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="online-agents">
                <div className="agents-header">
                    <h1>Online Agents</h1>
                </div>
                <div className="agents-body">
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/1.webp')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/2.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/3.png')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/4.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/1.webp')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/2.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/3.png')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/4.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/1.webp')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/2.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/3.png')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/4.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/1.webp')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/2.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/3.png')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/4.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/1.webp')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/2.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/3.png')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <img src={require('../images/aside/4.jpg')} alt="" />
                        </div>
                        <div className="item-body">
                            <div className="info">
                                <h1>Full Name</h1>
                                <small>Employee position</small>
                                <span>1 Hour</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide
