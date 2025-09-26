import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
import { Shanta } from './Context'
import { useContext } from 'react'



function Details() {
let{ productCart }=useContext(Shanta)
let navigate = useNavigate()
let { id } = useParams()
let [product, setProduct] = useState(null)
let [loading , setLoading]= useState(true)

  async function getData() {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(response.data); // <-- Fix here
    console.log(response.data);
    setLoading(false)
  }

  useEffect(() => {
    getData();
  }, [id]);


function handelAddCart() {
    productCart(product)
    navigate('/car')
}
  return (
    <div className='container'>
      <span
      className="carousel-control-prev-icon bg-dark rounded-circle p-2 mt-3"
      role="button"
      onClick={() => navigate(-1)}  // 👈 go back one page
    ></span>
        { loading ?(
            <div className='d-flex justify-content-center my-5 align-items-center'>
              <SyncLoader
  color="orange"
  margin={5}
  size={19}
/>
            </div>
        )
 
    :(product && (
    
<div className="container py-5"
  data-aos-delay="500">
  {/* Product Details */}
  <div className="row gy-4 align-items-start">
    {/* Left Column: Image Gallery */}
    <div className="col-lg-6 col-md-12" >
      <div className="border rounded bg-white shadow-sm p-3 h-100 d-flex align-items-center justify-content-center">
        <div id="productCarousel" className="carousel slide w-100" data-bs-ride="carousel">
          <div className="carousel-inner rounded">
            {product.images.map((img, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <img
                  src={img}
                  className="d-block w-100 img-fluid"
                  alt={`Product ${index}`}
                  style={{ maxHeight: '500px', objectFit: 'contain' }}
                   data-aos="zoom-out"
                  
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* Right Column: Product Info */}
    <div className="col-lg-6 col-md-12" >
      <div className="border rounded bg-white shadow-sm p-4 h-100">
        <h2 className="fw-bold mb-2">{product.title}</h2>
        <p className="text-muted mb-3">{product.category}</p>

        <div className="d-flex align-items-center mb-3">
          <h3 className="text-warning me-3 mb-0"> ${Math.round(product.price)}</h3>
          <span className="badge bg-danger">-{product.discountPercentage}%</span>
        </div>

        <div className="mb-3">
          <span className="me-2">⭐ {product.rating}</span>
          <span className="text-muted">({product.reviews.length} reviews)</span>
        </div>

        {/* Key Details */}
        <div className="row g-2 mb-3">
          <div className="col-6"><strong>Stock:</strong> {product.stock}</div>
          <div className="col-6"><strong>SKU:</strong> {product.sku}</div>
          <div className="col-6"><strong>Weight:</strong> {product.weight} kg</div>
          <div className="col-6">
            <strong>Dimensions:</strong> {product.dimensions.width}×{product.dimensions.height}×{product.dimensions.depth} cm
          </div>
        </div>

        <div className="mb-2"><strong>Tags:</strong> {product.tags.join(', ')}</div>
        <div className="mb-2"><strong>Shipping:</strong> {product.shippingInformation}</div>
        <div className="mb-2"><strong>Return Policy:</strong> {product.returnPolicy}</div>
        <div className="mb-2"><strong>Warranty:</strong> {product.warrantyInformation}</div>
        <div className="mb-2"><strong>Min. Order:</strong> {product.minimumOrderQuantity} pcs</div>

        <button
          className="btn  btn-lg w-100 mt-4 rounded-pill shadow-sm text-white"
          style={{backgroundColor: "#fd7e14"}}
          onClick={()=> {handelAddCart()}}
        >
          Add to Cart <i className="fa-solid fa-cart-shopping ms-2"></i>
        </button>
      </div>
    </div>
  </div>

{/* Reviews Section */}
<div className="row mt-5">
  <div className="col-12">
    <h4 className="fw-bold mb-4">Customer Reviews</h4>

    {product.reviews.length > 0 ? (
      <div className="row g-4">
        {product.reviews.map((review, index) => (
          <div key={index} className="col-lg-6 col-md-12">
            <div className="card h-100 p-4 shadow-sm border-0">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 fw-bold">{review.reviewerName}</h6>
                <span className="text-warning fw-bold fs-6">⭐ {review.rating}</span>
              </div>
              <p className="mb-3 fs-6" style={{ lineHeight: "1.6" }}>
                {review.comment}
              </p>
              <small className="text-muted">
                {new Date(review.date).toLocaleDateString()}
              </small>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="card p-4 shadow-sm border-0">
        <p className="text-muted mb-0 fs-6">No reviews yet.</p>
      </div>
    )}
  </div>
</div>

</div>




)
)}
    </div>
  )
}

export default Details
