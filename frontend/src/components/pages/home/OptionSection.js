import { Col, Row } from "antd"

import { ReactComponent as EmptyLogo } from "@toon-builder/common/src/assets/icons/empty.svg"
import React from 'react'

export default function OptionSection(props) {
  const setNumber = (val) => {
    props.methodToCall(val)
  }

  return (
    <div className="option-container">
      <div className="max-row-container">
        <Row gutter={8}>
          {props.options.images.map((val) => (
            <Col
              className={`option ${props.selectedNumber === val.number ? "option-selected" : null}`}
              key={`${props.currentSelection}_${val.number}`}
              onClick={() => setNumber(val.number)}
              span={props.threeColumn ? 6 : 5}
            >
              {val.empty ? (
                <EmptyLogo />
              ) : (
                <img src={val.image} alt="monster" />
              )}
            </Col>
          ))}
        </Row>
      </div>
      <div className="min-row-container">
        {props.options.images.map((val) => (
          <div
            className={`option ${props.selectedNumber === val.number ? "option-selected" : null}`}
            onClick={() => setNumber(val.number)}
            key={`${props.currentSelection}_${val.number}`}
          >
            {val.empty ? (
              <EmptyLogo />
            ) : (
              <img src={val.image} alt="monster" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
