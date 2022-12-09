import React, { useState, useEffect } from 'react'
import nexticon from 'src/assets/icons/next.png'
import { CFormRange } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { putData } from 'src/services/http.service'
import Constants from 'src/services/constant'

export default function SelectSizeWeight(props) {
  const dispatch = useDispatch()
  const varients = useSelector((state) => state.varients)
  const order = useSelector((state) => state.order)
  const product_details = useSelector((state) => state.product_details)
  const selectedToEdit = useSelector((state) => state.selectedToEdit)
  const selectedcategory = useSelector((state) => state.selectedcategory)

  const [selected, setSelected] = useState({})
  const [qty, setQty] = useState(0)
  const [combination, setCombination] = useState({})

  // console.log(combination)

  const renderType = () => {
    return varients.map((item, i) => (
      <div key={i} className="size w-100 mt-4">
        <div className="d-flex justify-content-between ">
          <div className="paragraph2 text-medium my-1 text-black text-uppercase">
            {item?.description} AVAILABILITY <span className="text-light">(Gram)</span>
          </div>
          <div className="paragraph2 text-medium my-1 text-light">Size Guide</div>
        </div>
        <div className="d-flex overflow-auto">
          {item?.variants && renderVarients(item?.variants, item?.feature_id)}
          <div className="circle paragraph2 text-regular  bg-light mx-1 p-4">
            <img src={nexticon} alt="" width="8px" />
          </div>
        </div>
      </div>
    ))
  }
  const renderVarients = (items, feature_id) => {
    return items.map((item, i) => (
      <div
        key={i}
        className={
          selected?.[feature_id]?.[item.variant_id] ? 'circle p-4 mx-1 bg-main ' : 'circle p-4 mx-1'
        }
        onClick={() => handleSelectVarient(item, feature_id)}
      >
        {item?.variant.slice(0, 2)}
      </div>
    ))
  }
  const handleSelectVarient = (item, feature_id) => {
    if (selected?.[feature_id]?.[item.variant_id]) {
      if (selected?.[feature_id]?.[item.variant_id]) {
        delete selected[feature_id][item.variant_id]
        setSelected({ ...selected })
      } else {
        setSelected({
          ...selected,
          [feature_id]: { ...selected[feature_id], [item.variant_id]: item },
        })
      }
    } else {
      setSelected({ ...selected, [feature_id]: { [item.variant_id]: item } })
    }
  }

  useEffect(() => {
    createSets(selected, 0, [], {})
  }, [selected])

  const createSets = (options, optionIndex, results, current) => {
    if (Object.keys(selected).length > 0) {
      var allKeys = Object.keys(options)
      var optionKey = allKeys[optionIndex]
      // console.log(optionKey)

      var vals = Object.keys(options[optionKey])
      // console.log(vals)

      for (var i = 0; i < vals.length; i++) {
        current[optionKey] = vals[i]

        if (optionIndex + 1 < allKeys.length) {
          createSets(options, optionIndex + 1, results, current)
        } else {
          // The easiest way to clone an object.
          var res = JSON.parse(JSON.stringify(current))
          res.qty = qty
          results.push(res)
        }
      }
      // console.log(results)
      setCombination(results)
      // addSelectedInstore(results)
    }
  }

  const addSelectedInstore = () => {
    if (order?.[product_details.product_id]) {
      let Existing = order?.[product_details.product_id].selected_products
      dispatch({
        type: 'set',
        selectedToEdit: {
          product_id: product_details.product_id,
          index: Existing.length,
        },
      })
      dispatch({
        type: 'set',
        order: {
          ...order,
          [product_details.product_id]: {
            product: product_details.product,
            all_varients: varients,
            selected_products: [...Existing, ...combination],
          },
        },
      })
    } else {
      dispatch({
        type: 'set',
        order: {
          ...order,
          [product_details.product_id]: {
            product: product_details.product,
            all_varients: varients,
            selected_products: combination,
          },
        },
      })
    }
    setCombination([])
  }

  const changeQty = (q) => {
    if (combination.length) {
      if ((combination[0].qty = combination[0].qty + q < 0)) {
        combination[0].qty = 0
      } else {
        combination[0].qty = combination[0].qty + q
      }
    } else {
      let newOrder = order
      let current = newOrder[selectedToEdit.product_id].selected_products[selectedToEdit.index].qty
      q = current + q
      if (q < 0) {
        q = 0
      }
      newOrder[selectedToEdit.product_id].selected_products[selectedToEdit.index].qty = q
      dispatch({
        type: 'set',
        order: { ...newOrder },
      })
    }
  }

  const createAPIPayload = () => {
    let obj = {
      user_id: '78',
      lang_code: 'th',
      ec_products: [],
    }
    Object.keys(order).map((p_id, i) => {
      let b = {}
      order[p_id].selected_products.map((item, i) => {
        if (b[item.qty]) {
          let key = item.qty
          delete item.qty
          b[key].push(item)
        } else {
          let key = item.qty
          delete item.qty
          b = { ...b, [key]: [item] }
        }
      })
      let a = {
        product_id: p_id,
        ec_combinations: b,
      }

      obj.ec_products.push(a)
    })
    return obj
  }

  const finishOrder = () => {
    let payLoad = createAPIPayload()
    console.log('API Payload===>', payLoad)
    putData(Constants.END_POINT.FINISH_ORDER + '/9085', payLoad)
      .then((res) => {
        console.log('Finish Res===>', res)
        if (res.success) {
          props.setTab(3)
          dispatch({
            type: 'set',
            newProducts: res.ec_products,
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div id="withoutauto">
      {varients && renderType()}
      {/* <div className="size mt-4">
        <div className="d-flex justify-content-between ">
          <div className="paragraph2 text-medium my-1 text-black">
            WEIGHT AVAILABILITY <span className="text-light">(Gram)</span>
          </div>
          <div className="paragraph2 text-medium my-1 text-light">Size Guide</div>
        </div>
        <div className="d-flex">
          <div className="circle bg-main paragraph2 text-regular mx-1">1.9</div>
          <div className="circle paragraph2 text-regular  mx-1">3.8</div>
          <div className="circle paragraph2 text-regular  mx-1">7.6</div>
          <div className="circle paragraph2 text-regular  mx-1">11.4</div>
          <div className="circle paragraph2 text-regular  mx-1">15.2</div>
          <div className="circle paragraph2 text-regular  mx-1">22.8</div>
          <div className="circle paragraph2 text-regular  bg-light mx-1 p-4">
            <img src={nexticon} alt="" width="8px" />
          </div>
        </div>
      </div>
      <div className="size mt-4">
        <div className="d-flex justify-content-between ">
          <div className="paragraph2 text-medium my-1 text-black">
            PRODUCT LENGHT <span className="text-light">(cm )</span>
          </div>
          <div className="paragraph2 text-medium my-1 text-light">Size Guide</div>
        </div>
        <div className="d-flex">
          <div className="circle paragraph2 text-regular mx-1">43</div>
          <div className="circle paragraph2 text-regular  mx-1">45</div>
          <div className="circle paragraph2 text-regular  mx-1 bg-main">47</div>
          <div className="circle paragraph2 text-regular  mx-1">49</div>
          <div className="circle paragraph2 text-regular  mx-1">51</div>
          <div className="circle paragraph2 text-regular  mx-1">53</div>
          <div className="circle paragraph2 text-regular  bg-light mx-1 p-4">
            <img src={nexticon} alt="" width="8px" />
          </div>
        </div>
      </div> */}
      <div className="size mt-4">
        <div className="d-flex justify-content-between ">
          <div className="paragraph2 text-medium my-1 text-black">QUANTITY</div>
        </div>

        <div className="d-flex my-1">
          <div
            className="circle bg-green paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(1)
            }}
          >
            +1
          </div>
          <div
            className="circle bg-green paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(2)
            }}
          >
            +2
          </div>
          <div
            className="circle bg-green paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(3)
            }}
          >
            +3
          </div>
          <div
            className="circle bg-green paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(5)
            }}
          >
            +5
          </div>
          <div
            className="circle bg-green paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(10)
            }}
          >
            +10
          </div>
          <div
            className="circle bg-green paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(20)
            }}
          >
            +20
          </div>
          <div
            className="circle bg-green paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(50)
            }}
          >
            +50
          </div>
        </div>
        <div className="d-flex my-1">
          <div
            className="circle bg-red paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(-1)
            }}
          >
            -1
          </div>
          <div
            className="circle bg-red paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(-2)
            }}
          >
            -2
          </div>
          <div
            className="circle bg-red paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(-3)
            }}
          >
            -3
          </div>
          <div
            className="circle bg-red paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(-5)
            }}
          >
            -5
          </div>
          <div
            className="circle bg-red paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(-10)
            }}
          >
            -10
          </div>
          <div
            className="circle bg-red paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(-20)
            }}
          >
            -20
          </div>
          <div
            className="circle bg-red paragraph2 text-regular mx-1"
            onClick={() => {
              changeQty(-50)
            }}
          >
            -50
          </div>
        </div>
      </div>
      <div className="d-flex mt-3">
        <div className="m-1">
          <input type="checkbox" />
        </div>
        <div className="paragraph2 m-1">Save as preset</div>
      </div>
      <div className="d-flex">
        <div
          className="large-btn bg-light m-2 text-blue"
          onClick={() => {
            // createSets(selected, 0, [], {});
            addSelectedInstore()
            setSelected({})
          }}
          style={{ color: '#151522' }}
        >
          ADD
        </div>
        <div
          className="large-btn m-2"
          onClick={() => {
            finishOrder()
            // props.setTab(3)
          }}
        >
          FINISH
        </div>
      </div>
      <div className="d-flex">
        <div
          className=" paragraph3 text-blue mx-2 text-medium pointer "
          onClick={() => props.setTab(1)}
        >
          Add more {selectedcategory?.name.slice(0, 10)}
        </div>
        <div
          className=" paragraph3 text-blue mx-2 text-medium pointer "
          onClick={() => props.setShow(false)}
        >
          Add more items
        </div>
      </div>
    </div>
  )
}
