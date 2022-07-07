
const CardGallery = (props) => {
    return (
        <div className="card-gallery">
            <div className="card-image-small">

                <div className="card-image">
                    <img src={props.card.images.small[0]} alt="" />
                </div>
                <div className="card-image">
                    <img src={props.card.images.small[1]} alt="" />
                </div>
                <div className="card-image full">
                    <img src={props.card.images.small[2]} alt="" />
                </div>
            </div>
            <div className="card-image-big">
                <div className="card-image">

                    <div className="card-image">
                        <img src={props.card.images.medium} alt="" />
                    </div>


                </div>
            </div>
            <div className="card-image-big ">
                <div className="card-image plan">

                    <div className="card-image">
                        <img src={props.card.images.plan} alt="" />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default CardGallery
