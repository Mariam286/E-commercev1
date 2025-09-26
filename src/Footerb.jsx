import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
function Footerb() {
  return (
    <>
      <footer className="page-footer bg-dark font-small blue pt-4">
        <div className="container-fluid  text-white text-md-left">
          <div className="row  d-flex justify-content-between">
            <div className="col-md-6 mt-md-0 mt-3">
              <h2 className="">About Kshop</h2>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, quis.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

        
            <div className="col-md-3 mb-md-0 mb-3">
              
            
                
                  <a href="#!" className="text-white">
                  <i className="fa-brands fa-facebook" ></i>
                  </a>
          
                  <a href="#!" className="text-white">
                    <i className="fa-brands fa-telegram" ></i>
                  </a>
               
                  <a href="#!" className="text-white">
                  <i className="fa-brands fa-whatsapp" ></i>
                  </a>
               
                  <a href="#!" className="text-white">
                  <i className="fa-brands fa-instagram" ></i>
                  </a>
                
          
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 text-white">
          © 2025 Copyright: Kshop.com
        </div>
      </footer>
    </>
  );
}

export default Footerb;
