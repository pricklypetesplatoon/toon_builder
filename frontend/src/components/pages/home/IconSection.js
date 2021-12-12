import React from 'react'

export default function IconSection(props) {
  return (
    <div className="icon-container">
      {props.iconLabel.map((icon, index) => (
        <div
          className="icon-wrapper"
          onClick={() => props.setCurrentSelection(icon.label)}
          key={icon.label}
        >
          <div className={`icon ${props.currentSelection === icon.label ? "icon-selected" : null}`}>
            <p className={`icon-number ${props.currentSelection === icon.label ? "icon-number-selected" : null}`}>{index + 1}</p>
            {/* <icon.Icon fill={`${props.currentSelection === icon.label ? '#c0ed38' : "black"}`} /> */}
          </div>
          <span className={`icon-text ${props.currentSelection === icon.label ? "icon-text-selected" : null}`}>{icon.label}</span>
        </div>
      ))}
    </div>
  )
}
