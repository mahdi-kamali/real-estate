import { CircularProgressbar , buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 10;

const WeeklyGoal = () => {
    return <>
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '1rem',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(97, 166, 250, 1)`,
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
        })} />
        <h1>Goal : $ 125,500</h1>
        <button>Change Goal</button>
    </>
}

export default WeeklyGoal
