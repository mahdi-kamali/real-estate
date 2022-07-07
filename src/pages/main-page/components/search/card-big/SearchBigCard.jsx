import { Icon } from '@iconify/react';

// Line Progress Bar
import { Line, Circle } from 'rc-progress';


const SearchBigCard = () => {
    return (
        <div className="big-card">
            <div className="big-card-header">
                <img src={require('../images/by-category/4.jpg')} alt="" />
            </div>
            <div className="big-card-body">
                <div className="info">
                    <div className="price">
                        $<span>3,200,255</span>
                    </div>
                    <div className="name">
                        99 Chestnut Hill Ave
                    </div>
                    <div className="address">
                        Brighton, MA 02135
                    </div>
                    <div className="description hide">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur minus quas quo ullam porro atque velit dolores sit voluptate beatae suscipit, distinctio qui ab.</p>
                    </div>
                    <div className="options hide">
                        <div className="option">
                            <Icon icon="fa:bed" />
                            <span>
                                4
                            </span>
                        </div>
                        <div className="option">
                            <Icon icon="fa-solid:bath" />
                            <span>
                                4
                            </span>
                        </div>
                        <div className="option">
                            <Icon icon="fa-solid:parking" />
                            <span>
                                4
                            </span>
                        </div>
                        <div className="option">
                            <Icon icon="bx:area" />
                            <span>
                                2,700
                            </span>
                        </div>
                    </div>
                    <div className="rating hide">
                        <div className="rate">
                            <h1><Icon icon="fa-solid:car" color="black" /> Car is Needed</h1>
                            <Line
                                className='line'
                                percent={25}
                                strokeWidth={3}
                                strokeColor={`hsl(${25},70%,50%)`}
                                trailColor='transparent'
                            />
                        </div>
                        <div className="rate">
                            <h1><Icon icon="cil:animal" color="black" /> It's dog friendly</h1>
                            <Line
                                className='line'
                                percent={85}
                                strokeWidth={3}
                                strokeColor={`hsl(${85},70%,50%)`}
                                trailColor='transparent'
                            />
                        </div>
                        <div className="rate">
                            <h1><Icon icon="material-symbols:directions-walk" color="black" /> There are sidewalks</h1>
                            <Line
                                className='line'
                                percent={60}
                                strokeWidth={3}
                                strokeColor={`hsl(${60},70%,50%)`}
                                trailColor='transparent'
                            />
                        </div>
                    </div>
                    <div className="buttons hide">
                        <button>View Inside <Icon icon="bi:arrow-right" color="black" /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchBigCard
