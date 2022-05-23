import React from 'react'
import { Icon } from '@iconify/react';
function AgentsCard(props) {
  return (
    <div className="agent">
      <div className="agent-image">
        <img src={props.agent.picture.large} alt="" />
      </div>
      <div className="agent-info">
        <div className="row social-media">
          <Icon icon="jam:facebook" />
          <Icon icon="akar-icons:twitter-fill" />
        </div>
        <div className="row info">
          <h1> {`${props.agent.name.first + " " + props.agent.name.last}`}  </h1>
          <h2> Date : <span>jan 16 ,2025</span> </h2>
        </div>
        <div className="row star">
          <Icon icon="emojione:star" />
          <Icon icon="emojione:star" />
          <Icon icon="emojione:star" />
        </div>
        <div className="row comment">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident porro maiores nesciunt, aspernatur magnam non molestias nostrum asperiores aliquid cupiditate ab doloribus est excepturi rerum animi consectetur. Sapiente, laudantium nobis.
          </p>
        </div>

      </div>
    </div>
  )
}
export default AgentsCard

