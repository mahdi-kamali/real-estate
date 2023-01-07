
import { Icon } from '@iconify/react';


import SalesChart from '../charts/SalesChart';
import WeeklyGoal from '../charts/WeeklyGoal';
import WeeklyArranges from '../charts/WeeklyArranges';
import TopNeighborhood from '../charts/TopNeighborhood';


// Line Progress Bar
import { Line, Circle } from 'rc-progress';



function Posts() {
  return (
    <main className="mid-side">

      <div className="posts">
        <div className="sales-chart">
          <div className="chart-header">
            <h1>Sales Analaytic</h1>
            <select name="test" id="">
              <option value="">Weekly</option>
              <option value="">Monthly</option>
              <option value="">Year</option>
            </select>
          </div>
          <div className="chart-body">
            <SalesChart />
          </div>
        </div>

        <div className="weekly-events">
          <div className="events-header">
            <h1>Weekly events</h1>
          </div>
          <div className="events-body">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Provider</th>
                  <th>Date</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={require('../../images/mid/1.jpg')} alt="" />
                  </td>
                  <td>
                    #12222
                  </td>
                  <td>99 Chestnut Hill Ave</td>
                  <td>Mahdi Kamali</td>
                  <td>7/9/2022</td>
                  <td className='green'>
                    <small> • Added For Sale</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../../images/mid/2.jpg')} alt="" />
                  </td>
                  <td>
                    #12222
                  </td>
                  <td>99 Chestnut Hill Ave</td>
                  <td>Mahdi Kamali</td>
                  <td>7/9/2022</td>
                  <td className='red'>
                    <small>• Removed</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../../images/mid/3.jpg')} alt="" />
                  </td>
                  <td>
                    #12222
                  </td>
                  <td>99 Chestnut Hill Ave</td>
                  <td>Mahdi Kamali</td>
                  <td>7/9/2022</td>
                  <td className='orrange'>
                    <small>• Waiting For Accept</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../../images/mid/4.jpg')} alt="" />
                  </td>
                  <td>
                    #12222
                  </td>
                  <td>99 Chestnut Hill Ave</td>
                  <td>Mahdi Kamali</td>
                  <td>7/9/2022</td>
                  <td className='blue'>
                    <small>• on pending</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../../images/mid/5.jpg')} alt="" />
                  </td>
                  <td>
                    #12222
                  </td>
                  <td>99 Chestnut Hill Ave</td>
                  <td>Mahdi Kamali</td>
                  <td>7/9/2022</td>
                  <td className='green'>
                    <small>• Removed</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../../images/mid/3.jpg')} alt="" />
                  </td>
                  <td>
                    #12222
                  </td>
                  <td>99 Chestnut Hill Ave</td>
                  <td>Mahdi Kamali</td>
                  <td>7/9/2022</td>
                  <td className='orrange'>
                    <small>• Waiting For Accept</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Posts
