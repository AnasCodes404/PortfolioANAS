import { useState,useEffect } from "react";


function MyAge() {
    const [age, setAge] = useState(21);
  
    useEffect(()=>{
      setTimeout(() =>{
        setAge((age) =>age + 1 );
      },1000);
    })
  
    return <h1>My Age is {age} </h1>
  }


export default MyAge;