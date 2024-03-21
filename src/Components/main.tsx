// @ts-nocheck

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../Styles/main.css";
import Hero_Logo from "../Styles/assets/icons/Vector-6.png";
import Hero_Line from "../Styles/assets/icons/Vector 2-3.png";
import hero_features from "../Styles/assets/icons/Vector copy 5.png";
import url_underline from "../Styles/assets/icons/Vector 3.png";
import vector_one from "../Styles/assets/icons/Vector 2.png";
import vector_three from "../Styles/assets/icons/Vector-2.png";
import vector_two from "../Styles/assets/icons/Vector-3.png";
import arrow from "../Styles/assets/icons/Line 7.png";
import rectangle from "../Styles/assets/icons/Rectangle 9.png";
import elipse from "../Styles/assets/icons/Ellipse 1.png";
import why_content_img from "../Styles/assets/icons/Line 70-1.png";
import vector_main from "../Styles/assets/icons/Vector copy.png";
import vector_four from "../Styles/assets/icons/Vector-1 copy.png";
import why_img from "../Styles/assets/icons/link-2.png";
import why_img_2 from "../Styles/assets/icons/grid.png";
import why_img_3 from "../Styles/assets/icons/edit copy.png";
import why_img_4 from "../Styles/assets/icons/activity.png";
import vector_img from "../Styles/assets/icons/Vector-2 copy.png";
import vector_five from "../Styles/assets/icons/Vector-3 copy.png";
import victor_img_2 from "../Styles/assets/icons/Vector copy.png";
import vector_A from "../Styles/assets/icons/Vector-8 copy.png";
import vector_B from "../Styles/assets/icons/Vector-9 copy.png";
import vector_C from "../Styles/assets/icons/vector 10.png";
import arrow_down_img from "../Styles/assets/icons/Vector copy 2.png";
import button_image from "../Styles/assets/icons/Vector 1 copy.png";
import vector_D from "../Styles/assets/icons/footer 1.png";
import vector_E from "../Styles/assets/icons/footer 2.png";
import vector_F from "../Styles/assets/icons/Vector-2 copy 2.png";
import vector_G from "../Styles/assets/icons/Vector-1 copy 2.png";
import vector_H from "../Styles/assets/icons/Vector copy 3.png";
import line_img from "../Styles/assets/icons/Line 70-1.png";
import minus from "../Styles/assets/icons/Vector-1 copy 3.png";
import underline from "../Styles/assets/icons/more icons/Vector 4.png";
import plus from "../Styles/assets/icons/icons8-plus-24.png";
import FAQ_vector_one from "../Styles/assets/icons/more icons/Vector-1.png";
import FAQ_vector_two from "../Styles/assets/icons/more icons/Vector-2.png";
import FAQ_vector_three from "../Styles/assets/icons/more icons/Vector.png";
import uppervector_one from "../Styles/assets/icons/more icons/Vector-6.png";
import uppervector_two from "../Styles/assets/icons/more icons/Vector-7.png";
import uppervector_three from "../Styles/assets/icons/more icons/Vector-8.png";
import uppervector_four from "../Styles/assets/icons/more icons/Vector-3.png";
import uppervector_five from "../Styles/assets/icons/more icons/Vector-4.png";
import uppervector_six from "../Styles/assets/icons/more icons/Vector-5.png";
import vector_A_footer from "../Styles/assets/icons/more icons/Vector-12.png";
import vector_B_footer from "../Styles/assets/icons/more icons/Vector-13.png";
import vector_C_footer from "../Styles/assets/icons/more icons/Vector-14.png";
import actual_scissor_logo from "../Styles/assets/icons/Vector-7.png";
import actual_scissor_line from "../Styles/assets/icons/Vector 2-2.png";
import footer_img from "../Styles/assets/icons/footer 7.png";
import footer_img_2 from "../Styles/assets/icons/icons8-instagram-50.png";
import footer_img_3 from "../Styles/assets/icons/Vector-9.png";
import footer_img_4 from "../Styles/assets/icons/Vector-10.png";
import line_footer from "../Styles/assets/icons/Vector 2-2.png";
import c_img from "../Styles/assets/icons/icons8-c-32.png";
import vector_D_footer from "../Styles/assets/icons/more icons/Vector-9.png";
import vector_E_footer from "../Styles/assets/icons/more icons/Vector-10.png";
import vector_F_footer from "../Styles/assets/icons/more icons/Vector-11.png";

