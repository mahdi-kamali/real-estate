import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring'
import IntroSearch from './components/IntroSearch/IntroSearch';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


const Intro = () => {

    const [state, setState] = useState(true);

    const [percentage, setPercentage] = useState(0)

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
                <img className='background' src={require('./images/5.jpg')} alt="" />
                <div className="boxs-container">
                    <div className="box">
                        <div className="box-container">
                            <span>4</span>
                            <span>Year</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-container">
                            <span>150</span>
                            <span>Agents</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-container">
                            <span>250</span>
                            <span>Estates</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-container">
                            <span>10</span>
                            <span>Country</span>
                        </div>
                    </div>

                </div>
                <div className="text-container">
                    <h1>Lorem Ipsunm ?</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, rerum ullam illo nostrum iste ad aspernatur adipisci facilis excepturi voluptas at in temporibus iusto porro veniam voluptates omnis autem laudantium.
                    </p>
                </div>
                <div className="text-container">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem deserunt est ullam quia, distinctio quo veniam pariatur corporis repellendus atque, cum nihil quae temporibus doloribus repellat, illum voluptatum! Officiis, natus.
                </div>
            </div>



        </section>
    )
}

export default Intro
