import React from 'react'
import "../Components/Home.css"

const Home = () => {
  return (
  <>
    <div className='Container'>
        <div className="body">
          <input type="text" placeholder='Enter Amount'/> 
          <input type="text" placeholder='Enter Interst'/> 
          <input type="text" placeholder='Enter Time'/> 
          <button>Calculate</button>
          <p className='result'>1000</p>
        </div>
    </div>
  </>
  )
}

export default Home