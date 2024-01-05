import React from 'react'
import assign from '../Assign/assign.css'

const Assign = () => {
  return (
    <div>
      <div className='arrow'>
        <h3 className='ty'>Assig</h3>
        <input type="password" id="password" name="password"  placeholder= " Search for courses, assignment, quizzes, or"className='input' />
      </div>

      <div className='menu'>
        <h2>Pending</h2>
        <h2>Submitted</h2>
        <h2>Marked</h2>
      </div>
      
    </div>
  )
}

export default Assign
