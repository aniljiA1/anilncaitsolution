import React from 'react'

const Navbar = () => {
  return (
	<div>
	  <>
  <div className="header_container">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="header_content d-flex flex-row align-items-center justify-content-start">
            <div className="logo_container">
              <a href="#">
                <div className="logo_text">
                  NCA <span>IT</span> Solution
                </div>
              </a>
            </div>
            <nav className="main_nav_contaner ml-auto">
              <ul className="main_nav">
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="courses.html">Courses</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              <div className="search_button">
                <i className="fa fa-search" aria-hidden="true" />
              </div>
              
              <div className="shopping_cart">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </div>
              <div className="hamburger menu_mm">
                <i className="fa fa-bars menu_mm" aria-hidden="true" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="header_search_container">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
            <form action="#" className="header_search_form">
              <input
                type="search"
                className="search_input"
                placeholder="Search"
                required="required"
              />
              <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
    <div className="menu_close_container">
      <div className="menu_close">
        <div />
        <div />
      </div>
    </div>
    <div className="search">
      <form action="#" className="header_search_form menu_mm">
        <input
          type="search"
          className="search_input menu_mm"
          placeholder="Search"
          required="required"
        />
        <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
          <i className="fa fa-search menu_mm" aria-hidden="true" />
        </button>
      </form>
    </div>
    <nav className="menu_nav">
      <ul className="menu_mm">
        <li className="menu_mm">
          <a href="index.html">Home</a>
        </li>
        <li className="menu_mm">
          <a href="#">About</a>
        </li>
        <li className="menu_mm">
          <a href="#">Courses</a>
        </li>
        <li className="menu_mm">
          <a href="#">Blog</a>
        </li>
        <li className="menu_mm">
          <a href="#">Page</a>
        </li>
        <li className="menu_mm">
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</>

	</div>
  )
}

export default Navbar
