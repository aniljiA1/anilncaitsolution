import React from 'react'
     
const Header = () => {
  return (
	<div>
	 <div className="top_bar">
  <div className="top_bar_container">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
            <ul className="top_bar_contact_list">
              <li>
                <div className="question">Have any questions?</div>
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true" />
                <div>08287584509</div>
              </li>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true" />
                <div>hsdevp2012@gmail.com</div>
              </li>
            </ul>
            <div className="top_bar_login ml-auto">
              <div className="login_button">
                <a href="#">Register or Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
	</div>
  )
}

export default Header
