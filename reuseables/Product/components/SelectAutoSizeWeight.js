import React, { useState, useEffect } from 'react'
import { CFormRange } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'

export default function SelectAutoSizeWeight(props) {
  const dispatch = useDispatch()
  const varients = useSelector((state) => state.varients)
  const order = useSelector((state) => state.order)
  const product_details = useSelector((state) => state.product_details)
  const selectedToEdit = useSelector((state) => state.selectedToEdit)

  const [selected, setSelected] = useState({})
  const [qty, setQty] = useState(0)

  useEffect(() => {
    addSelectedTostore()
  }, [selected])
  useEffect(() => {
    if (!selectedToEdit?.product_id) {
      addSelectedTostore()
    }
    if (selectedToEdit?.product_id) {
      changeQty(qty)
    }
  }, [qty])

  const addSelectedTostore = () => {
    let a = []
    Object.keys(selected).map((f1, i) => {
      // console.log(f1)
      Object.keys(selected[f1]).map((v1, i) => {
        // console.log(v1)
        Object.keys(selected[f1][v1]).map((f2, i) => {
          // console.log(f2)
          Object.keys(selected[f1][v1][f2]).map((v2, i) => {
            // console.log(v2)
            a.push({ [f1]: v1, [f2]: v2, qty: qty })
          })
        })
      })
    })
    if (a.length) {
      dispatch({
        type: 'set',
        order: {
          ...order,
          [product_details.product_id]: {
            product: product_details.product,
            all_varients: varients,
            selected_products: a,
          },
        },
      })
    }
    dispatch({
      type: 'set',
      selectedToEdit: {},
    })
  }

  const handleChange = (e) => {
    if (e.target.value <= 500) {
      setQty(parseInt(e.target.value))
    }
  }

  const changeQty = (q) => {
    let newOrder = order
    newOrder[selectedToEdit.product_id].selected_products[selectedToEdit.index].qty = q
    dispatch({
      type: 'set',
      order: { ...newOrder },
    })
  }

  const renderFeatureOne = () => {
    return varients[0].variants.map((item, i) => (
      <div key={i} className="d-flex my-2">
        <div className="circle bg-main paragraph2 text-regular p-4 mx-1">
          {item.variant.slice(0, 2)}
        </div>
        {varients.length > 1 &&
          renderFeatureTwo(
            varients[0].feature_id,
            item.variant_id,
            varients[1].feature_id,
            varients[1].variants,
          )}
      </div>
    ))
  }
  const renderFeatureTwo = (feature_id, variant_id, b_feature_id, items) => {
    return items.map((item, i) => (
      <div
        key={i}
        className={
          selected?.[feature_id]?.[variant_id]?.[b_feature_id]?.[item.variant_id]
            ? 'bg-main circle paragraph2 text-regular p-4  mx-1'
            : 'circle paragraph2 text-regular p-4  mx-1'
        }
        onClick={() => handleSelectVarient(feature_id, variant_id, b_feature_id, item)}
      >
        {item.variant.slice(0, 2)}
      </div>
    ))
  }
  const handleSelectVarient = (feature_id, variant_id, b_feature_id, item) => {
    if (selected?.[feature_id]) {
      if (selected?.[feature_id]?.[variant_id]) {
        if (selected?.[feature_id]?.[variant_id]?.[b_feature_id]) {
          if (selected?.[feature_id]?.[variant_id]?.[b_feature_id]?.[item.variant_id]) {
            delete selected?.[feature_id]?.[variant_id]?.[b_feature_id]?.[item.variant_id]
            setSelected({ ...selected })
          } else {
            setSelected({
              ...selected,
              [feature_id]: {
                ...selected[feature_id],
                [variant_id]: {
                  ...selected[feature_id][variant_id],
                  [b_feature_id]: {
                    ...selected[feature_id][variant_id][b_feature_id],
                    [item.variant_id]: item,
                  },
                },
              },
            })
          }
        } else {
          setSelected({
            ...selected,
            [feature_id]: {
              ...selected[feature_id],
              [variant_id]: {
                ...selected[feature_id][variant_id],
                [b_feature_id]: { [item.variant_id]: item },
              },
            },
          })
        }
      } else {
        setSelected({
          ...selected,
          [feature_id]: {
            ...selected[feature_id],
            [variant_id]: { [b_feature_id]: { [item.variant_id]: item } },
          },
        })
      }
    } else {
      setSelected({
        [feature_id]: { [variant_id]: { [b_feature_id]: { [item.variant_id]: item } } },
      })
    }
  }

  return (
    <div id="withauto">
      <div className="size mt-4">
        <div className="d-flex justify-content-between ">
          <div className="paragraph2 text-medium my-1 text-black">
            PRODUCt AVAILABILITY <span className="text-light">(Gram)</span>
          </div>
          <div className="paragraph2 text-medium my-1 text-light">Size Guide</div>
        </div>
        <div className="overflow-auto">
          {/* <div className="d-flex my-2">
            <div className="circle bg-main paragraph2 text-regular mx-1">3.8</div>

            <div className="circle paragraph2 text-regular  mx-1">45</div>
            <div className="circle paragraph2 text-regular  mx-1">47</div>
            <div className="circle bg-main paragraph2 text-regular  mx-1">49</div>
            <div className="circle paragraph2 text-regular  mx-1">52</div>
            <div className="circle paragraph2 text-regular  mx-1">53</div>
          </div>
          <div className="d-flex my-2">
            <div className="circle bg-main paragraph2 text-regular mx-1">3.8</div>
            <div className="circle paragraph2 text-regular  mx-1">45</div>
            <div className="circle paragraph2 text-regular  mx-1">47</div>
            <div className="circle bg-main paragraph2 text-regular  mx-1">49</div>
            <div className="circle paragraph2 text-regular  mx-1">52</div>
            <div className="circle paragraph2 text-regular  mx-1">53</div>
          </div>
          <div className="d-flex my-2">
            <div className="circle bg-main paragraph2 text-regular mx-1">3.80</div>
            <div className="circle paragraph2 text-regular  mx-1">45</div>
            <div className="circle paragraph2 text-regular  mx-1">47</div>
            <div className="circle bg-main paragraph2 text-regular  mx-1">49</div>
            <div className="circle paragraph2 text-regular  mx-1">52</div>
            <div className="circle paragraph2 text-regular  mx-1">53</div>
          </div> */}
          {varients.length && renderFeatureOne()}
        </div>
        <div className="col-10">
          <div className="mt-4 row">
            <div className="col-1">0</div>
            <div className="col-9">
              <CFormRange
                min="0"
                max="500"
                step="1"
                value={qty}
                onChange={(e) => {
                  handleChange(e)
                }}
              />
            </div>
            <input
              type="text"
              className="col-2"
              onChange={(e) => {
                handleChange(e)
              }}
              value={qty}
            />
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="large-btn m-2" onClick={() => props.setAuto(false)}>
          Next
        </div>
      </div>
    </div>
  )
}
