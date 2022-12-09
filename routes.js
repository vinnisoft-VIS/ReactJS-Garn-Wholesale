import React from 'react'

const Home = React.lazy(() => import('./views/home/Home'))
const Orders = React.lazy(() => import('./views/orders/Orders'))
const Products = React.lazy(() => import('./views/products/Products'))
const Sales = React.lazy(() => import('./views/sales/SaleReport.js'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Home },
  { path: '/products', name: 'Dashboard', element: Products },
  { path: '/orders', name: 'My Orders', element: Orders },
  { path: '/salesreport', name: 'My Orders', element: Sales },
]

export default routes
