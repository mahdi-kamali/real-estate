import { Icon } from '@iconify/react';


import SalesChart from '../charts/SalesChart';
import WeeklyGoal from '../charts/WeeklyGoal';
import WeeklyArranges from '../charts/WeeklyArranges';
import TopNeighborhood from '../charts/TopNeighborhood';


// Line Progress Bar
import { Line, Circle } from 'rc-progress';

function Dashboard() {
  return (
    <main className="mid-side">

      <div className="dashboard">
        <div className="overview">

          <div className="item green">

            <div className="item-header">
              <Icon className='icon' icon="el:ok" color="black" />
              <div className="rate">
                <small>
                  +42%
                </small>
                <Icon icon="ci:short-up" color="black" />
              </div>
            </div>

            <div className="item-body">
              <h1>$72,257,49</h1>
              <small>Total Sales This Week</small>
            </div>


          </div>

          <div className="item blue">

            <div className="item-header">
              <Icon className='icon' icon="bi:calendar2-day" color="black" />
              <div className="rate">
                <small>
                  +42%
                </small>
                <Icon icon="ci:short-up" color="black" />
              </div>
            </div>

            <div className="item-body">
              <h1>$72,257,49</h1>
              <small>Total Sales This Week</small>
            </div>


          </div>

          <div className="item purple">

            <div className="item-header">
              <Icon className='icon' icon="fa:group" color="black" />
              <div className="rate">
                <small>
                  +42%
                </small>
                <Icon icon="ci:short-up" color="black" />
              </div>
            </div>

            <div className="item-body">
              <h1>1950</h1>
              <small>Total Vistors</small>
            </div>


          </div>

          <div className="item green">

            <div className="item-header">
              <Icon className='icon' icon="ant-design:home-outlined" color="black" />
              <div className="rate">
                <small>
                  +42%
                </small>
                <Icon icon="ci:short-up" color="black" />
              </div>
            </div>

            <div className="item-body">
              <h1>100</h1>
              <small>Total Arranges</small>
            </div>


          </div>

          <div className="item blue">

            <div className="item-header">
              <Icon className='icon' icon="ant-design:home-outlined" color="black" />
              <div className="rate">
                <small>
                  +42%
                </small>
                <Icon icon="ci:short-up" color="black" />
              </div>
            </div>

            <div className="item-body">
              <h1>100</h1>
              <small>Total Arranges</small>
            </div>


          </div>

          <div className="item purple">

            <div className="item-header">
              <Icon className='icon' icon="ant-design:home-outlined" color="black" />
              <div className="rate">
                <small>
                  +42%
                </small>
                <Icon icon="ci:short-up" color="black" />
              </div>
            </div>

            <div className="item-body">
              <h1>100</h1>
              <small>Total Arranges</small>
            </div>


          </div>


        </div>

        <div className="grid-container-one">

          <div className="weekly-arranges">
            <div className="arranges-header">
              <div className="left">
                <h1>Weekly arranges</h1>
              </div>
              <div className="right">
                <div className="column">
                  <span>2,357</span>
                  <small>Total arranges</small>
                </div>
                <div className="column">
                  <span>1,257</span>
                  <small>Success</small>
                </div>
              </div>
            </div>
            <div className="arranges-body">
              <WeeklyArranges />
            </div>
          </div>

          <div className="weekly-goal">
            <div className="goal-header">
              <h1>Weekly Goal</h1>
            </div>
            <div className="goal-body">
              <WeeklyGoal />
            </div>
          </div>

        </div>

        <div className="grid-container-two">
          <div className="top-neighborhood-arranged">
            <div className="arranged-header">
              <h1>Top 5 Neighborhood</h1>
            </div>
            <div className="arranged-body">
              <TopNeighborhood />
            </div>
          </div>
          <div className="most-neighborhood-liked">
            <div className="liked-header">
              <h1>Most Liked Neighborhoods</h1>
            </div>
            <ul className="liked-body">
              <div className="item">
                <h1>
                  las Colinas
                </h1>
                <Line
                  className='line'
                  percent={100}
                  strokeWidth={3}
                  strokeColor={`hsl(${100},70%,50%)`}
                  trailColor='transparent'
                />
                <small>100% <Icon icon="fluent:thumb-like-24-filled" color="black" /></small>
              </div>
              <div className="item">
                <h1>
                  las Colinas
                </h1>
                <Line
                  className='line'
                  percent={100}
                  strokeWidth={3}
                  strokeColor={`hsl(${100},70%,50%)`}
                  trailColor='transparent'
                />
                <small>100% <Icon icon="fluent:thumb-like-24-filled" color="black" /></small>
              </div>
              <div className="item">
                <h1>
                  las Colinas
                </h1>
                <Line
                  className='line'
                  percent={100}
                  strokeWidth={3}
                  strokeColor={`hsl(${100},70%,50%)`}
                  trailColor='transparent'
                />
                <small>100% <Icon icon="fluent:thumb-like-24-filled" color="black" /></small>
              </div>
              <div className="item">
                <h1>
                  las Colinas
                </h1>
                <Line
                  className='line'
                  percent={100}
                  strokeWidth={3}
                  strokeColor={`hsl(${100},70%,50%)`}
                  trailColor='transparent'
                />
                <small>100% <Icon icon="fluent:thumb-like-24-filled" color="black" /></small>
              </div>
            </ul>
          </div>
        </div>

        <div className="note-pad">
          <div className="pad-header">
            <h1>NotePad</h1>
            <span>Daily Notes</span>
            <ul>
              <li className='selected'>Coffee</li>
              <li>Coffee</li>
              <li>Coffee</li>
              <li>Coffee</li>
            </ul>
          </div>
          <div className="pad-body">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea culpa animi at fugit quo vel, consectetur sed sint quibusdam consequatur reprehenderit, omnis odit odio exercitationem saepe doloremque corrupti voluptatibus.</p>
          </div>
          <div className='pad-buttons'>
            <button className='new'> <Icon icon="codicon:new-file" color="black" /> New </button>
            <button className='edit'><Icon icon="akar-icons:edit" color="black" /> Edit </button>
            <button className='delete'><Icon icon="fluent:delete-48-regular" color="black" /> Delete </button>
          </div>
        </div>

      </div>

    </main>
  )
}

export default Dashboard
