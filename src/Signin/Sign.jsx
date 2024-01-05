import React from 'react';
import sign from '../Signin/signin.css'
import Lady2 from '../Image/Lady2.jpeg';

const Sign = () => {
  return (
    <div className='main'>
      <img src={Lady2} alt="" />
      <h2 className='text'>Sign in</h2>
      <p className='enter'>Enter your login details to get started</p>
      <form className=' block'>
        <label htmlFor="username" className='tex'>Student ID</label>
        <input type="text" id="username" name="username" className='input' />
        <label htmlFor="password" className='tex'>Email</label>
        <input type="password" id="password" name="password" className='input' />
        <button className='btn'>Sign in</button>
        
      </form>
    </div>
  );
};

export default Sign;
