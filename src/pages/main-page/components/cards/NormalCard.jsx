

import { Icon } from '@iconify/react';

const NormalCard = (props) => {
  return (
    <div className='normal-card'>
      <div className="normal-card-header">
        <img src={props.card.images.big} />
      </div>
      <div className="normal-card-body">
        <div className="price">
          ${props.card.price}
        </div>
        <div className="name">
          {props.card.name}
        </div>
        <div className="address">
          {props.card.address}
        </div>
        <div className="options">
          {props.card.options.map((option, index) => {
            return (
              <div className="option" key={index}>
                <Icon icon={option.svg} />
                <span>
                  {option.body}
                </span>
              </div>
            )
          })}
        </div>
        <div className="buttons">
          <button>
            view Inside
            <Icon icon="bi:arrow-right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NormalCard
