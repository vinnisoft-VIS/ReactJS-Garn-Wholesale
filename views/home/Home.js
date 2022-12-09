import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'

import iconBadge from '../../assets/icons/check-circle.png'

import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'

import Modal from 'src/reuseables/Modal'

export default function Home() {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories)
  const selected = useSelector((state) => state.selectedcategory)

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    getData('api/GnCategoriesApi/', {
      params: {
        lang_code: 'en',
      },
    })
      .then((res) => {
        if (res.success) {
          dispatch({ type: 'set', categories: res.categories })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const randerCategories = () => {
    return categories.map((item) => (
      <div
        key={item.id}
        onClick={() => {
          dispatch({ type: 'set', selectedcategory: { id: item.id, name: item?.name } })
        }}
        className="col-12 col-md-4 p-2 badgeItem"
      >
        <div className={selected.id == item.id ? 'category-card category-avtive' : 'category-card'}>
          <div
            className={
              selected.id == item.id ? 'category-card-round round-active' : 'category-card-round'
            }
          >
            <img src={item?.logo} alt="" width="37px" />
          </div>
          <div className="category-card-text heading1 text_regular">{item?.name.slice(0, 10)}</div>
        </div>
        <img
          className={selected.id == item.id ? 'imgBadge' : 'd-none'}
          src={iconBadge}
          alt=""
          width="37px"
        />
      </div>
    ))
  }

  const [showModal, setShowModal] = useState(false)
  return (
    <CCard>
      <CCardBody>
        <CRow>
          <CCol xs={12}>
            <div className="heading3 text_medium">Please Select Your Category</div>
            <div className="row p-1">{randerCategories()}</div>
            <br />
            <div
              className="large-btn"
              onClick={() => {
                selected && setShowModal(true)
              }}
            >
              Continue
            </div>
            <br />
          </CCol>
        </CRow>{' '}
      </CCardBody>
      <Modal
        visible={showModal}
        onClose={() => {
          setShowModal(false)
        }}
      >
        fgtfdgf
      </Modal>
    </CCard>
  )
}
