import { createStore } from 'redux'
import icon1 from './assets/icons/image 29.png'
import icon2 from './assets/icons/image 30.png'
import icon3 from './assets/icons/image 31.png'
import icon4 from './assets/icons/image 32.png'
import icon5 from './assets/icons/image 33.png'
import icon6 from './assets/icons/image 34.png'

const initialState = {
  sidebarShow: true,
  selectedToEdit: {},
  selectedcategory: {},
  categories: [
    { id: 1, name: 'Necklace', logo: icon1 },
    { id: 2, name: 'Bracelet', logo: icon2 },
    { id: 3, name: 'Bangle', logo: icon3 },
    { id: 4, name: 'Ring', logo: icon4 },
    { id: 5, name: 'Earing', logo: icon5 },
    { id: 6, name: 'Pendant', logo: icon6 },
  ],
  selectedProduct: null,
  products: [],
  product_details: {},
  varients: {},
  order: {},
  newProducts: [],
}

console.log(initialState)
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
