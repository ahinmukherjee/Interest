import React, { useState } from 'react'
import './Home.css';
const Home = () => {
  const[value, setValue]= useState("");

  // const handleChange = (event) => {
  //   const inputValue = event.target.value;
  //   console.log("Value:", inputValue);
  //   console.log("Type:", typeof inputValue);
  //   setValue(inputValue);
  // };

  const handleChange = (event) => {
    const stringValue = event.target.value;
    const numberValue = Number(stringValue); // Convert to number
    console.log("Original:", stringValue, "Type:", typeof stringValue);
    console.log("Converted:", numberValue, "Type:", typeof numberValue);
    setValue(numberValue);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="card">
          <h2>Welcome</h2>
          <input type="number" onChange={handleChange}  placeholder="Enter Amount"  value={value}/>
          <input type="number"   placeholder="Enter Interest (%)"  />
          <input type="number"  placeholder="Enter Time (Years)" />
          <button>Click me!</button>
          <p className="result">Total ammount is: </p>
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
