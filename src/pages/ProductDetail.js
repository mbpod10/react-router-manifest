import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = (props) => {
  const params = useParams()

  return (
    <section>
      <h1>{params.productId} Detail Page</h1>
    </section>
  )
}

export default ProductDetail