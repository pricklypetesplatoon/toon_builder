import "./home.css"

import React, { useState } from 'react'
import iconLabel, { labelMap, methodMap, numberMap } from "../../../utility/formIconLabel"

import IconSection from "./IconSection"
import OptionSection from "./OptionSection"
import PreviewBtn from "./PreviewBtn"
import PreviewSection from "./PreviewSection"

export default function Home(props) {
  const [currentSelection, setCurrentSelection] = useState("Background")

  const optionToRender = () => {
    return labelMap[currentSelection]
  }

  const methodToCall = (value) => {
    props[methodMap[currentSelection]](value)
  }

  const selectedNumber = () => {
    return props[numberMap[currentSelection]]
  }

  return (
    <div className="home-container">
      <div className="mobile-preview-btn">
        <PreviewBtn
          resetArt={props.resetArt}
          submitToon={props.submitToon}
          isAllOptionSelected={props.isAllOptionSelected}
        />
      </div>
      <OptionSection
        options={optionToRender()}
        currentSelection={currentSelection}
        selectedNumber={selectedNumber()}
        methodToCall={methodToCall}
        threeColumn={currentSelection === "Eyes" ? true : false}
      />
      <IconSection
        iconLabel={iconLabel}
        setCurrentSelection={setCurrentSelection}
        currentSelection={currentSelection}
      />
      <PreviewSection
        image={props.image}
        isAllOptionSelected={props.isAllOptionSelected}
        resetArt={props.resetArt}
        submitToon={props.submitToon}
        gettingImage={props.gettingImage}
      />
    </div>
  )
}
