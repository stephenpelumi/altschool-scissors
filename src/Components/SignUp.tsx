// @ts-ignore

import "../Styles/main.css";
import "../Styles/SignUp.css";
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import vector_B_footer from "../Styles/assets/icons/more_icons/apple.png";
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
import AppleImg from "../Styles/assets/icons/appleLogo.png";
import GoogleImg from "../Styles/assets/icons/more icons/logo_googleg_48dp.png";
import PasswordImg from "../Styles/assets/icons/more icons/Vector (1).png";
import { Link } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [ShowPassword, SetShowPassword] = useState(false);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    if (password !== retypePassword) {
      setError("Passwords don't match");
      return;
    }
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError("Please check password");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      window.location.href = "/dashboard";
    } catch (error: any) {
      console.error("Signup error:", error.message);
      setError(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordvisibility = () => {
    SetShowPassword(!ShowPassword);
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      window.location.href = "/login";
    } catch (error: any) {
      console.error("Sign up error:", error.message);
    }
  };
  return (
    <div>
      <main className="main">
        <form onSubmit={handleSignup}>
          <p className="SignUp_name">Sign up with:</p>
          <div className="google_and_apple">
            <button className="google">
              {" "}
              <img className="google_img" alt="" src={GoogleImg} />{" "}
              <div> Google </div>{" "}
            </button>
            <button className="Apple">
              {" "}
              <img className="Apple_img" alt="" src={AppleImg} />{" "}
              <div>Apple</div>
            </button>
          </div>

          <div className="Or_Axis">
            <div className="lineOne"></div>
            <div className="Or_word">Or</div>
            <div className="lineTwo"></div>
          </div>

          <div className="the_actual_login">
            <div className="Inputs">
              {error && <div className="error">{error}</div>}
              <input
                className="Username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="Inputs">
              <input
                className="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="whole_password">
              <input
                className="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                onClick={togglePasswordVisibility}
                className="See_password"
                alt=""
                src={PasswordImg}
              />
            </div>
            <div className="whole_password">
              <input
                className="RetypePassword"
                type={ShowPassword ? "text" : "password"}
                placeholder="Retype Password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
              <img
                onClick={togglePasswordvisibility}
                className="See_password"
                alt=""
                src={PasswordImg}
              />
            </div>
            <div className="Discription">
              6 or more characters, one number, one uppercase & one lower case.
            </div>
          </div>
          <button type="submit" className="SignUp_Button">
            Sign up with Email
          </button>
          <div className="footer_question">
            Already have an account?{" "}
            <Link to="/login" className="Log_In">
              Log In
            </Link>
          </div>
          <div className="footer_paragraph">
            {" "}
            <p className="text_effect">
              By signing up, you agree to Sciccor's
            </p>{" "}
            Terms of Service, Privacy Policy <b className="text_effect"> and</b>{" "}
            Acceptable Use Policy.
          </div>
        </form>
      </main>
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
              Contact <br />
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

export default SignUp;
