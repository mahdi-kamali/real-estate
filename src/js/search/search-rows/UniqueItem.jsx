import { Icon } from '@iconify/react';


const UniqueItem = (props) => {
    return (
        <div>
            <div className="unique-item">
                <div className="unique-header">
                    <div className="item-header">
                        <img src={props.card.images.big} />
                    </div>
                </div>
                <div className="unique-body">
                    <div className="item-body">
                        <div className="price">
                            $ {props.card.price}
                        </div>
                        <div className="name">
                            {props.card.name}
                        </div>
                        <div className="address">
                            {props.card.address}
                        </div>
                        <div className="description">
                            {props.card.description}
                        </div>
                        <div className="options">
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
                        <div className="gallery">
                            {props.card.images.small.map((image, index) => {
                                return <img src={image} alt="" key={index} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniqueItem
