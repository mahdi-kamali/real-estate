import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring'


const Intro = () => {

    const [state, setState] = useState(true);
    const springAnimation = useTransition(state, {
        config: { duration: 2000 },
        from: { x: -0, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -100, y: 800, opacity: 0 },
    });



    return (
        <section className="intro page-grid-style-responsive">



            <div className="intro-body right">
                <div className="intro-image">

                    {
                        springAnimation((style, item) => {
                            return (
                                item ?
                                    <animated.div style={style} className='test'>
                                        <img src={require('./images/1.jpg')} alt="" />
                                    </animated.div> : ''
                            )

                        })
                    }
                </div>
                <div className="intro-search">

                    <div className="search-bar">
                        <div className="intro-search-bar-header">
                            <h1>
                                Need To Find Home ?
                            </h1>
                            <span>
                                Search From <small>1000</small> Proprties
                            </span>
                        </div>
                        <div className="intro-search-bar-body">
                            <Icon icon="ep:search" />
                            <input type="text" placeholder='Example : London' />

                        </div>
                    </div>
                    <div className="search-items">

                        <div className="search-most-popular">
                            <div className="most-popular-header">
                                Most Popular This Week
                            </div>
                            <div className="most-popular-body">
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('./images/search-items/1.jpg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="item-name">
                                            99 Chestnut Hill Ave
                                        </div>
                                        <div className="item-address">
                                            Brighton, MA 02135
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('./images/search-items/2.jpg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="item-name">
                                            3738 Briarcliff Rd
                                        </div>
                                        <div className="item-address">
                                            Atlanta, GA 30345
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="search-recently-added">
                            <div className="recently-added-header">
                                Recently Added
                            </div>
                            <div className="recently-added-body">
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('./images/search-items/3.jpg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="item-name">
                                            2133 Allaire Ln
                                        </div>
                                        <div className="item-address">
                                            Atlanta, GA 30345
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="communication">
                    <div className="item">
                        <Icon icon="bx:support" />
                    </div>
                    <div className="item">
                        <Icon icon="ic:sharp-attach-email" />
                    </div>
                    <div className="item">
                        <Icon icon="entypo:old-phone" />
                    </div>
                    <div className="item">
                        <Icon icon="bi:info-square-fill" />
                    </div>
                </div>
            </div>

            <div className="intro-header left">
                <div className="intro-text">
                    <h1>Home & CO</h1>
                </div>
                <div className="intro-definition">
                    <h1>Find Your Dream Home</h1>
                    <ul>
                        <li>Nearly 1000+ successful sales</li>
                        <li>
                            Properties with world-class capabilities
                        </li>
                        <li>
                            Active consultants and agencies
                        </li>
                        <li>
                            Collaboration with many prominent companies in the world
                        </li>
                        <li>
                            Provide after-sales service and madam support
                        </li>
                    </ul>
                </div>
            </div>


            <button onClick={() => { setState(!state) }}>
                Click Me
            </button>

        </section>
    )
}

export default Intro
