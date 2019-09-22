import React from 'react'
import {Modal} from 'antd'
import Partner from './Partenr.png'

export default ({ visible, handleCancel }) => {
  console.log(visible)

  return (
    <Modal
      width="820px"
      visible={visible}
      title="Login with TD Account"
      footer={[]}
      onCancel={handleCancel}
    >
      <img src={Partner} alt="Partners' List"/>
    </Modal>
  )
}