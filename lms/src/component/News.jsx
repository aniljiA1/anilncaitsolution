import React from 'react'

const News = () => {
  return (
    <div>
      <>
  <div className="news">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container text-center">
            <h2 className="section_title">Latest News</h2>
            <div className="section_subtitle">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum
                congue, quam velit venenatis sem
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row news_row">
        <div className="col-lg-7 news_col">
          
          <div className="news_post_large_container">
            <div className="news_post_large">
              <div className="news_post_image">
                <img src="images/news_1.jpg" alt="" />
              </div>
              <div className="news_post_large_title">
                <a href="blog_single.html">
                  Here’s What You Need to Know About Online Testing for the ACT
                  and SAT
                </a>
              </div>
              <div className="news_post_meta">
                <ul>
                  <li>
                    <a href="#">admin</a>
                  </li>
                  <li>
                    <a href="#">november 11, 2017</a>
                  </li>
                </ul>
              </div>
              <div className="news_post_text">
                <p>
                  Policy analysts generally agree on a need for reform, but not
                  on which path policymakers should take. Can America learn
                  anything from other nations...
                </p>
              </div>
              <div className="news_post_link">
                <a href="blog_single.html">read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 news_col">
          <div className="news_posts_small">
           
            <div className="news_post_small">
              <div className="news_post_small_title">
                <a href="blog_single.html">
                  Home-based business insurance issue (Spring 2017 - 2018)
                </a>
              </div>
              <div className="news_post_meta">
                <ul>
                  <li>
                    <a href="#">admin</a>
                  </li>
                  <li>
                    <a href="#">november 11, 2017</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="news_post_small">
              <div className="news_post_small_title">
                <a href="blog_single.html">
                  2018 Fall Issue: Credit Card Comparison Site Survey (Summer
                  2018)
                </a>
              </div>
              <div className="news_post_meta">
                <ul>
                  <li>
                    <a href="#">admin</a>
                  </li>
                  <li>
                    <a href="#">november 11, 2017</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="news_post_small">
              <div className="news_post_small_title">
                <a href="blog_single.html">
                  Cuentas de cheques gratuitas una encuesta de Consumer Action
                </a>
              </div>
              <div className="news_post_meta">
                <ul>
                  <li>
                    <a href="#">admin</a>
                  </li>
                  <li>
                    <a href="#">november 11, 2017</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="news_post_small">
              <div className="news_post_small_title">
                <a href="blog_single.html">
                  Troubled borrowers have fewer repayment or forgiveness options
                </a>
              </div>
              <div className="news_post_meta">
                <ul>
                  <li>
                    <a href="#">admin</a>
                  </li>
                  <li>
                    <a href="#">november 11, 2017</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="newsletter">
    <div
      className="newsletter_background parallax-window"
      data-parallax="scroll"
      data-image-src="images/newsletter.jpg"
      data-speed="0.8"
    />
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="newsletter_container d-flex flex-lg-row flex-column align-items-center justify-content-start">
            
            <div className="newsletter_content text-lg-left text-center">
              <div className="newsletter_title">
                sign up for news and offers
              </div>
              <div className="newsletter_subtitle">
                Subcribe to lastest smartphones news &amp; great deals we offer
              </div>
            </div>
            
            <div className="newsletter_form_container ml-lg-auto">
              <form
                action="#"
                id="newsletter_form"
                className="newsletter_form d-flex flex-row align-items-center justify-content-center"
              >
                <input
                  type="email"
                  className="newsletter_input"
                  placeholder="Your Email"
                  required="required"
                />
                <button type="submit" className="newsletter_button">
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default News
