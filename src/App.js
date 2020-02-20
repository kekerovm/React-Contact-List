// import React from "react"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Product from "./Product"
// import data from "../data.json"

// // import logo from './logo.svg';
// // import './App.css';

// export default function() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/About">About</Link>
//           </li>
//           <li>
//             {data.map((product, i) => (
//               <Link key={"product-link" + i} to={`/product/${product.id}`}>
//                 product.name
//               </Link>
//             ))}
//           </li>
//         </ul>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/product/:id" component={Product} />
//       </div>
//     </Router>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import contacts from "./List.js"

function App() {
  return (
    <Router>
      <Route path="/contact/:id" component={contacts}></Route>
      <Route exact path="/" component={Home}></Route>
    </Router>
  )
}

export default App
