import React from 'react'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios';
import AgentsCard from './AgentsCard';
import AgentsSlider from './AgentsSlider';
const Agents = () => {

    const [agents, setAgents] = useState([])
    const BASE_API = 'https://randomuser.me/api/'


    useEffect(

        () => {
            axios.get(BASE_API).then(
                response => {
                    setAgents(response.data.results)
                }
            )
        }, [BASE_API]

    )



    return (
        <section className='agents'>

            {
            agents ? <AgentsSlider agents={agents} /> : null
            }
        </section>

    )
}

export default Agents
