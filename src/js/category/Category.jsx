import React from 'react'
import { Icon } from '@iconify/react';
const Category = () => {
    return (
        <section className="category">
            <div className="column-one">
                <div className="header">
                    residential Real Estate
                    <Icon icon="ic:outline-real-estate-agent" />
                </div>
                <div className="body">
                    <div className="card big card-one">
                        <img src={require('../images/category/residential/3.jpg')} alt="" />
                        <h1>Family House</h1>
                    </div>
                    <div className="card small card-two">
                        <img src={require('../images/category/residential/2.jpg')} alt="" />
                        <h1>Duplex</h1>

                    </div>
                    <div className="card small card-three">
                        <img src={require('../images/category/residential/1.jpg')} alt="" />
                        <h1>Apartments</h1>

                    </div>
                    <div className="card big card-four">
                        <img src={require('../images/category/residential/4.jpg')} alt="" />
                        <h1>Vacation Homes</h1>

                    </div>
                    <div className="card small card-five">
                        <img src={require('../images/category/residential/5.jpg')} alt="" />
                        <h1>condominiums</h1>

                    </div>
                    <div className="card small card-six">
                        <img src={require('../images/category/residential/6.jpg')} alt="" />
                        <h1>TownHouses</h1>
                    </div>

                </div>
            </div>
            <div className="column-two">
                <div className="header">
                    commercial property
                    <Icon icon="cil:factory" />
                </div>
                <div className="body">
                    <div className="card small card-one">
                        <img src={require('../images/category/commercial/3.jpg')} alt="" />
                        <h1>Offices</h1>
                    </div>
                    <div className="card small card-two">
                        <img src={require('../images/category/commercial/2.jpg')} alt="" />
                        <h1>Hotels</h1>

                    </div>
                    <div className="card big card-three">
                        <img src={require('../images/category/commercial/4.jpg')} alt="" />
                        <h1>Shopping Maills</h1>

                    </div>
                    <div className="card small card-four">
                        <img src={require('../images/category/commercial/1.jpg')} alt="" />
                        <h1>Industrial</h1>

                    </div>
                    <div className="card small card-five">
                        <img src={require('../images/category/commercial/5.jpg')} alt="" />
                        <h1>WareHouse</h1>

                    </div>
                    <div className="card big card-six">
                        <img src={require('../images/category/commercial/6.jpg')} alt="" />
                        <h1>Restaurant</h1>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Category
