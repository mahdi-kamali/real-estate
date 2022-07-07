//  Card Comments Content
import CardCommentsContent from './CardCommentsContent';

// Card Comments Progress Items 
import CardCommentsRatings from './CardCommentsRatings'


const CardComments = (props) => {
    return (
        <div className="card-comments">
            <div className="comments-header">
                <h1>Visitir Comments</h1>
            </div>
            <div className="comments-body">
                <CardCommentsRatings card={props.card} />
                <CardCommentsContent card={props.card} />
            </div>
        </div>
    )
}

export default CardComments
