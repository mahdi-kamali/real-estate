import { Icon } from '@iconify/react';


const UniqueItem = (props) => {
    return (
        <div className="unique-item page-grid-style-responsive">
            <div className="item-header right">
                <img src={props.card.images.wide} />
            </div>
            <div className="item-body left">
                <div className="item-price">
                    $<span>1,100,000</span>
                </div>
                <div className="item-name">
                    <h1>665 Norfleet Rd NW</h1>
                </div>
                <div className="item-address">
                    <h2>Atlanta, GA 30305</h2>
                </div>
                <div className="item-rating">
                    <h2><span>4</span> Star</h2>
                    <div className="stars">
                        <Icon icon="emojione:star" />
                        <Icon icon="emojione:star" />
                        <Icon icon="emojione:star" />
                        <Icon icon="emojione:star" />
                    </div>
                </div>
                <div className="item-category">
                    <div className="category">
                        <span>duplex</span>
                    </div>
                    <div className="category">
                        <span>Home</span>
                    </div>
                    <div className="category">
                        <span>Vacation House</span>
                    </div>
                    <div className="category">
                        <span>Vailla</span>
                    </div>
                    <div className="category">
                        <span>duplex</span>
                    </div>
                </div>
                <div className="item-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, praesentium? Laudantium, harum et fugiat aspernatur in eveniet officiis placeat quod nemo sed numquam explicabo voluptatem doloribus ipsam nam possimus earum.</p>
                </div>
                <div className="item-options">
                    <div className="option bed">
                        <small>bed <span>3</span> </small>
                    </div>
                    <div className="option bath">
                        <small>bath<span>3</span></small>
                    </div>
                    <div className="option parking">
                        <small>parking<span>3</span></small>
                    </div>
                    <div className="option sqft">
                        <small>sqft<span>3</span></small>
                    </div>
                </div>
                <div className="view-inside">
                    <span>View Inside</span>
                    <Icon icon="bi:arrow-right" />
                </div>
            </div>
        </div>
    )
}

export default UniqueItem
