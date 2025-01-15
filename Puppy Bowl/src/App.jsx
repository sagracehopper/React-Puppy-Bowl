import { puppyList } from './data.js';
import { useState } from 'react';
import './App.css'; //imports the CSS file into your App.jsx



//App component
function App() {
  // Initialize puppies state with puppyList
  const [puppies, setPuppies] = useState(puppyList);
  //
  const [featPupId, setFeatPupId] = useState(null);

  //set the variable state. 

  // Log the puppies array to verify data
  console.log(puppies);
  //returning for main app (function within a function)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)



  return (
    //fragments <>
    <>
      <div className="logo"> 
        <h1>Puppies </h1>

      </div>
      <h1>Puppy List</h1>
      '
      <ul>
        {/* Use the puppies state to map and display the list */}
        { 
   puppies.map((puppy) => {
     return <p onClick={()=>{ setFeatPupId(puppy.id)}}
     key={puppy.id}>{puppy.name} </p>
   }) //when someone clicks, the particular ID of that ONE puppy will show up with info 
}
      </ul>
       {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )} 
    
    </>
  );
}

export default App;