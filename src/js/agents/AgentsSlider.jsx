import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AgentsCard from "./AgentsCard";
const AgentsSlider = (props) => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 5,
        slidesToScroll: 5,
        rows: 1,
        fade: false,
        centerMode: true,
        centerPadding: '40px',
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },

        ]

    };


    if (props.agents) {
        return (
            <Slider {...settings} className="agents-container"  >
                {props.agents.map(agent => {
                    const test = [
                        <AgentsCard agent={agent} key={agent.id.name} />,
                        <AgentsCard agent={agent} key={agent.id.name} />,
                        <AgentsCard agent={agent} key={agent.id.name} />,
                        <AgentsCard agent={agent} key={agent.id.name} />,
                        <AgentsCard agent={agent} key={agent.id.name} />,
                        <AgentsCard agent={agent} key={agent.id.name} />,
                        <AgentsCard agent={agent} key={agent.id.name} />
                    ]
                    return test
                })}
            </Slider>
        );
    }

}

export default AgentsSlider
