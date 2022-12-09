import React, { useState, useEffect } from 'react'
import { CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react'

import StepNumber from './StepNumber'
import SubCategories from './SubCategories'
import Product from './Product'
import PhotoProduct from './Product/PhotoProduct'

const Modal = (props) => {
  useEffect(() => {
    setTab(1)
    setShow(props?.visible)
  }, [props?.visible])

  const [tab, setTab] = useState(1)
  const [show, setShow] = useState(false)

  // const Weights = [1.9, 3.8, 7.6, 11.4, 15.2, 22.8]
  // const Lengths = [43, 45, 47, 49, 51, 53]

  return (
    <>
      <CModal size="lg" visible={show} onClose={props?.onClose}>
        <CModalHeader>
          <CModalTitle>
            <StepNumber />
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {tab === 1 && <SubCategories setTab={setTab} />}
          {tab === 2 && <Product setTab={setTab} setShow={setShow} />}
          {tab === 3 && <PhotoProduct setTab={setTab} setShow={setShow} />}
        </CModalBody>
      </CModal>
    </>
  )
}

export default Modal
