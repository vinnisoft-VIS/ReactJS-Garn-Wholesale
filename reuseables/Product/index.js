import React, { useState, useEffect } from 'react'
import img from 'src/assets/images/img4.png'
import { CFormSwitch } from '@coreui/react'
import SelectAutoSizeWeight from './components/SelectAutoSizeWeight'
import SelectSizeWeight from './components/SelectSizeWeight'
import ItemsBreakdown from './components/ItemsBreakdown'

import { useSelector, useDispatch } from 'react-redux'
import Constants from '../../services/constant'
import { getData } from '../../services/http.service'

export default function Product(props) {
  const dispatch = useDispatch()
  const product_details = useSelector((state) => state.product_details)
  const selected = useSelector((state) => state.selectedProduct)
  const selectedcategory = useSelector((state) => state.selectedcategory)
  const [auto, setAuto] = useState(false)

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = () => {
    getData(Constants.END_POINT.GET_PRODUCT + selected, {
      params: {
        lang_code: 'en',
      },
    })
      .then((res) => {
        if (res.success) {
          dispatch({ type: 'set', varients: res.product.all_variants_for_features_variations })
          dispatch({ type: 'set', product_details: res.product })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className="paragraph2 text-medium my-1 text-black">
        <span className="text-dark">Category: </span>
        {selectedcategory?.name}
      </div>
      <div className="paragraph2 text-medium my-1 text-black">
        <span className="text-dark">Sub-Categories: </span>
        {product_details.product}
      </div>
      <div className="row">
        <div className="col-5 p-2">
          <div className="img-box">
            <img
              src={product_details?.main_pair?.detailed?.image_path || img}
              alt=""
              width="100%"
            />
          </div>
          <ItemsBreakdown />
        </div>
        <div className="col-7 p-2">
          <div className="d-flex justify-content-between">
            <div className="paragraph1 text-medium my-1 text-black">Select Size & Quantity</div>
            <div className="d-flex justify-content-between">
              <div className="paragraph2 text_regular">AUTO &nbsp;&nbsp;</div>
              <CFormSwitch
                style={{ backgroundColor: '#FFEFBA', border: '1px solid #FEF7E3' }}
                onClick={() => setAuto(!auto)}
                checked={auto}
                id="formSwitchCheckDefaultXL"
              />
            </div>
          </div>
          {auto ? (
            <SelectAutoSizeWeight setTab={props.setTab} setAuto={setAuto} />
          ) : (
            <SelectSizeWeight setTab={props.setTab} setAuto={setAuto} setShow={props.setShow} />
          )}
        </div>
      </div>
    </div>
  )
}
