import React, { useState } from 'react'
import dropimg from 'src/assets/images/dragdrop.png'
import { FileUploader } from 'react-drag-drop-files'
import { useSelector, useDispatch } from 'react-redux'
import { postData, putData } from 'src/services/http.service'
import Constants from 'src/services/constant'

export default function PhotoProduct(props) {
  const dispatch = useDispatch()
  const newProducts = useSelector((state) => state.newProducts)
  const selectedcategory = useSelector((state) => state.selectedcategory)
  const order = useSelector((state) => state.order)
  const [current, setCurrent] = useState(0)
  // console.log(newProducts)
  // console.log(order)

  const [file, setFile] = useState({
    Img1: null,
    Main: null,
    Side: null,
    Front: null,
    Back: null,
    Diagonal: null,
  })
  const changePicture = (e, name) => {
    const img = e.target.files[0]
    setFile({ ...file, [name]: img })
  }
  const fileTypes = ['JPG', 'PNG', 'GIF']
  const handleDroped = (name, e) => {
    setFile({ ...file, [name]: e })
  }

  const uploadImage = async (img, p_id, u_id) => {
    var formData = new FormData()
    formData.append('file', img)
    formData.append('json', JSON.stringify({ product_id: p_id, lang_code: 'en', user_id: u_id }))
    let res = await postData(Constants.END_POINT.UPLOAD_IMAGE, formData)
    if (res.success) {
      return res.file_data
    }
  }

  const uploadMultiple = async () => {
    let imagesArray = []
    await Promise.all(
      Object.keys(file).map(async (item, i) => {
        if (file?.[item]) {
          let res = await uploadImage(file?.[item], newProducts[current]?.product_id, 74)
          imagesArray.push(res.relative_path)
        }
      }),
    )
    return imagesArray
  }

  const addProductImages = async () => {
    let imagesArray = await uploadMultiple()
    let data = {
      image_pair_positon: imagesArray,
      user_id: '74',
    }
    let newRes = await putData(
      Constants.END_POINT.UPLOAD_PRODUCT_IMAGES + `${newProducts[current]?.product_id}`,
      JSON.stringify(data),
    )
    if (newRes.success) {
      if (current < newProducts.length) {
        setCurrent(current + 1)
        setFile({ Img1: null, Main: null, Side: null, Front: null, Back: null, Diagonal: null })
      }
      if (current + 1 === newProducts.length) {
        alert(newRes.message)
        props.setShow(false)
      }
    }
    console.log(newRes)
  }
  return (
    <div className="p-1">
      <div className="paragraph2 text-medium my-1 text-black">
        <span className="text-dark">Category: </span>
        {selectedcategory.name}
      </div>
      <div className="paragraph2 text-medium my-1 text-black">
        <span className="text-dark">Sub-Categories: </span>
        {order?.[newProducts[current]?.product_id]?.product}
      </div>
      <div className="row">
        <div className="col-9 p-2 ">
          <div className="big">
            <FileUploader
              handleChange={(file) => handleDroped('Img1', file)}
              name="file"
              types={fileTypes}
            >
              <div className="img-drop-box">
                {file.Img1 ? (
                  <img src={URL.createObjectURL(file.Img1)} alt="" width="100%" />
                ) : (
                  <div className="img-drop-box-25">
                    <img src={dropimg} alt="" />
                  </div>
                )}
              </div>
            </FileUploader>
          </div>

          <div className="d-flex justify-content-between mt-2">
            <input
              hidden
              accept="image/png, image/jpeg"
              id="Main"
              onChange={(e) => changePicture(e, 'Main')}
              type="file"
            />

            {file.Main ? (
              <label htmlFor="Main" className="small-img-drop-box  paragraph3">
                <img src={URL.createObjectURL(file.Main)} alt="" width="100%" />
              </label>
            ) : (
              <label htmlFor="Main" className="small-img-drop-box small-img-drop-box-5  paragraph3">
                <span className="">Main View</span>
              </label>
            )}
            <input
              hidden
              accept="image/png, image/jpeg"
              // className={classes.input}
              className="input-file"
              id="Side"
              onChange={(e) => changePicture(e, 'Side')}
              type="file"
            />

            {file.Side ? (
              <label htmlFor="Side" className="small-img-drop-box  paragraph3">
                <img src={URL.createObjectURL(file.Side)} alt="" width="100%" />
              </label>
            ) : (
              <label htmlFor="Side" className="small-img-drop-box small-img-drop-box-5  paragraph3">
                <span className="">Side View</span>
              </label>
            )}
            <input
              hidden
              accept="image/png, image/jpeg"
              // className={classes.input}
              className="input-file"
              id="Front"
              onChange={(e) => changePicture(e, 'Front')}
              type="file"
            />

            {file.Front ? (
              <label htmlFor="Front" className="small-img-drop-box  paragraph3">
                <img src={URL.createObjectURL(file.Front)} alt="" width="100%" />
              </label>
            ) : (
              <label
                htmlFor="Front"
                className="small-img-drop-box small-img-drop-box-5  paragraph3"
              >
                <span className="">Front View</span>
              </label>
            )}

            <input
              hidden
              accept="image/png, image/jpeg"
              // className={classes.input}
              className="input-file"
              id="Back"
              onChange={(e) => changePicture(e, 'Back')}
              type="file"
            />
            {file.Back ? (
              <label htmlFor="Back" className="small-img-drop-box  paragraph3">
                <img src={URL.createObjectURL(file.Back)} alt="" width="100%" />
              </label>
            ) : (
              <label htmlFor="Back" className="small-img-drop-box small-img-drop-box-5  paragraph3">
                <span className="">Back View</span>
              </label>
            )}

            <input
              hidden
              accept="image/png, image/jpeg"
              // className={classes.input}
              className="input-file"
              id="Diagonal"
              onChange={(e) => changePicture(e, 'Diagonal')}
              type="file"
            />

            {file.Diagonal ? (
              <label htmlFor="Diagonal" className="small-img-drop-box  paragraph3">
                <img src={URL.createObjectURL(file.Diagonal)} alt="" width="100%" />
              </label>
            ) : (
              <label
                htmlFor="Diagonal"
                className="small-img-drop-box small-img-drop-box-5  paragraph3"
              >
                <span className="">Diagonal View</span>
              </label>
            )}
          </div>
        </div>
      </div>
      <br />
      <div
        className="large-btn"
        onClick={() => {
          // uploadImage(file.Img1, 9041, 74)
          addProductImages()
        }}
      >
        Continue
      </div>
      <br />
    </div>
  )
}
