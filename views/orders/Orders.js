import React from 'react'
import './Order.css'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { CAvatar } from '@coreui/react'
import Scanner from '../../assets/icons/scanner.png'
import { Form, Accordion } from 'react-bootstrap'
import Necklacepro from '../../assets/images/img1.png'
import avatar8 from './../../assets/images/avatars/8.jpg'
import avatar2 from './../../assets/images/avatars/2.jpg'
import Edit from '../../assets/icons/edit.png'
import Cross from '../../assets/icons/cross.png'
import Check from '../../assets/icons/check.png'
export default function OrderNew() {
  return (
    <div>
      <CCard className="mb-4 box_items rounded">
        <CCardBody>
          <CRow>
            <CCol xs={8}>
              <CRow>
                <CCol xs={2}>
                  <p className="top_subheading">ORDER NO:</p>
                  <p className="heading6  text_semibold">437618</p>
                </CCol>
                <CCol xs={4}>
                  <p className="top_subheading">RETAILER NAME &PHONE:</p>
                  <p className="heading6  text_semibold">
                    RETAILER NAME:
                    <br />
                    (406) 555-0120
                  </p>
                </CCol>
                <CCol xs={3}>
                  <p className="top_subheading">ADDRESS:</p>
                  <p className="heading6  text_semibold">WHOLESALE NAME</p>
                </CCol>
                <CCol xs={3}>
                  <p className="top_subheading">PURCHASING DATE:</p>
                  <p className="heading6  text_semibold">10/12/2021</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol xs={4}>
              <CRow className="align-items-center justify-content-end">
                <CCol xs={6}>
                  <div className="qr_button heading6 light_gray p-2 text-secondary">
                    <img src={Scanner} alt="" />
                    &nbsp; Get QR Code
                  </div>
                </CCol>
                <CCol xs={5}>
                  <Form.Select aria-label="Default  select example" className="qr_button p-2">
                    <option>Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="On Client">On Client</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Ready to Dispatch">Ready to Dispatch</option>
                  </Form.Select>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div className="row m-0">
        <div className="col-md-5 col-12">
          <p className="text_medium">PRODUCTS</p>
        </div>
        <div className="col-md-7 col-12">
          <div className="row">
            <div className="col-md-3">
              <p className="text_medium">WEIGHT</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">SIZE</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">QUANTITY</p>
            </div>
            <div className="col-md-4">
              <p className="text_medium">ACTUAL WEIGHT</p>
            </div>
          </div>
        </div>
      </div>
      <CCard className="mb-4 box_items">
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={5}>
              <CRow className="">
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Herringbone Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={7}>
              <CRow>
                <CCol md={3}>
                  <p className="heading6 text_semibold">3.8 Gram</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">45 Cm</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={5}>
              <CRow className="align-items-center">
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={7}>
              <CRow>
                <CCol md={3}>
                  <p className="heading6 text_semibold">15.2 Gram</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">49 Cm</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={5}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Baby Curb Caain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={7}>
              <CRow>
                <CCol md={3}>
                  <p className="heading6 text_semibold">7.6.2 Gram</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">43 Cm</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={5}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Linked Rings Necklace </p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={7}>
              <CRow>
                <CCol md={3}>
                  <p className="heading6 text_semibold">17 Gram</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">47 Cm</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={6}>
              <p className="text_medium text-secondary">ADD NOTE</p>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="align-items-center">
                  <Form.Control
                    as="textarea"
                    rows="2"
                    cols="60"
                    placeholder="Type your note here for retailer"
                    className="w-50 rounded note_reatiler"
                  />
                </Form.Group>
              </Form>
            </CCol>
            <CCol md={6}>
              <CRow>
                <CCol xs={6}>
                  <p className=" text_semibold text-center">
                    Total quantity: <span className="heading6 text_semibold"> 80 Pcs</span>
                  </p>
                </CCol>
                <CCol xs={6}>
                  <p className=" text_semibold text-center">
                    Total Weight: <span className="heading6 text_semibold"> 800 Gram</span>
                  </p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div className="row m-0">
        <div className="col-md-4 col-12">
          <p className="text_medium">PRODUCTS</p>
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-md-2">
              <p className="text_medium">WEIGHT</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">SIZE</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">QUANTITY</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">ACTUAL WEIGHT</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">ACTIONS</p>
            </div>
          </div>
        </div>
      </div>
      <CCard className="mb-4 box_items">
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Herringbone Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">3.8 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">45 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">200 Gram</p>
                </CCol>
                <CCol md={3} className="d-flex justify-content-between">
                  <img src={Edit} alt="" className="light_gray edit_product p-2" />
                  <img src={Cross} alt="" className="light_gray edit_product  p-2" />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">15.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">49 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">200 Gram</p>
                </CCol>
                <CCol md={3} className="d-flex justify-content-between">
                  <img src={Edit} alt="" className="light_gray edit_product p-2" />
                  <img src={Cross} alt="" className="light_gray edit_product  p-2" />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Baby Curb Caain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">7.6.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">43 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">200 Gram</p>
                </CCol>
                <CCol md={3} className="d-flex justify-content-between">
                  <img src={Edit} alt="" className="light_gray edit_product p-2" />
                  <img src={Cross} alt="" className="light_gray edit_product  p-2" />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Linked Rings Necklace </p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">17 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">47 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">200 Gram</p>
                </CCol>
                <CCol md={3} className="d-flex justify-content-between">
                  <img src={Edit} alt="" className="light_gray edit_product p-2" />
                  <img src={Cross} alt="" className="light_gray edit_product  p-2" />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={6}>
              <p className="text_medium text-secondary">ADD NOTE</p>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="align-items-center">
                  <Form.Control
                    as="textarea"
                    rows="2"
                    cols="60"
                    placeholder="Type your note here for retailer"
                    className="w-50 rounded note_reatiler"
                  />
                </Form.Group>
              </Form>
            </CCol>
            <CCol md={6}>
              <CRow>
                <CCol xs={6}>
                  <p className=" text_semibold text-center">
                    Total quantity: <span className="heading6 text_semibold"> 80 Pcs</span>
                  </p>
                </CCol>
                <CCol xs={6}>
                  <p className=" text_semibold text-center">
                    Total Weight: <span className="heading6 text_semibold"> 800 Gram</span>
                  </p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div className="row m-0">
        <div className="col-md-4 col-12">
          <p className="text_medium">PRODUCTS</p>
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-md-2">
              <p className="text_medium">WEIGHT</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">SIZE</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">QUANTITY</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">ACTUAL WEIGHT</p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <CCard className="mb-4 box_items">
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Herringbone Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">3.8 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">45 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">200 Gram</p>
                </CCol>
                <CCol md={3} className="d-flex justify-content-between">
                  <img src={Check} alt="" className="confrm edit_product p-2" />
                  <img src={Cross} alt="" className="cancel edit_product  p-2" />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">15.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">49 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">200 Gram</p>
                </CCol>
                <CCol md={3} className="d-flex justify-content-between">
                  <img src={Check} alt="" className="confrm edit_product p-2" />
                  <img src={Cross} alt="" className="cancel edit_product  p-2" />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Baby Curb Caain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">7.6.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">43 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">200 Gram</p>
                </CCol>
                <CCol md={3} className="d-flex justify-content-between">
                  <img src={Check} alt="" className="confrm edit_product p-2" />
                  <img src={Cross} alt="" className="cancel edit_product  p-2" />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Linked Rings Necklace </p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">17 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">47 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold">200 Gram</p>
                </CCol>
                <CCol md={3} className="d-flex justify-content-between">
                  <img src={Check} alt="" className="confrm edit_product p-2" />
                  <img src={Cross} alt="" className="cancel edit_product  p-2" />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={6}>
              <p className="text_medium text-secondary">ADD NOTE</p>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="align-items-center">
                  <Form.Control
                    as="textarea"
                    rows="2"
                    cols="60"
                    placeholder="Type your note here for retailer"
                    className="w-50 rounded note_reatiler"
                  />
                </Form.Group>
              </Form>
            </CCol>
            <CCol md={6}>
              <CRow>
                <CCol xs={6}>
                  <p className=" text_semibold text-center">
                    Total quantity: <span className="heading6 text_semibold"> 80 Pcs</span>
                  </p>
                </CCol>
                <CCol xs={6}>
                  <p className=" text_semibold text-center">
                    Total Weight: <span className="heading6 text_semibold"> 800 Gram</span>
                  </p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div className="row m-0">
        <div className="col-md-4 col-12">
          <p className="text_medium">PRODUCTS</p>
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-md-2">
              <p className="text_medium">WEIGHT</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">SIZE</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">QUANTITY</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">SYSTEM WEIGHT</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">ACTUAL WEIGHT</p>
            </div>
          </div>
        </div>
      </div>
      <CCard className="mb-4 box_items">
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Herringbone Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">3.8 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">45 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">15.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">49 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Baby Curb Caain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">7.6.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">43 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Linked Rings Necklace </p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">17 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">47 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={3}>
              <p className="text_medium text-secondary">ADD NOTE</p>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="align-items-center">
                  <Form.Control
                    as="textarea"
                    rows="2"
                    cols="300"
                    placeholder="Type your note here for retailer"
                    className="w-100 rounded note_reatiler"
                  />
                </Form.Group>
              </Form>
            </CCol>
            <CCol md={9}>
              <CRow>
                <CCol xs={3}>
                  <p className="  text-center">
                    Total quantity: <span className="heading6 text_semibold"> 80 Pcs</span>
                  </p>
                </CCol>
                <CCol xs={5}>
                  <p className="  text-center">
                    Total System Weight:<span className="heading6 text_semibold"> 166 Gram</span>
                  </p>
                </CCol>
                <CCol xs={4}>
                  <p className="  text-center">
                    Total Weight: <span className="heading6 text_semibold"> 800 Gram</span>
                  </p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div className="row m-0">
        <div className="col-md-4 col-12">
          <p className="text_medium">PRODUCTS</p>
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-md-2">
              <p className="text_medium">WEIGHT</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">SIZE</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">QUANTITY</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">SYSTEM WEIGHT</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">ACTUAL WEIGHT</p>
            </div>
          </div>
        </div>
      </div>
      <CCard className="mb-4 box_items">
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Herringbone Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">3.8 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">45 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">15.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">49 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Baby Curb Caain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">7.6.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">43 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Linked Rings Necklace </p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">17 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">47 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={3}>
              <p className="text_medium text-secondary">ADD NOTE</p>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="align-items-center">
                  <Form.Control
                    as="textarea"
                    rows="2"
                    cols="300"
                    placeholder="Type your note here for retailer"
                    className="w-100 rounded note_reatiler"
                  />
                </Form.Group>
              </Form>
            </CCol>
            <CCol md={9}>
              <CRow>
                <CCol xs={3}>
                  <p className="  text-center">
                    Total quantity: <span className="heading6 text_semibold"> 80 Pcs</span>
                  </p>
                </CCol>
                <CCol xs={5}>
                  <p className="  text-center">
                    Total System Weight:<span className="heading6 text_semibold"> 166 Gram</span>
                  </p>
                </CCol>
                <CCol xs={4}>
                  <p className="  text-center">
                    Total Weight: <span className="heading6 text_semibold"> 800 Gram</span>
                  </p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div className="row m-0">
        <div className="col-md-4 col-12">
          <p className="text_medium">PRODUCTS</p>
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-md-2">
              <p className="text_medium">WEIGHT</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">SIZE</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">QUANTITY</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">SYSTEM WEIGHT</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">ACTUAL WEIGHT</p>
            </div>
          </div>
        </div>
      </div>
      <CCard className="mb-4 box_items">
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Herringbone Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">3.8 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">45 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Bold Chain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">15.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">49 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Baby Curb Caain Necklace</p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">7.6.2 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">43 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={4}>
              <CRow>
                <CCol md={3}>
                  <div className="stock_bg rounded p-1">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </div>
                </CCol>
                <CCol md={9}>
                  <p className="">PROCYON- Linked Rings Necklace </p>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={2}>
                  <p className="heading6 text_semibold">17 Gram</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">47 Cm</p>
                </CCol>
                <CCol md={2}>
                  <p className="heading6 text_semibold">20 Pcs</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text_semibold ">166 Grams</p>
                </CCol>
                <CCol md={3}>
                  <p className="heading6 text-secondary text_semibold ">200 Gram</p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardBody className="border-bottom">
          <CRow className="mb-2 p-2">
            <CCol md={3}>
              <p className="text_medium text-secondary">ADD NOTE</p>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="align-items-center">
                  <Form.Control
                    as="textarea"
                    rows="2"
                    cols="300"
                    placeholder="Type your note here for retailer"
                    className="w-100 rounded note_reatiler"
                  />
                </Form.Group>
              </Form>
            </CCol>
            <CCol md={9}>
              <CRow>
                <CCol xs={3}>
                  <p className="  text-center">
                    Total quantity: <span className="heading6 text_semibold"> 80 Pcs</span>
                  </p>
                </CCol>
                <CCol xs={5}>
                  <p className="  text-center">
                    Total System Weight:<span className="heading6 text_semibold"> 166 Gram</span>
                  </p>
                </CCol>
                <CCol xs={4}>
                  <p className="  text-center">
                    Total Weight: <span className="heading6 text_semibold"> 800 Gram</span>
                  </p>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4 box_items rounded">
        <CCardBody>
          <Accordion defaultActiveKey="0" className="border-0">
            <Accordion.Item eventKey="0" className="border-0 mb-0">
              <Accordion.Header className="p-0 padding-none">
                <p className="heading5 text_medium mb-0">
                  Discussion
                  <br />
                  <p className="heading3 text_semibold mb-0">#Reguest for stock: 437618</p>
                </p>
                <br />
              </Accordion.Header>
              <Accordion.Body className="py-3">
                <div className="d-flex mb-3 flex-wrap">
                  <div className="user_image">
                    <CAvatar src={avatar8} size="md" style={{ height: '70px', width: '70px' }} />
                  </div>
                  <div className="user_detail">
                    <div className="d-flex align-items-center">
                      <p className="heading3 ms-3 text_semibold">@Wholesaler</p>
                      <p className="heading3 ms-3 text_medium">04 April 2022</p>
                      <p
                        className="dot ms-3 rounded-circle bg-secondary"
                        style={{ width: '10px', height: '10px' }}
                      ></p>
                      <p className="heading3 ms-3 text_medium">10:22</p>
                    </div>
                    <p className="heading3 ms-3 text_medium">
                      We’ve adjusted the final weight. Please review.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3 flex-wrap">
                  <div className="user_image">
                    <CAvatar src={avatar2} size="md" style={{ height: '70px', width: '70px' }} />
                  </div>
                  <div className="user_detail">
                    <div className="d-flex align-items-center">
                      <p className="heading3 ms-3 text_semibold">@Retailer</p>
                      <p className="heading3 ms-3 text_medium">04 April 2022</p>
                      <p
                        className="dot ms-3 rounded-circle bg-secondary"
                        style={{ width: '10px', height: '10px' }}
                      ></p>
                      <p className="heading3 ms-3 text_medium">10:22</p>
                    </div>
                    <p className="heading3 ms-3 text_medium">
                      Ok, sounds good and everything should look fine from there
                    </p>
                  </div>
                </div>
                <div className="d-flex  justify-content-between align-items-end">
                  <Form className="">
                    <Form.Group
                      controlId="exampleForm.ControlTextarea1"
                      className="align-items-center"
                    >
                      <Form.Control
                        as="textarea"
                        rows="4"
                        cols="200"
                        placeholder="Message"
                        className="w-100 rounded note_reatiler"
                      />
                    </Form.Group>
                  </Form>
                  <div className="large-btn ms-3">Send</div>
                  <div className="large-btn1 light_gray ms-3">Refresh</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </CCardBody>
      </CCard>
    </div>
  )
}
