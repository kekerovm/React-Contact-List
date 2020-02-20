import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import data from "./randomUsers.json"
import { FaUserAlt } from "react-icons/fa"
import { MdEmail, MdPhoneIphone } from "react-icons/md"
import { GoGlobe } from "react-icons/go"

export default function(props) {
  const id = props.match.params.id

  const person = data.find(contactId => contactId.id == id)

  return (
    <div className="singleview">
      <button type="button">
        <a href="http://localhost:3000/">Go Back</a>
      </button>
      <h1 className="singleheader">Single View</h1>
      <div className="singleimgbc">
        <img className="singlepic" src={person.picture.large} />
      </div>{" "}
      <p>
        <FaUserAlt /> -{person.name.first}
      </p>{" "}
      <p>
        <MdEmail /> -{person.email}
      </p>{" "}
      <p>
        <MdPhoneIphone /> -{person.phone}
      </p>{" "}
      <p>
        <GoGlobe /> -{person.location.city},{person.location.state}
      </p>{" "}
    </div>
  )
}
