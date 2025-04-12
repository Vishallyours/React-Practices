import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
return(
  <div>
    Helo Vish
  </div>
)}

 
// const reactElement = {
//   type: 'a',
//   props: {
//       href: ' https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// } ;
const anotherUser = "vishallmine"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
) 

const sysElement = (
  <a href='https://google.com' target='_blank'>
    Google
  </a>
)

createRoot(document.getElementById('root')).render(

  reactElement

  
)
