//  React Iconify
import { Icon, InlineIcon } from '@iconify/react';

// Line Progress Bar
import { Line, Circle } from 'rc-progress';



const CardCommentsRatings = (props) => {
    return (
        <div className="card-comments-ratings">
            <div className="comments-ratings-header">
                <h1>
                    Ratings for This Property
                </h1>
                <small>{props.card.comments.ratings.votes} Peoples Voted</small>

            </div>
            <div className="comments-ratings-body">
                {props.card.comments.ratings.items.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="item-header">
                                <Icon icon={item.itemHeader.svg} />
                                <h1>{item.itemHeader.content}</h1>
                            </div>
                            <div className="item-body">
                                <Line
                                    className='line'
                                    percent={item.itemBody.percent.value}
                                    strokeWidth={3}
                                    strokeColor={`hsl(${item.itemBody.percent.value},70%,50%)`}
                                    trailColor='transparent'
                                />
                                <span>
                                    {item.itemBody.percent.text}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardCommentsRatings
