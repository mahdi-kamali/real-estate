import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring'
import IntroSearch from './components/IntroSearch/IntroSearch';


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
                <IntroSearch />
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