function BurgerMenu() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="burger-menu-container">
      <button className="js-fh5co-nav-toggle" onClick={toggleNav}>
        {isNavVisible ? "Close Menu" : "Open Menu"}
      </button>
      <nav className={`ftco-nav ${isNavVisible ? "active" : ""}`}></nav>
    </div>
  );
}

function Main() {
  return (
    <div>
      {/* The header that contains the navigation starts from here */}
      <header className="hero_section">
        {/* The logo */}
        <div className="scissors">
          <img className="Hero_Logo" src={Hero_Logo} alt="" />
          <img  className="Hero_Line" src={Hero_Line} alt="" />
          <div>SCISSORS</div>
        </div>
        {/* Logo ends here */}
        {/* The nav bar starts here */}

        <nav className="all_navigator ftco-nav">
          {/* <BurgerMenu/> */}
          <div className="container_nav">
            <ul className="Hero_Nav">
              <li className="hero_url">My URLs</li>
              <li>
                Features
                <img className="hero_features" src={hero_features} alt="" />
              </li>
              <li>Pricing</li>
              <li>Analytics</li>
              <li>FAQs</li>
            </ul>
            <div className="hero_button">
              <Link to="/login" className="hero_login">
                Log in
              </Link>
              <button className="hero_try_for_free">Try for free</button>
            </div>
          </div>
        </nav>
        {/* end of nav bar */}
      </header>
      {/* The header ends here */}
      {/* The main content starts here */}
      <main>
        <article>
          {/* this the section for the central text */}
          <section className="content_for_central">
            <p className="Bolder_Text">
              Optimize Your Online Experience with Our <br />
              Advanced
              <b className="url_text">
                {" "}
                URL Shortening
                <img
                  className="url_underline"
                  src={url_underline}
                  alt=""
                />{" "}
              </b>
              Solution
            </p>
            <p className="smaller_text">
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, <br />
              branded links, and domain customization options to reinforce your
              brand presence and <br />
              enhance user engagement.
            </p>
          </section>
          {/* the central text ends here */}
          {/* this is the button for the central text */}
          <section className="button_signup_learnMore">
            <Link to="/SignUp" className="button_signup">
              Sign Up
            </Link>
            <button className="button_learnmore">Learn More</button>
          </section>
          {/* The buttons for the central text ends here */}
          {/* This is the section for transform image */}
          <section>
            <div>
              <img className="vector_one" src={vector_one} alt="" />
              <div className="transformation_container">
                <div className="the_vectors">
                  <img className="vector_three" src={vector_three} alt="" />
                  <img className="vector_two" src={vector_two} alt="" />
                  <img className="vector_three" src={vector_three} alt="" />
                  <img className="vector_two" src={vector_two} alt="" />
                  <img className="vector_three" src={vector_three} alt="" />
                  <img className="vector_two" src={vector_two} alt="" />
                  <img id="arrow" src={arrow} alt="" />
                  <img className="vector_three" src={vector_three} alt="" />
                  <img className="vector_two" src={vector_two} alt="" />
                </div>
                <div className="content_transform">
                  <p>
                    Seamlessly transform your long URLs into concise and <br />
                    shareable links with just few clicks.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* the transform image ends here */}
          {/* This is the 3D section beneath the transform drawing */}
          <section>
            <div className="elipse">
              <img src={elipse} alt="elispe" />
            </div>
            <div>
              <img className="rectangle" src={rectangle} alt="" />
            </div>
            {/* The 3D ends here */}
            {/* This is the frame for the metrics */}
            <div className="Frame">
              <div>
                <p className="metric_text">
                  One Stop.
                  <br />
                  Four <b className="possibilities">Possibilities</b>.
                </p>
              </div>
              <div className="actual_metric">
                <div>
                  <b className="bold_metric"> 3M </b>
                  <p className="small_metric">Active user</p>
                </div>
                <div>
                  <b className="bold_metric"> 60M </b>
                  <p className="small_metric">
                    Links &amp; QR <br />
                    codes created
                  </p>
                </div>
                <div>
                  <b className="bold_metric"> 1B </b>
                  <p className="small_metric">
                    Clicked &amp; Scanned
                    <br />
                    connections
                  </p>
                </div>
                <div>
                  <b className="bold_metric"> 300k </b>
                  <p className="small_metric">App Integrations</p>
                </div>
              </div>
            </div>
            {/* The metrics frame ends here */}
          </section>
        </article>
        {/* this is the section of why choose scissors */}
        <article className="whole_why_content">
          <section>
            <div className="why_content">
              <img src={why_content_img} alt="" />
              <div className="why_head">
                Why choose <b className="scissors_text">Scissors</b>
              </div>
            </div>
            <p className="actual_why_content">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.
            </p>
          </section>
          <section>
            <div className="whole_URL">
              <img className="why_img" src={why_img} alt="" />
              <div>
                <b className="URL"> URL Shortening </b>
                <p className="URL_content">
                  Scissor allows you to shorten URLs of your business, events.
                  Shorten your URL at scale, URL redirects.
                </p>
              </div>
            </div>
            <div className="whole_QR">
              <img className="why_img" src={why_img_2} alt="" />
              <div>
                <b className="QR"> QR Codes </b>
                <p className="QR_content">
                  Generate QR codes to your business, events. Bring your
                  audience and customers to your doorstep with this scan and go
                  solution.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="whole_custom">
              <img className="why_img" src={why_img_3} alt="" />
              <div>
                <b className="custom"> Custom URLs </b>
                <p className="custom_content">
                  With Scissor, you can create custom URLs, with the length you
                  want! A solution for socials and businesses.
                </p>
              </div>
              <div className="whole_data">
                <div>
                  <img className="why_img" src={why_img_4} alt="" />
                </div>
                <b className="data"> Data Analytics </b>
                <p className="data_content">
                  Receive data on the usage of either your shortened URL, custom
                  URLs or generated QR codes. Embedded to monitor progress.
                </p>
              </div>
            </div>
          </section>
        </article>
        {/*  this is the end of the why scissors section */}
        {/* the price section starts here */}
        <article className="whole_pricing">
          <section>
            <div className="price_heading">
              <img src={why_content_img} alt="" />
              <div className="heading_word">
                A <b className="price_highlight">price perfect</b> for your
                needs.
              </div>
            </div>
            <p className="price_content">
              From catering for your personal, business, event, socials needs,
              you can be <br />
              rest assured we have you in mind in our pricing.
            </p>
          </section>
          {/* this is the section for the plans */}
          <section className="the_whole_plan">
            {/* the basic plan content */}
            <div className="basic_plan_container">
              <div className="basic_word">Basic</div>
              <p className="free_content">
                <b className="free_word">Free</b>
                <br />
                Free plan for all users
              </p>
              <ul className="whole_thick">
                <li className="first_thick">
                  <div>
                    <img src={vector_main} alt="" />

                    <img className="vector_four" src={vector_four} alt="" />
                  </div>
                  <div>Unlimited URL Shortening</div>
                </li>
                <li className="second_thick">
                  <div>
                    <img src={vector_main} alt="" />
                    <img className="vector_four" src={vector_four} alt="" />
                  </div>
                  <div>Basic Link Analytics</div>
                </li>
                <li className="third_thick">
                  <div>
                    <img src={vector_main} alt="" />
                    <img className="vector_four" src={vector_four} alt="" />
                  </div>
                  <div>Customizable Short Links</div>
                </li>
                <li className="fourth_thick">
                  <div>
                    <img src={vector_main} alt="" />
                    <img className="vector_four" src={vector_four} alt="" />
                  </div>
                  <div>Standard Support</div>
                </li>
                <li className="fifth_thick">
                  <div>
                    <img src={vector_main} alt="" />
                    <img className="vector_four" src={vector_four} alt="" />
                  </div>
                  <div>Ad-supported</div>
                </li>
              </ul>
            </div>
            {/* The basic plan ends here */}
            {/* this is a section for the professional plan */}
            <div className="professional_container">
              <div className="professional_word">Professional</div>
              <p className="month_content">
                <b className="month_word">$15/month</b>
                <br />
                Ideal for business creators
              </p>
              <ul className="whole_thick">
                <li className="first_thick">
                  <div>
                    <img src={vector_img} alt="vector" />
                    <img className="vector_five" src={vector_five} alt="" />
                  </div>
                  <div>Enhanced Link Analytics</div>
                </li>
                <li className="second_thick">
                  <div>
                    <img src={vector_img} alt="" />
                    <img className="vector_five" src={vector_five} alt="" />
                  </div>
                  <div>Custom Branded Domains</div>
                </li>
                <li className="third_thick">
                  <div>
                    <img src={vector_img} alt="" />
                    <img className="vector_five" src={vector_five} alt="" />
                  </div>
                  <div>Advanced Link Customization</div>
                </li>
                <li className="fourth_thick">
                  <div>
                    <img src={vector_img} alt="" />
                    <img className="vector_five" src={vector_five} alt="" />
                  </div>
                  <div>Priority Support</div>
                </li>
                <li className="fifth_thick">
                  <div>
                    <img src={vector_img} alt="" />
                    <img className="vector_five" src={vector_five} alt="" />
                  </div>
                  <div>Ad-free Experience</div>
                </li>
              </ul>
            </div>
            {/* the professional plan ends here */}
            {/* the teams plan */}
            <div className="teams_plan_container">
              <div className="teams_word">Teams</div>
              <p className="month_content">
                <b className="month_word">$25/month</b>
                <br />
                Share with up to 10 users
              </p>
              <ul className="whole_thick">
                <li className="first_thick">
                  <div>
                    <img src={victor_img_2} alt="" />
                    <img className="vector_six" src={vector_four} alt="" />
                  </div>
                  <div>Team Collaboration</div>
                </li>
                <li className="second_thick">
                  <div>
                    <img src={victor_img_2} alt="" />
                    <img className="vector_six" src={vector_four} alt="" />
                  </div>
                  <div>User Roles and Permissions</div>
                </li>
                <li className="third_thick">
                  <div>
                    <img src={victor_img_2} alt="" />
                    <img className="vector_six" src={vector_four} alt="" />
                  </div>
                  <div>Enhanced Security</div>
                </li>
                <li className="fourth_thick">
                  <div>
                    <img src={victor_img_2} alt="" />
                    <img className="vector_six" src={vector_four} alt="" />
                  </div>
                  <div>API Access</div>
                </li>
                <li className="fifth_thick">
                  <div>
                    <img src={victor_img_2} alt="" />
                    <img className="vector_six" src={vector_four} alt="" />
                  </div>
                  <div>Dedicated Account Manager</div>
                </li>
              </ul>
            </div>
          </section>
          {/* this is the button section for the  */}
          <section className="price_button">
            <button className="get_button">Get Custom Pricing</button>
            <button className="select_button">Select Pricing</button>
          </section>
        </article>
        {/* The price section ends here  */}
        {/* this is the section for the url form */}
        <form className="url_form_background">
          <div className="vector_design_form">
            <img className="vector_A" src={vector_A} alt="" />
            <img className="vector_B" src={vector_B} alt="" />
            <img className="vector_C" src={vector_C} alt="" />
          </div>
          <section className="actual_form">
            <div className="url">
              <input
                className="url_input"
                type="text"
                placeholder="Paste URL here..."
                // @ts-ignore
                style={{ "--placeholder-color": "#3284FF" }}
              />
            </div>
            <div className="floated_input">
              <div>
                <select
                  name="job_level"
                  className="domain_input"
                  // @ts-ignore
                  placeholder="choose Domain"
                  required
                >
                  <option value="" disabled selected hidden>
                    Choose Domain
                  </option>
                  <option value="Analyst">.com</option>
                  <option value="Associate">.ng</option>
                </select>
                <img className="arrow_down_img" src={arrow_down_img} alt="" />
              </div>

              <div className="alias">
                <input
                  className="alias_input"
                  type="text"
                  placeholder="Type Alias here"
                  // @ts-ignore
                  style={{ "--placeholder-color": "#3284FF" }}
                />
              </div>
            </div>
            <button className="trim_url_button">
              Trim URL
              <img className="button_image" src={button_image} alt="" />
            </button>
            <div className="form_text">
              <a className="text_content_form" href="#">
                By clicking TrimURL, I agree to the
                <b> Terms of Service, Privacy Policy</b> and Use of Cookies.
              </a>
            </div>
          </section>
          <div className="lower_vector_form">
            <img className="vector_D" src={vector_D} alt="" />
            <img className="vector_E" src={vector_E} alt="" />
          </div>
        </form>
        {/* This is the end of the url form */}
        {/* the FAQ section starts here */}
        <article>
          <div className="questioning_section">
            <div>
              <img className="vector_F" src={vector_F} alt="" />
              <img className="vector_G" src={vector_G} alt="" />
              <img className="vector_H" src={vector_H} alt="" />
            </div>
            <div>
              <div className="FAQ_head">
                <img src={line_img} alt="" />
                <div className="FAQ_word">FAQs</div>
              </div>
              <section className="whole_FAQ_content">
                <div className="how_FAQ">
                  <div>How does URL shortening work?</div>
                  <img className="minus" src={minus} alt="" />
                </div>
                <div className="how_FAQ_content">
                  <p>
                    URL shortening works by taking a long URL and creating a
                    shorter, condensed version that redirects to the original
                    URL. When a user clicks on the shortened link, they are
                    redirected to the intended destination.
                  </p>
                </div>
                <img className="underline" src={underline} alt="" />
                <div className="question_one">
                  <div>
                    Is it necessary to create an account to use the URL
                    shortening service?
                  </div>
                  <img className="plus" src={plus} alt="" />
                </div>
                <img className="underline" src={underline} alt="" />
                <div className="question_two">
                  <div>
                    Are the shortened links permanent? Will they expire?
                  </div>
                  <img src={plus} alt="" />
                </div>
                <img className="underline" src={underline} alt="" />
                <div className="question_three">
                  <div>
                    Are there any limitations on the number of URLs I can
                    shorten?
                  </div>
                  <img src={plus} alt="" />
                </div>
                <img className="underline" src={underline} alt="" />
                <div className="question_four">
                  <div>
                    Can I customize the shortened URLs to reflect my brand or
                    content?
                  </div>
                  <img src={plus} alt="" />
                </div>
                <img className="underline" src={underline} alt="" />
                <div className="question_five">
                  <div>Can I track the performance of my shortened URLs?</div>
                  <img src={plus} alt="" />
                </div>
                <img className="underline" src={underline} alt="" />
                <div className="question_six">
                  <div>
                    How secure is the URL shortening service? Are the shortened
                    links protected <br />
                    against spam or malicious activity?
                  </div>
                  <img className="question_six_plus" src={plus} alt="" />
                </div>
                <img className="underline" src={underline} alt="" />
                <div className="question_seven">
                  <div>What is a QR code and what can it do?</div>
                  <img src={plus} alt="" />
                </div>
                <img className="underline" src={underline} alt="" />
                <div className="question_eight">
                  <div>
                    Is there an API available for integrating the URL shortening
                    service into my own <br />
                    applications or websites?
                  </div>
                  <img className="question_eight_plus" src={plus} alt="" />
                </div>
                <img className="underline" src={underline} alt="" />
              </section>
            </div>
            <div className="FAQ_vectors">
              <img className="FAQ_vector_one" src={FAQ_vector_one} alt="" />
              <img className="FAQ_vector_two" src={FAQ_vector_two} alt="" />
              <img className="FAQ_vector_three" src={FAQ_vector_three} alt="" />
            </div>
          </div>
        </article>
        {/* the FAQ content ends here */}
        {/* The revolutioning link starts here */}
        <article>
          <section className="whole_revolution">
            <div className="upper_vector_revolution">
              <img className="uppervector_one" src={uppervector_one} alt="" />
              <img className="uppervector_two" src={uppervector_two} alt="" />
              <img
                className="uppervector_three"
                src={uppervector_three}
                alt=""
              />
            </div>
            <div className="revolution_content">
              <div className="revolution_word">
                <p>Revolutionizing Link Optimization</p>
              </div>
              <button className="get_started_button">Get Started</button>
            </div>
            <div className="lower_vector_revolution">
              <img className="uppervector_four" src={uppervector_four} alt="" />
              <img className="uppervector_five" src={uppervector_five} alt="" />
              <img className="uppervector_six" src={uppervector_six} alt="" />
            </div>
          </section>
        </article>
        {/* The revolutioning link ends here */}
      </main>
      {/* the footer section starts here */}
      <div className="main_footer">
        <div className="footer_vector_one">
          <img className="vector_A_footer" src={vector_A_footer} alt="" />
          <img className="vector_B_footer" src={vector_B_footer} alt="" />
          <img className="vector_C_footer" src={vector_C_footer} alt="" />
        </div>
        <footer className="footer">
          <section className="logo">
            {/* scissors logo in the footer */}
            <div className="footer_logo_scissors">
              <img
                className="actual_scissor_logo"
                src={actual_scissor_logo}
                alt=""
              />
              <img
                className="actual_scissor_line"
                src={actual_scissor_line}
                alt=""
              />
              <div className="footer_scissors_word">
                <p>SCISSORS</p>
              </div>
            </div>
            <div className="social_media_logo">
              <img src={footer_img} alt="" />
              <img src={footer_img_2} alt="" />
              <img src={footer_img_3} alt="" />
              <img src={footer_img_4} alt="" />
            </div>
          </section>
          <section className="sub_footer">
            <div>
              <h3 className="why_head_footer">Why Scissors?</h3>
              <p>
                Scissor 101
                <br />
                Integrations &amp; API <br />
                Pricing
              </p>
            </div>
            <div>
              <h3 className="resources_head_footer">Resources</h3>
              <p>
                Blog <br />
                Resource Library <br />
                Developers <br />
                App Connectors <br />
                Support <br />
                Trust Center <br />
                Browser Extension <br />
                Mobile App
              </p>
            </div>
          </section>
          <section className="sub_footer_two">
            <div>
              <h3 className="solution_head_footer">Solutions</h3>
              <p>
                Social Media <br />
                Digital Marketing <br />
                Customer Service <br />
                For Developers
              </p>
            </div>
            <div>
              <h3 className="features_head_footer">Features</h3>
              <p>
                Branded Links <br />
                Mobile Links <br />
                Campaign <br />
                Management &amp; <br />
                Analytics <br />
                QR Code generation
              </p>
            </div>
          </section>
          <section className="sub_footer_three">
            <div>
              <h3 className="products_head_footer">Products</h3>
              <p>
                Link Management <br />
                QR Codes <br />
                Link-in-bio
              </p>
            </div>
            <div>
              <h3 className="legal_head_footer">Legal</h3>
              <p>
                Privacy Policy <br />
                Cookie Policy <br />
                Terms of Service <br />
                Acceptable Use Policy <br />
                Code of Conduct
              </p>
            </div>
          </section>
          <section className="sub_footer_four">
            <h3 className="company_head_footer">Company</h3>
            <p>
              About Scissor <br />
              Careers <br />
              Partners <br />
              Press <br />
              <Link to="Contact">
                Contact <br />
              </Link>
              Reviews
            </p>
          </section>
        </footer>
        {/* the footer section ends here */}
        {/* the terms line footer */}
        <section className="Footer_terms">
          <div>
            <p>Term of Service</p>
          </div>
          <div>
            <img className="line_footer" src={line_footer} alt="" />
          </div>
          <div>
            <p>Security</p>
          </div>
          <div>
            <img className="line_footer" src={line_footer} alt="" />
          </div>
          <div className="c_scissors">
            <img className="c_img" src={c_img} alt="" />
            <p>Scissor 2023</p>
          </div>
        </section>
        <div className="footer_vector_two">
          <img className="vector_D_footer" src={vector_D_footer} alt="" />
          <img className="vector_E_footer" src={vector_E_footer} alt="" />
          <img className="vector_F_footer" src={vector_F_footer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
