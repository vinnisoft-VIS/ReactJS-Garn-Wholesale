import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import pen from '../../../assets/icons/pen.png'
import close from '../../../assets/icons/close.png'

export default function ItemsBreakdown() {
  const dispatch = useDispatch()
  const order = useSelector((state) => state.order)
  const selectedToEdit = useSelector((state) => state.selectedToEdit)
  const [orders, setOrders] = useState({})
  let total = 0
  // console.log(order)

  const renderBreakDown = (order) => {
    return Object.keys(order).map((p_id, i) => (
      <div key={i}>
        <div className="d-flex justify-content-between my-3">
          <div className="paragraph1">{order[p_id].product}</div>
        </div>
        {order[p_id].selected_products &&
          renderVarients(order[p_id].selected_products, p_id, order[p_id].all_varients)}
      </div>
    ))
  }

  const selectToEdit = (p_id, i) => {
    dispatch({
      type: 'set',
      selectedToEdit: {
        product_id: p_id,
        index: i,
      },
    })
  }

  const renderVarients = (selected_products, p_id, all_varients) => {
    return selected_products.map((item, i) => {
      total = total + parseInt(item.qty)
      return (
        <div
          key={i}
          className={
            selectedToEdit?.product_id === p_id && selectedToEdit?.index === i
              ? 'd-flex justify-content-between my-3 border border-secondary rounded'
              : 'd-flex justify-content-between my-3'
          }
        >
          <div className="paragraph2">
            {Object.keys(item).map((key, i) => (
              <span key={key}>
                {i === 1 && key !== 'qty' ? '/' : null}
                {key !== 'qty' && getVarientName(item[key], key, all_varients)}
              </span>
            ))}
          </div>
          <div>
            <span className="paragraph2 text-black">{item.qty} Pcs</span>
            <span
              className="pointer"
              onClick={() => {
                selectToEdit(p_id, i)
              }}
            >
              <img src={pen} alt="" width="13px" />
            </span>
            <span className="ms-2 pointer" onClick={() => deleteVarient(p_id, i)}>
              <img src={close} alt="" width="12px" />
            </span>
          </div>
        </div>
      )
    })
  }

  const getVarientName = (v_id, f_id, all_varients) => {
    let f_idx = all_varients.findIndex((item, i) => item.feature_id === f_id)
    let v = all_varients[f_idx].variants.find((item, i) => item.variant_id === v_id)
    return v.variant.slice(0, 2)
  }

  const deleteVarient = (p_id, i) => {
    console.log('===>', p_id, i)
    let newOrder = order
    if (newOrder[p_id].selected_products.length > 1) {
      newOrder[p_id].selected_products.splice(i, 1)
      dispatch({ type: 'set', order: newOrder })
    } else {
      delete newOrder[p_id]
      dispatch({ type: 'set', order: newOrder })
    }
    setOrders(new Date())
  }

  return (
    <div className="pl-2">
      <div className="info-box mt-4 my-4">
        <div className="paragraph2 text-dark my-2">Items breakdown:</div>

        {order && renderBreakDown(order)}
        {/* <div className="d-flex justify-content-between my-3">
          <div className="paragraph2">15G/43Cm, 47CM</div>
          <div className="paragraph2 text-black">120 Pcs</div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="paragraph2">15G/43Cm, 47CM</div>
          <div className="paragraph2 text-black">20 Pcs</div>
        </div> */}
        <div className="d-flex justify-content-between my-4">
          <div className="paragraph1">Total Quantity</div>
          <div className="paragraph1 text-black">{total} Pcs</div>
        </div>
      </div>
    </div>
  )
}
