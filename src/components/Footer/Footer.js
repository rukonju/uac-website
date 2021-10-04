import React from "react";
import { Facebook, Youtube, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="bg-success">
          <div className=" bg-success mb-0">
            <section className="container mb-0">
            <div className="#">
              <div className="row mx-0 ">
                <div className="col-lg-4 col-md-12 py-4 my-4" >
                  <div className="my-4" >
                    < Facebook className="me-4" color="white" size={24}/> < Youtube className="me-4" color="white" size={24}/> <Twitter className="me-4" color="white" size={24}/>
                  </div>
                  <p className="text-light">Contact: 34908834345</p>
                  <p className="text-light">Email: universityadcare@gmail.com</p>
                  <p className="text-light">Location: Sherpur Town, Sherpur, Mymensingh.</p>
                  
                </div>
                
                <div className="col-lg-2 col-md-12 py-4 my-4">
                  <h3 className="text-light">UAC</h3>
                  <div>
                    <div><a className="text-light text-decoration-none"href="#">Privacy policy</a></div>
                    <div><a className="text-light text-decoration-none"href="#">Terms of use</a></div>
                    <div><a className="text-light text-decoration-none"href="#">Who We Are</a></div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 py-4 my-4">
                  <h3 className="text-light">Most Popular</h3>
                  <div><a className="text-light text-decoration-none" href="#">Spoken English</a></div>
                  <div><a className="text-light text-decoration-none" href="#">Engineering Preperation</a></div>
                  <div><a className="text-light text-decoration-none" href="#">DU A Unit Preperation</a></div>
                  <div><a className="text-light text-decoration-none" href="#">Web Development</a></div>
                  
                </div>
                <div className="col-lg-2 col-md-12 py-4 my-4">
                  <h3 className="text-light">Others</h3>
                  <div><a className="text-light text-decoration-none"href="#">Study</a></div>
                  <div><a className="text-light text-decoration-none"href="#">Skills</a></div>
                  <div><a className="text-light text-decoration-none"href="#">Books Store</a></div>
                  
                </div>
              </div>
            </div>
            </section>
            <section>
              
              <p className="text-center text-light mb-0 py-2"> © 2020 - 2021 University Admission Care.</p>
            </section>
          </div>
    </footer>
    );
};

export default Footer;