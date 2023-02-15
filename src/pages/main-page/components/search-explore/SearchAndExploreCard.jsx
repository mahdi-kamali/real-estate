

// Image Parallax Slider
import ImageSlider from '../image-slider/ImageSlider'



// Card Description
import CardDescription from './card-rows/CardDescription'

// Card Gallery
import CardGallery from './card-rows/CardGallery'

// Card Theme 
import CardTheme from './card-rows/CardTheme'

// Card HighLights
import CardHighLights from './card-rows/CardHighLights';

// Card Comments 
import CardComments from './card-rows/CardComments';

// Card Histroy
import PriceTrends from './card-rows/PriceTrends'

// Card Information 
import CardInformation from './card-rows/CardInformation';

// Card Arrange Viewing
import CardArrangeViewing from './card-rows/CardArrangeViewing';


// Card Property Provider
import CardProprtyProvider from './card-rows/CardProprtyProvider';





const SearchAndExploreCard = (props) => {

    return (
        <div className="card">

            <div className="card-row">
                <ImageSlider card={props.card} />
            </div>

            <div className="card-row">
                <CardDescription card={props.card} />
            </div>

            <div className="card-row">
                <CardGallery card={props.card} />
            </div>

            <div className="card-row">
                < CardTheme card={props.card} />
            </div>

            <div className="card-row">
                <CardHighLights card={props.card} />
            </div>

            <div className="card-row">
                <CardComments card={props.card} />
            </div>

            <div className="card-row">
                <CardInformation card={props.card} />
            </div>

            <div className="card-row">
                <PriceTrends card={props.card} />
            </div>

            <div className="card-row">
                <CardProprtyProvider card={props.card} />
            </div>

            <div className="card-row">
                <CardArrangeViewing card={props.card} />
            </div>

        </div>

    )

}

export default SearchAndExploreCard






