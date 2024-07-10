import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './common/ThemeContext.jsx'
import { useState , useEffect } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>

  </React.StrictMode>,
)

// function MyAge() {
//   const [age, setAge] = useState(21);

//   useEffect(()=>{
//     setTimeout(() =>{
//       setAge((age) =>age + 1 );
//     },1000);
//   })

//   return <h1>My Age is {age} </h1>
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyAge/>);


