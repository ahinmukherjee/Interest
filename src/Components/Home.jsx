import React from 'react'
import './Home.css';
const Home = () => {
  return (
    <div className="body">
      <div class="container">
        <div class="card">
          <h2>Welcome</h2>
          <input type="number" placeholder="Enter Amount" />
          <input type="number" placeholder="Enter Interest (%)" />
          <input type="number" placeholder="Enter Time (Years)" />
          <button>Click me!</button>
          <p class="result">Total ammount is: </p>
        </div>
      </div>  
    </div>
  )
}

export default Home

// import React, { useState } from 'react';
// import './Home.css';

// const Home = () => {
//   const [amount, setAmount] = useState('');
//   const [interest, setInterest] = useState('');
//   const [time, setTime] = useState('');
//   const [result, setResult] = useState(null);

//   const calculateInterest = () => {
//     if (amount && interest && time) {
//       const SI = (parseFloat(amount) * parseFloat(interest) * parseFloat(time)) / 100;
//       setResult(SI.toFixed(2)+amount); 
//     } else {
//       setResult('Please fill all fields');
//     }
//   };

//   return (
//     <div className="body">
//       <div className="container">
//        <div className="card">
//        <h2>Welcome </h2>
//         <input
//           type="number"
//           placeholder="Enter Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Enter Interest(%)"
//           value={interest}
//           onChange={(e) => setInterest(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Enter Time(Years)"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//         <button onClick={calculateInterest}>Calculate</button>
//         {result !== null && <p className="result">Simple Interest: {result}</p>}
//        </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
