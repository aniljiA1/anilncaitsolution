import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
  <div
    className="footer_background"
    style={{ backgroundImage: "url(images/footer_background.png)" }}
  />
  <div className="container">
    <div className="row footer_row">
      <div className="col">
        <div className="footer_content">
          <div className="row">
            <div className="col-lg-3 footer_col">
              
              <div className="footer_section footer_about">
                <div className="footer_logo_container">
                  <a href="#">
                    <div className="footer_logo_text">
                        <h1>
                       <span>NCA IT Solution</span> </h1>
                    </div>
                    
                  </a>
                </div>
                <div className="footer_about_text">
                  <p>
                    Lorem ipsum dolor sit ametium, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="footer_social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 footer_col">
              
              <div className="footer_section footer_contact">
                <div className="footer_title">Contact Us</div>
                <div className="footer_contact_info">
                  <ul>
                    <li>Email: hsdevp2012@gmail.com</li>
                    <li>Phone: +(91) 8287584509</li>
                    <li>Iconic Corenthum Tower, Floor 24,Office no-2406A, Electronic City Metro Station, Noida Sector 62</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 footer_col">
              
              <div className="footer_section footer_links">
                <div className="footer_title">Contact Us</div>
                <div className="footer_links_container">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="courses.html">Courses</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 footer_col clearfix">
              
              <div className="footer_section footer_mobile">
                <div className="footer_title">Mobile</div>
                <div className="footer_mobile_content">
                  <div className="footer_image">
                    <a href="#">
                      <img src="images/mobile_1.png" alt="" />
                    </a>
                  </div>
                  <div className="footer_image">
                    <a href="#">
                      <img src="images/mobile_2.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row copyright_row">
      <div className="col">
        <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
          <div className="cr_text">
            
            Copyright © All rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            
          </div>
          <div className="ml-lg-auto cr_links">
            <ul className="cr_list">
              <li>
                <a href="#">Copyright notification</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
