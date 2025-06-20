import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className="counter">
  <div
    className="counter_background"
    style={{ backgroundImage: "url(images/counter_background.jpg)" }}
  />
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="counter_content">
          <h2 className="counter_title">Register Now</h2>
          <div className="counter_text">
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry’s standard dumy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
          
          <div className="milestones d-flex flex-md-row flex-column align-items-center justify-content-between">
            
            <div className="milestone">
              <div className="milestone_counter" data-end-value={15}>
                0
              </div>
              <div className="milestone_text">years</div>
            </div>
            
            <div className="milestone">
              <div
                className="milestone_counter"
                data-end-value={120}
                data-sign-after="k"
              >
                0
              </div>
              <div className="milestone_text">years</div>
            </div>
            
            <div className="milestone">
              <div
                className="milestone_counter"
                data-end-value={670}
                data-sign-after="+"
              >
                0
              </div>
              <div className="milestone_text">years</div>
            </div>
            
            <div className="milestone">
              <div className="milestone_counter" data-end-value={320}>
                0
              </div>
              <div className="milestone_text">years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="counter_form">
      <div className="row fill_height">
        <div className="col fill_height">
          <form
            className="counter_form_content d-flex flex-column align-items-center justify-content-center"
            action="#"
          >
            <div className="counter_form_title">courses now</div>
            <input
              type="text"
              className="counter_input"
              placeholder="Your Name:"
              required="required"
            />
            <input
              type="tel"
              className="counter_input"
              placeholder="Phone:"
              required="required"
            />
            <select
              name="counter_select"
              id="counter_select"
              className="counter_input counter_options"
            >
              <option>Choose Subject</option>
              <option>Subject</option>
              <option>Subject</option>
              <option>Subject</option>
            </select>
            <textarea
              className="counter_input counter_text_input"
              placeholder="Message:"
              required="required"
              defaultValue={""}
            />
            <button type="submit" className="counter_form_button">
              submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Blog
