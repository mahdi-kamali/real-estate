
//  React Iconify
import { Icon, InlineIcon } from '@iconify/react';


const CardHighLights = (props) => {
    return (
        <div className="card-high-lights">
            <div className="high-lights-header">
                <h1>Property Highlights</h1>
            </div>
            <div className="high-lights-body flex-responsive-7rem">

                {props.card.highlights.items.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="item-header">
                                <div className="svg">
                                    <Icon icon={item.itemHeader.svg} />
                                </div>
                                <div className="content">
                                    {item.itemHeader.content}
                                </div>
                            </div>
                            <div className="item-body">
                                {item.itemBody.content}
                            </div>
                        </div>

                    )
                })}

            </div>
        </div>
    )
}

export default CardHighLights
