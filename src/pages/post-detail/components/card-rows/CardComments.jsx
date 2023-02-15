//  Card Comments Content
import CardCommentsContent from './CardCommentsContent';

// Card Comments Progress Items 
import CardCommentsRatings from './CardCommentsRatings'


const CardComments = ({ post }) => {
    return (
        <div className="card-comments">
            <div className="comments-header">
                <h1>Visitir Comments</h1>
            </div>
            <div className="comments-body">
                {/* <CardCommentsRatings card={props.card} /> */}
                <CardCommentsContent post={post} />
            </div>
        </div>
    )
}

export default CardComments
