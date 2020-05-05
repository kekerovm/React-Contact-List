import React, { useState, useEffect } from "react"
import "../styles/single.css"
import users from "../users.json"

export default props => {
  const [img, setImg] = useState("") 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    const id = props.match.params.id
    const user = users.find(user => user.id == Number(id))

    setImg(user.picture.large)
    setName(user.name.first + " " + user.name.last)
    setEmail(user.email)
    setPhone(user.phone)
    setLocation(user.location.city + " " + user.location.state)

  }, [props.match.params])

  function goBack(e) {
    e.preventDefault()
    props.history.push("/")
  }

  return (
    <div>
      <header>
        <button onClick={goBack}>Back</button>
        {/* <Link to="/"" </Link> */}
        <img src={img}></img>
      </header>
      <ul className="single">
        <li>{name}</li>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{location}</li>
      </ul>
    </div>
  )
}