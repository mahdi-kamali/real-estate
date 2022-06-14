import { Icon } from '@iconify/react';

import NormalCard from 'src/js/cards/NormalCard';



const UniqueList = (props) => {
    return (
        <div className="unique-list">
            <div className="list-header"></div>
            <div className="list-body">

                {props.cards.map((card, index) => {
                    return <NormalCard card={card} key={index} />
                })}

            </div>
        </div>
    )
}

export default UniqueList
