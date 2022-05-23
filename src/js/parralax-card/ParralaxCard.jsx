import { Parallax, Background } from 'react-parallax';

const ParralaxCard = (props) => (

    <Parallax className='parralax'  bgImageAlt="the cat" strength={300}>
        <Background className='parralax-background' >
            <img src={props.data} alt="fill murray" />
        </Background>

        <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem voluptates suscipit alias molestiae ipsum ad amet eos adipisci voluptas? Doloribus voluptates consequuntur harum tempore, ea debitis libero ipsa! Ea!</p>
        </div>
    </Parallax>
);

export default ParralaxCard