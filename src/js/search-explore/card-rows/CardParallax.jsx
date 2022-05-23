

// React Parallax
import { Parallax, Background } from 'react-parallax';


//  React Iconify
import { Icon, InlineIcon } from '@iconify/react';

const CardParallax = (props) => {
  return (
    <div className="card-parallax">
      <Parallax className='parallax' strength={300}>
        <Background className='parallax-background' >
          <img src={props.card.images.big} />
        </Background>

        <div className="parallax-body">

          <div className="left">
            <div className="info">
              <span className='name'>{props.card.info.cardName}</span>
              <span className='address'>{props.card.info.cardAddress}</span>
            </div>

          </div>

          <div className="right">
            <div className="buttons">
              <Icon icon="fa6-solid:map-location-dot" />
              <Icon icon="ci:share" />
            </div>
          </div>

        </div>
      </Parallax>
    </div>
  )
}

export default CardParallax
