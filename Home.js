// import React from "react"

// export default function() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   )
// }

import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import data from "./randomUsers.json"

export default function(props) {
  return (
    <div className="listview">
      <h1 className="listheader">List View</h1>
      <h1 className="peeps">My Peeps</h1>
      {data.map(person => (
        <Link to={`/single/${person.id}`}>
          <div className="contact">
            <img className="img" alt="idk" src={person.picture.thumbnail} />
            <div className="first">{person.name.first}</div>
            <div className="last">{person.name.last}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
