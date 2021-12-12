import PreviewBtn from './PreviewBtn'
import React from 'react'

export default function PreviewSection(props) {

  return (
    <div className="preview-container">
      <div className="preview-img-container">
        {props.image ? (
          <img className="preview-img" src={props.image} alt="preview" />
        ) : (
          <div className="empty-img"></div>
        )}
      </div>
      <PreviewBtn {...props} />
    </div>
  )
}
