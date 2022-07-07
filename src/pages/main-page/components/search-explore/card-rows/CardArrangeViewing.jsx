// React Form And Validator
import { useForm } from "react-hook-form";
import validator from 'validator';
import React, { useState, useRef } from 'react';

//  React Iconify
import { Icon, InlineIcon } from '@iconify/react';

//  Slick Slider
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CardArrangeViewing = (props) => {

    const formSlickSlider = useRef(null);
    const [formPosition, setFormPosition] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [testSize, setTestSize] = useState(0)


    const onSubmit = (data) => {
        console.log(data)
        if (formPosition == 0) {
            const firstNameState = validator.isAlpha(data.firstName)
            const phoneNmberState = validator.isDecimal(data.phoneNumber)
            const emailState = validator.isEmail(data.email)
            const ageState = validator.isDecimal(data.age)
            const genderState = validator.isAlpha(data.gender)
            const validationFinal = firstNameState == phoneNmberState == emailState == ageState == genderState;
            if (validationFinal) {
                formSlickSlider.current.slickGoTo(1)
                setFormPosition(1)
            }
        }

        if (formPosition == 1) {
            formSlickSlider.current.slickGoTo(2)
            setFormPosition(2)
        }

        formSlickSlider.current.scrollInToView()

    };


    // Form Slider Setting
    const formSliderSetting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        arrows: false,
        adaptiveHeight: true,
        beforeChange: () => { setIsSliding(true) },
        afterChange: () => { setIsSliding(false) },

    };



    return (
        <div className="card-arrange-to-viewing">
            <div className="left">
                <h1>
                    Arrange To Viewing
                </h1>
                <p>
                    To arrange a viewing for this property, fill out this form and wait for our agency to response
                    or you can Call us on :
                    <span>020 7193 2844</span>
                </p>
                <img src={props.card.arrangeViewing.bacground} alt="" />
            </div>
            <form className="right"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="form-body" >
                    <Slider
                        className='form-slider'
                        ref={formSlickSlider} {...formSliderSetting}>
                        <div className="slide">
                            <div className='slide-header'>Visitor Info</div>

                            <div className="slide-row">
                                <label>
                                    <h3>
                                        FirstName
                                        <Icon icon="fa6-solid:1" />
                                    </h3>
                                    <div className="input-container">
                                        <input className={'text-input'}
                                            type="text"
                                            placeholder='Enter Your FirstName'
                                            {...register('firstName', { required: true })}
                                        />
                                        {errors.firstName && <small>
                                            <Icon icon="ant-design:warning-filled" />
                                            Enter Your FirstName</small>}


                                    </div>
                                </label>
                                <label>
                                    <h3>
                                        Last Name
                                        <Icon icon="fa6-solid:2" />
                                    </h3>
                                    <div className="input-container">
                                        <input className={'text-input'}
                                            type="name"
                                            placeholder='Enter Your LastName'
                                            {...register('LastName', { required: true })}
                                        />
                                        {errors.LastName && <small>
                                            <Icon icon="ant-design:warning-filled" />
                                            Enter Your LastName</small>}


                                    </div>
                                </label>
                            </div>
                            <div className="slide-row">
                                <label>
                                    <h3>
                                        Email
                                        <Icon icon="material-symbols:alternate-email" />
                                    </h3>
                                    <div className="input-container">
                                        <input className={'text-input'}
                                            type="email" placeholder='Enter Your Email'
                                            {...register('email', { required: true })}
                                        />
                                        {errors.email && <small>
                                            <Icon icon="ant-design:warning-filled" />
                                            Please Enter Your Email.
                                        </small>}


                                    </div>
                                </label>
                            </div>
                            <div className="slide-row">
                                <label>
                                    <h3>
                                        Phone Number
                                        <Icon icon="bi:phone" />
                                    </h3>
                                    <div className="input-container">
                                        <input className={'text-input'}
                                            type="number" placeholder='Enter Your Phone Number'
                                            {...register('phoneNumber', { required: true })} />
                                        {errors.phoneNumber && <small>
                                            <Icon icon="ant-design:warning-filled" />
                                            Please Enter Phone Number.
                                        </small>}
                                    </div>
                                </label>
                                <label>
                                    <h3>
                                        Company
                                        <Icon icon="akar-icons:google-fill" />
                                    </h3>
                                    <div className="input-container">
                                        <input className={'text-input'}
                                            type="text"
                                            placeholder='Enter Your Company Name'
                                            {...register('company', { required: false })}
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="slide-row">
                                <label>
                                    <h3>
                                        Age
                                        <Icon icon="uil:calender" />
                                    </h3>
                                    <div className="input-container">
                                        <input
                                            className={'text-input'}
                                            type="number"
                                            placeholder='Enter Your Age'
                                            {...register('age', { required: true })}
                                        />
                                        {errors.age && <small>
                                            <Icon icon="ant-design:warning-filled" />
                                            Enter Your Age.</small>}
                                    </div>
                                </label>
                                <label>
                                    <h3>
                                        Gender
                                        <Icon icon="bi:gender-ambiguous" />
                                    </h3>
                                    <div className="input-container">
                                        <div className="radio-input">
                                            <h1>Female</h1>
                                            <input
                                                type="radio"
                                                value={'female'}
                                                name="form-gender"
                                                {...register('gender')}
                                                checked />
                                        </div>
                                        <div className="radio-input">
                                            <h1>Male</h1>
                                            <input
                                                type="radio"
                                                value={'man'}
                                                name="form-gender"
                                                {...register('gender')}
                                                checked

                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>

                        </div>
                        <div className="slide">
                            <div className='slide-header'>Visiting Date</div>
                            <div className="slide-row">
                                <label>
                                    <h1>To visit in person, select the date and time of the meeting
                                    </h1>
                                </label>
                            </div>
                            <div className="slide-row">
                                <label>
                                    <h3>
                                        Date
                                        <Icon icon="bi:calendar2-date" />
                                    </h3>
                                    <div className="input-container"
                                        style={{
                                            backgroundColor: 'transparent',
                                            boxShadow: 'none'
                                        }}>

                                        <div className="date-input">
                                            <input type="date"
                                                min={
                                                    props.card.arrangeViewing.dateLimit.min}
                                                max={
                                                    props.card.arrangeViewing.dateLimit.max}
                                                defaultValue={
                                                    props.card.arrangeViewing.dateLimit.min
                                                }

                                                {...register(
                                                    'date', {
                                                    required: true,
                                                    min: '2022-05-06',
                                                    max: '2022-06-06'
                                                })}
                                            />
                                            <small>
                                                {props.card.arrangeViewing.dateLimit.warning}
                                            </small>
                                        </div>

                                    </div>
                                </label>
                                <label>
                                    <h3>
                                        Time
                                        <Icon icon="carbon:time" />
                                    </h3>
                                    <div className="input-container"
                                        style={{
                                            backgroundColor: 'transparent',
                                            boxShadow: 'none'
                                        }}>

                                        <div className="time-input">
                                            <select
                                                {...register('time', { required: true })}>

                                                {props.card.arrangeViewing.timeLimit.options.map(
                                                    (time, index) => {

                                                        return (
                                                            <option key={index} value={time}>
                                                                {time}
                                                            </option>
                                                        )

                                                    })}

                                            </select>
                                            <small>Visiting hours can be from 8 am to 10 pm</small>



                                        </div>

                                    </div>
                                </label>
                            </div>
                            <div className="slide-row">
                                <label>
                                    <h3>
                                        Message
                                        <Icon icon="ep:message" />
                                    </h3>
                                    <div className="input-container">
                                        <textarea
                                            className={'text-input'}
                                            type="text"
                                            placeholder={`I am interested in ${props.card.info.cardName}`}
                                            cols={3}
                                            rows={5}
                                            {...register('message', { required: false })}
                                        />
                                    </div>

                                </label>
                            </div>
                        </div>
                        <div className="slide successful">
                            <div className="slide-header">
                                Thank you for choosing us. We are waiting for your presence at the appointed time
                                <Icon icon="flat-color-icons:ok" />
                            </div>
                            {/* <img src={require('../images/search-explore/Arrange Viewing/3.jpg')} alt="" /> */}

                        </div>
                        <div className="slide error">
                            <div className="slide-header">
                                There was a problem registering your form, please request later
                                <Icon icon="codicon:error" id='error-icon' />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="form-button"
                >
                    <button disabled={isSliding}
                        type='button'
                        style={{
                            display: formPosition != 0 ? 'flex' : 'none',
                        }}
                        onClick={() => {
                            formSlickSlider.current.slickPrev()
                            setFormPosition(formPosition - 1)
                        }}>
                        <Icon icon="ooui:arrow-next-ltr" rotate={2} />
                        Back
                    </button>
                    <button
                        disabled={isSliding}>
                        {formPosition == 0 ? 'Next' : 'Send'}
                        <Icon icon="ooui:arrow-next-ltr" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CardArrangeViewing
