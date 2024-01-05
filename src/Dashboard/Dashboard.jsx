import React from 'react'
import dashboard from '../Dashboard/dashboard.css'
import Lady2 from '../Image/Lady2.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell } from '@fortawesome/free-regular-svg-icons';

const Dashboard = () => {
  return (
    <div className='dash'>
  <div className='flex'>
    <img src={Lady2} alt="" className='im' />
    <h3 className='name'>Hello Alex</h3>
  </div>
  <div>
  {/* <FontAwesomeIcon icon={faBell} /> */}
  </div>
  <p className='pag'>It's time to learn something new</p>
  <input type="password" id="password" name="password"  placeholder= " Search for courses, assignment, quizzes, or"className='input' />

  <div>
    <div className='cards'>
      <h2 className='assign'>Assignment</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</p>
    </div>

    <div className='cardstwo'>
      <h2 className='assign'>Courses</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</p>
    </div>

    <div className='cardsthree'>
      <h2 className='assign'>Timetable</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</p>
    </div>

    <div className='cardsfour'>
      <h2 className='assign'>Quizzes</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</p>
    </div>
  </div>
    </div>
  )
}

export default Dashboard
