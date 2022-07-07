
import { Icon } from '@iconify/react';

// React Select 
import React, { Component } from 'react'


const CategorySearch = () => {


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' }
    ]



    return (
        <div className="category-search">
            <form className="category-search-header">
                <div className="header-text">
                    <h1>Explore Places & Properties</h1>
                </div>
                <div className="search-bar">
                    <Icon icon="ep:search" />
                    <input type="text" placeholder='Enter An address city or zip code' />
                </div>
                <div className="search-mode ">
                    <button type='button' className='selected'><Icon icon="codicon:home" color="black" /> buy</button>
                    <button type='button' className=''><Icon icon="fluent:key-24-regular" color="black" />rent</button>
                    <button type='button' className=''><Icon icon="fa:handshake-o" color="black" />mortgage</button>
                </div>
            </form>
            <div className="category-search-body">
                <div className="search-suggest">

                    <div className="suggest">
                        <h1>Riverside, CA</h1>
                        <Icon icon="fa6-solid:map-location-dot" color="black" />
                    </div>

                    <div className="suggest">
                        <h1>College Station, TX</h1>
                        <Icon icon="fa6-solid:map-location-dot" color="black" />
                    </div>

                    <div className="suggest">
                        <h1>Bellevue, WA</h1>
                        <Icon icon="fa6-solid:map-location-dot" color="black" />
                    </div>

                    <div className="suggest">
                        <h1>Madison, WI</h1>
                        <Icon icon="fa6-solid:map-location-dot" color="black" />
                    </div>

                    <div className="suggest">
                        <h1>Mountain View, CA</h1>
                        <Icon icon="fa6-solid:map-location-dot" color="black" />
                    </div>

                    <div className="suggest">
                        <h1>Oak Park, IL</h1>
                        <Icon icon="fa6-solid:map-location-dot" color="black" />
                    </div>

                    <div className="suggest">
                        <h1>Oak Park, IL</h1>
                        <Icon icon="fa6-solid:map-location-dot" color="black" />
                    </div>

                    <div className="suggest">
                        <h1>Oak Park, IL</h1>
                        <Icon icon="fa6-solid:map-location-dot" color="black" />
                    </div>

                    <div className="suggest">
                        <h1>Oak Park, IL</h1>
                        <Icon icon="fa6-solid:map-location-dot" color="black" />
                    </div>

                </div>
            </div>
            <div className="background">
                <img src={require('../images/by-category/5.jpg')} alt="" />
            </div>
        </div>
    )
}

export default CategorySearch
