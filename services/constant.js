export default class Constants {
  static BASE_URL = 'https://staging.admin.garnenterprise.com/'
  static END_POINT = {
    LOGIN: 'api/VnLoginApi',
    GET_CATEGORIES: 'api/GnCategoriesApi/?user_id=74&lang_code=en',
    GET_CAT_PRODUCTS: 'api/GnProductsApi/',
    GET_PRODUCT: 'api/GnProductsApi/',
    FINISH_ORDER: 'api/GnProductsApi/',
    UPLOAD_IMAGE: 'api/GnUpdatePictures',
    UPLOAD_PRODUCT_IMAGES: 'api/GnUpdatePictures/',
  }
}
