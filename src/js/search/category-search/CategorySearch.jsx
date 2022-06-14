
import { Icon } from '@iconify/react';

// React Select 
import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

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
                <div className="search-bar">
                    <Icon icon="ep:search" />
                    <input type="text" placeholder='Enter An address city or zip code' />
                </div>
                <div className="inputs">
                    <div className="input">
                        <Select  options={options} defaultValue={options[0]} 
                        styles ={
                            {
                                control: styles => ({ ...styles, backgroundColor: 'white' }),
                            }
                        }/>
                    </div>
                    <div className="input">
                        <Select  options={options} defaultValue={options[0]} 
                        styles ={
                            {
                                control: styles => ({ ...styles, backgroundColor: 'white' }),
                            }
                        }/>
                    </div>
                    <div className="input">
                        <Select  options={options} defaultValue={options[0]} 
                        styles ={
                            {
                                control: styles => ({ ...styles, backgroundColor: 'white' }),
                            }
                        }/>
                    </div>
                    <div className="input">
                        <Select  options={options} defaultValue={options[0]} 
                        styles ={
                            {
                                control: styles => ({ ...styles, backgroundColor: 'white' }),
                            }
                        }/>
                    </div>
                    <div className="input">
                        <Select  options={options} defaultValue={options[0]} 
                        styles ={
                            {
                                control: styles => ({ ...styles, backgroundColor: 'white' }),
                            }
                        }/>
                    </div>
                    <div className="input">
                        <Select  options={options} defaultValue={options[0]} 
                        styles ={
                            {
                                control: styles => ({ ...styles, backgroundColor: 'white' }),
                            }
                        }/>
                    </div>
                </div>
            </form>
            <div className="category-search-body">

            </div>
        </div>
    )
}

export default CategorySearch
