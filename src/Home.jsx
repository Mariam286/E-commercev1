import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { Shanta } from './Context'
import { useContext } from 'react'


function Home() {
  let{ productCart }= useContext(Shanta)

  let navigate = useNavigate();
  
  const [data, setData] = useState([]);

  async function getData() {
    const response = await axios.get("https://dummyjson.com/products/");
    setData(response.data.products); // <-- Fix here
    console.log(response.data.products);
  }

  useEffect(() => {
    getData();
  }, []);
function handelAddCart(item ) {
    productCart(item)
    navigate('/car')
}
  return (
    <div>
      <h1 className="text-center mb-5 pt-5">
        Popular{" "}
        <span className="badge bg-danger " style={{ fontSize: "30px" }}>
          Items
        </span>
      </h1>
      <div className=" container d-flex jutisfiy-content-between gap-5 flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="col">
            <div
              data-aos="zoom-in"
              className="card bg-dark text-white mb-3"
              style={{
                maxHeight: "auto",
                height: "738px",
                paddingBottom: "5px",
              }}
            >
                     <Link to={`/details/${item.id}`} className="text-white">
              <img
                data-aos="zoom-out-up"
                data-aos-delay="50"
                data-aos-duration="500"
                src={item.images[0]}
                className="card-img-top image2"
                alt="..."
              />
              </Link>
              <div className="card-body second">
                      <Link to={`/details/${item.id}`} className="text-white">
                <h3
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  className="card-title"
                >
                  {item.title}
                </h3>
                <span
                  data-aos="fade-up-right"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  style={{
                    color: "#ccc",
                    margin: " 0 30px 0 0",
                    fontSize: "30px",
                  }}
                >
                  {item.category}
                </span>

                <span
                  data-aos="fade-up-right"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  style={{
                    color: "#fd7e14",
                    margin: "0 10px 0 0",
                    fontSize: "30px",
                  }}
                >
                 ${Math.round(item.price)}
                </span>
                </Link>
                <details
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="500"
                >
                  <summary style={{ color: "#8f4cd2ff", fontSize: "30px" }}>
                    Product Info
                  </summary>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    className="card-text"
                  >
                    {item.description}
                  </p>
                </details>
              </div>
              <button
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                className="submit mb-4"
                    onClick={()=> {handelAddCart(item)}}
                style={{
                  backgroundColor: "#fd7e14",
                  fontSize: "30px",
                  placeSelf: "center",
                  width: "300px",
                  height: "50px",
                  color: "aliceblue",
                  border: "none",
                  borderRadius: "40px",
                  outline: "none",
                  
                }}
              >
                Add to cart <i className="fa-solid fa-cart-shopping fa-bounce"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
