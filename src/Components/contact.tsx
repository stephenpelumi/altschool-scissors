import "../Styles/main.css";
import "../Styles/contact.css";
import React, { useState, useEffect } from "react";

import Hero_Logo from "../Styles/assets/icons/Vector-6.png";
import Hero_Line from "../Styles/assets/icons/Vector 2-3.png";
import hero_features from "../Styles/assets/icons/Vector copy 5.png";
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
import vector_A_footer from "../Styles/assets/icons/more icons/Vector-12.png";
import BackgroundOne from "../Styles/assets/images/unsplash_Evp4iNF3DHQ.png";
import BackgroundTwo from "../Styles/assets/images/Untitled-1 2.png";
import { Link } from "react-router-dom";

interface Country {
  alpha3Code: string;
  name: {
    common: string;
  };
}

const styles: React.CSSProperties = {
  background: `url(${BackgroundOne}), url(${BackgroundTwo})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const CountryDropdown: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const fetchCountries = async (): Promise<Country[]> => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data: Country[] = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching countries:", error);
      return [];
    }
  };

  const populateCountries = (countriesData: Country[]) => {
    countriesData.sort((a, b) => {
      const countryA = a.name.common.toUpperCase();
      const countryB = b.name.common.toUpperCase();
      if (countryA < countryB) return -1;
      if (countryA > countryB) return 1;
      return 0;
    });

    setCountries(countriesData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await fetchCountries();
      populateCountries(countriesData);
    };
    fetchData();
  }, []);

  return (
    <select id="countrySelect">
      <option value="" disabled selected>
        Please Select
      </option>
      {countries.map((country) => (
        <option key={country.alpha3Code} value={country.alpha3Code}>
          {country.name.common}
        </option>
      ))}
    </select>
  );
};

function Contact() {

  return (
    <div className="container" style={styles}>
      {/* <div className="backround">
          <img className="BackgroundTwo" src={BackgroundTwo}></img>
        </div> */}
      {/* The header that contains the navigation starts from here */}
      <header className="hero_section">
        {/* The logo */}
        <div className="scissors">
          <img className="Hero_Logo" src={Hero_Logo} alt="" />
          <img className="Hero_Line" src={Hero_Line} alt="" />
          <div>SCISSORS</div>
        </div>
        {/* Logo ends here */}
        {/* The nav bar starts here */}
        <nav className="all_navigator">
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
        </nav>
        {/* end of nav bar */}
      </header>
      {/* The header ends here */}
      <div className="Header">
        <p>Let's get in touch</p>
      </div>
      <main className="main_contact">
        <form className="form">
          <section className="first_section">
            <div className="first_name">
              <div className="fname">First Name*</div>
              <input
                type="text"
                className="input-field fname"
                name="fname"
                required
              />
            </div>
            <div className="last_name">
              <div className="lname">Last Name*</div>
              <input
                type="text"
                className="input-field lname"
                name="lname"
                required
              />
            </div>
          </section>

          <section className="second_section">
            <div className="Company">
              <div className="company_name">Company Name*</div>
              <input
                type="text"
                name="cname"
                className="input-field cname"
                required
              />
            </div>
          </section>

          <section className="third_section">
            <div className="Businessname">
              <div className="business_name">Business Email Address*</div>
              <input
                type="email"
                name="bname"
                className="input-field bname"
                required
              />
            </div>
          </section>

          <section className="fourth_section">
            <div className="phone_number">
              <div className="Phone">Phone Number*</div>
              <input type="number" className="input-field pname" required />
            </div>
          </section>

          <section className="fifth_section">
            <div className="job">
              <div className="job_title">Job Title*</div>
              <select
                name="job_level"
                className="select-field job_level"
                id="activity"
                required
              >
                <option value="" disabled selected hidden>
                  Please Select
                </option>
                <option value="Analyst">Analyst</option>
                <option value="Associate">Associate</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Manager">Manager</option>
                <option value="Director">Director</option>
                <option value="Vice President">Vice President</option>
                <option value="President">President</option>
                <option value="CEO">CEO</option>
              </select>
            </div>
          </section>

          <section className="sixth_section">
            <div className="Company_Size">
              <div className="company_size_option">Company Size*</div>
              <select
                name="company_size"
                className="select-field csize"
                required
              >
                <option value="" disabled selected hidden>
                  Please Select
                </option>
                <option value="1-99">1-100</option>
                <option value="100-1,000">100-1,000</option>
                <option value="1,001-10,000">1,000-10,000</option>
                <option value="10,000 and above">10,000 and above</option>
              </select>
            </div>
          </section>

          <section className="seventh_section">
            <div className="use_case">
              <div className="usecase"> Primary Use Case*</div>
              <select className="select-field usecase" required>
                <option value="" disabled selected hidden>
                  Please Select
                </option>
                <option value="Self">Self</option>
                <option value="For Business">For Business</option>
                <option value="For Education">For Education</option>
              </select>
            </div>
          </section>
          <section className="eight_section">
            <div className="countries">
              <div className="country_option">Select your Country*</div>
              <CountryDropdown />
            </div>
          </section>
          <p className="checklist">
            Scissor requires the contact information you provide in order to
            reach out to you regarding our products and services. You have the
            option to unsubscribe from these communications whenever you wish.
            To learn more about how to unsubscribe, our privacy practices, and
            our dedication to safeguarding your privacy, please refer to our
            Privacy Policy.
          </p>
          <button className="Submit">Submit</button>
        </form>
      </main>

      {/* footer */}
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
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default Contact;