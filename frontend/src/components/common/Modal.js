import { Modal } from "antd"
import React from 'react'

export default function CustomModal(props) {

  return (
    <Modal
      visible={props.isModalVisible}
      footer={null}
      destroyOnClose
      centered
      closable={false}
    >

    </Modal>
  )
}
