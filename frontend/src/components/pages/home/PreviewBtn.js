import React from 'react'

export default function PreviewBtn(props) {
  return (
    <div className="preview-btn-container">
      <button
        onClick={props.resetArt}
        className="reset-btn"
      >
        Reset art
      </button>
      <button
        className={`submit-btn ${props.isAllOptionSelected && !props.gettingImage ? "submit-enabled" : "submit-disabled"}`}
        onClick={props.submitToon}
      >
        Download your Toon
      </button>
    </div>
  )
}
