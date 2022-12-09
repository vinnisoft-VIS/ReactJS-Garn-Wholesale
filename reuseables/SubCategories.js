import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Constants from '../services/constant'
import { getData } from '../services/http.service'
import iconBadge from 'src/assets/icons/check-circle.png'

export default function SubCategories(props) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const selectedcategory = useSelector((state) => state.selectedcategory)
  const selected = useSelector((state) => state.selectedProduct)

  const [pageNo, setPageNo] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  const itemsPerPage = 10

  const [params, setParams] = useState({})

  useEffect(() => {
    getCategoryProducts()
  }, [pageNo])
  useEffect(() => {
    dispatch({ type: 'set', selectedProduct: null })
  }, [])

  const renderPagination = () => {
    let a = []
    for (let i = pageNo - 2; i <= pageNo + 2; i++) {
      if (i <= totalPages && i > 0) {
        a.push(
          <div
            onClick={() => setPageNo(i)}
            className={params?.page === i ? 'feature feature-active' : 'feature'}
          >
            {i}
          </div>,
        )
      }
    }
    return a
  }

  const getCategoryProducts = () => {
    getData(Constants.END_POINT.GET_CAT_PRODUCTS, {
      params: {
        category_id: selectedcategory.id,
        page: pageNo,
        items_per_page: itemsPerPage,
        lang_code: 'en',
      },
    })
      .then((res) => {
        if (res.success) {
          dispatch({ type: 'set', products: res.products })
          dispatch({ type: 'set', varients: res.varients })
          setParams(res.search)
          let len = res?.search?.total_items / res?.search?.items_per_page
          setTotalPages(Math.ceil(len))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderType = () => {
    return products.map((item, i) => (
      <div
        key={item.product_id}
        onClick={() => dispatch({ type: 'set', selectedProduct: item.product_id })}
        className="type-card badgeItem m-1"
      >
        <div className={selected === i ? 'img-card-active img-card' : 'img-card '}>
          <img src={item?.main_pair?.detailed?.image_path} alt="" width="100%" />
        </div>{' '}
        <div className="paragraph2 text-medium mt-1 text-black">
          <div className="text-dark">{selectedcategory.name?.slice(0, 10)}</div>
          {item?.product && item.product.length > 15 ? item.product.slice(0, 15) : item.product}
        </div>
        <img
          className={selected === item.product_id ? 'imgBadge' : 'd-none'}
          src={iconBadge}
          alt=""
          width="32px"
        />
      </div>
    ))
  }
  return (
    <div>
      <div className="paragraph2 text-medium my-1 text-black">
        <span className="text-dark">Category: </span>
        {selectedcategory.name}
      </div>
      <div className="paragraph1 text-medium my-1 text-black">Please Select Your Sub-category</div>
      <div className="d-flex flex-wrap">{renderType()}</div>

      {/* renderPagination */}
      <div className="d-flex justify-content-center mt-3 ">
        <div className="d-flex flex-wrap ">
          <div className="feature paragraph3" onClick={() => setPageNo(1)}>
            PREV
          </div>
          <div
            onClick={() => {
              if (pageNo > 1) {
                setPageNo(pageNo - 1)
              }
            }}
            className="feature"
          >
            &lt;
          </div>
          {totalPages && renderPagination()}
          <div className="feature" onClick={() => setPageNo(pageNo + 1)}>
            &#62;
          </div>
          <div className="feature paragraph3" onClick={() => setPageNo(totalPages)}>
            NEXT
          </div>
        </div>
      </div>
      <br />
      <div
        className="large-btn"
        onClick={() => {
          selected && props.setTab(2)
        }}
      >
        Continue
      </div>
      <br />
    </div>
  )
}
