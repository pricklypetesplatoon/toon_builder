import "./header.css"

import { ReactComponent as Logo } from "../../assets/images/monster.svg";
import React from 'react'

export default function Header() {
  return (
    <div className="header-container">
      <Logo className="monster-img" />
      <h3 className="header-text">Toon Builder</h3>
    </div>
  )
}
