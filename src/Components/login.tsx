// @ts-nocheck

import "../Styles/main.css";
import "../Styles/login.css";
import React, { useState, FormEvent } from "react";
import { auth, signInWithGoogle } from "../firebase";
import { signInWithApple } from "../firebase";

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
import AppleImg from "../Styles/assets/icons/appleLogo.png";
import GoogleImg from "../Styles/assets/icons/more icons/logo_googleg_48dp.png";
import PasswordImg from "../Styles/assets/icons/more icons/Vector (1).png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error:any) {
      console.error("Login error:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Google login error:", error.message);
    }
  };

  const handleAppleLogin = async () => {
    try {
      await signInWithApple();
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Apple login error:", error);
    }
  };
  return (
    <div>
      <main className="main">
        <form onSubmit={handleLogin}>
          <p className="login_name">Log in with:</p>
          <div className="google_and_apple">
            <button className="google" onClick={handleGoogleLogin}>
              {" "}
              <img className="google_img" alt="" src={GoogleImg} />{" "}
              <div> Google </div>{" "}
            </button>
            <button className="Apple">
              {" "}
              <img
                className="Apple_img"
                onClick={handleAppleLogin}
                alt=""
                src={AppleImg}
              />{" "}
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
              <input
                className="Email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="whole_password">
              <input
                className="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img className="See_password" alt="" src={PasswordImg} />
            </div>
            <div className="forget_password">Forgot your password?</div>
          </div>
          <button className="login_button" type="submit">
            Log in
          </button>
        </form>
        <div className="footer_question">
          Don't have an account?{" "}
          <Link to="/SignUp" className="Sign_up">
            Sign up
          </Link>
        </div>
        <div className="footer_paragraph">
          {" "}
          <p className="text_effect">
            By signing in with an account, you agree to Sciccor's
          </p>{" "}
          Terms of Service, Privacy Policy <b className="text_effect"> and</b>{" "}
          Acceptable Use Policy.
        </div>
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
};

export default LoginPage;
