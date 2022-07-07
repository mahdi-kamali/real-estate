
import { Icon } from '@iconify/react';

const Agents = () => {



    return (
        <section className='agents'>
            <div className="agents-header">
                <h1>Online
                    <span>Agents</span>
                </h1>

            </div>
            <div className="agents-body">
                <div className="left">
                    <div className="text">
                        <h1>Do you need an agent ? </h1>
                        <small>try online chating with our non stop chating agents! </small>
                    </div>
                    <img src={require('../images/agents/5.jpg')} alt="" />
                </div>
                <div className="right">
                    <div className="chat-history">

                        <div className="chat agent">
                            <div className="chat-header">
                                <img src={require('../images/compressor/4.jpg')} alt="" />
                                <div className="info">
                                    <h1>َAlex</h1>
                                    <small>2 min Ago</small>
                                </div>
                                <div className="like">
                                    <div className="liked click">
                                        <h1>HelpFul</h1>
                                        <Icon icon="fluent:thumb-like-16-filled" color='black' />
                                    </div>
                                </div>
                            </div>
                            <div className="chat-body">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, est? Nostrum, culpa debitis enim sed rem laboriosam error illum minima repudiandae fugiat dolorum provident eius! Voluptates sint reprehenderit eligendi? Dolorum.
                            </div>
                        </div>
                        <div className="chat client">
                            <div className="chat-header">
                                <img src={require('../images/compressor/5.jpg')} alt="" />
                                <div className="info">
                                    <h1>َYou</h1>
                                    <small>2 min Ago</small>
                                </div>

                            </div>
                            <div className="chat-body">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, est? Nostrum, culpa debitis enim sed rem laboriosam error illum minima repudiandae fugiat dolorum provident eius! Voluptates sint reprehenderit eligendi? Dolorum.
                            </div>
                        </div>

                    </div>
                    <div className="chat-input">

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Agents
