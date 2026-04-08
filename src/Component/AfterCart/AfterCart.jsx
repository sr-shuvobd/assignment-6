import React from "react";
import user from "../../assets/user.png";
import packag from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
import { FaFacebookSquare, FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
const AfterCart = () => {
  return (
    <div>
      {/* get section  */}
      <div className="m-20">
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-4xl font-bold">Get Started in 3 Steps</h1>
          <p className="text-gray-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        {/* card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* card 1 */}
          <div className="shadow rounded-2xl p-5 space-y-9">
            <div className="flex justify-end text-center">
              <p className="p-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-2xl">
                1
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center space-y-3">
              <img
                className="p-5 rounded-full bg-purple-200"
                src={user}
                alt=""
              />
              <h2 className="font-bold text-2xl">Create Account</h2>
              <p className="text-gray-600">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="shadow rounded-2xl p-5 space-y-9 ">
            <div className="flex justify-end text-center">
              <p className="p-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-2xl">
                2
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center space-y-3">
              <img
                className="p-5 rounded-full bg-purple-200"
                src={packag}
                alt=""
              />
              <h2 className="font-bold text-2xl">Choose Products</h2>
              <p className="text-gray-600">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="shadow rounded-2xl p-5 space-y-9">
            <div className="flex justify-end text-center">
              <p className="p-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-2xl">
                3
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center space-y-3">
              <img
                className="p-5 rounded-full bg-purple-200"
                src={rocket}
                alt=""
              />
              <h2 className="font-bold text-2xl">Start Creating</h2>
              <p className="text-gray-600">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div>
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-gray-600">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        {/* card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10 items-stretch">
          {/* card 1 */}
          <div className="card h-full flex flex-col bg-base-100 shadow-sm">
            <div className="card-body flex flex-col justify-between h-full">
              <div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Starter</h2>
                  <p>Perfect for getting started</p>
                </div>

                <h2 className="mt-5 text-gray-600">
                  <span className="text-3xl font-bold text-black">$0</span>
                  /month
                </h2>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>✔ Access to 10 free tools</li>
                  <li>✔ Basic templates</li>
                  <li>✔ Community support</li>
                  <li>✔ 1 project per month</li>
                </ul>
              </div>

              <button className="btn rounded-3xl w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                Get Started Free
              </button>
            </div>
          </div>

          {/* card 2 */}
          <div className="card h-full flex flex-col bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-sm">
            <div className="card-body flex flex-col justify-between h-full">
              <div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Pro</h2>
                  <p>Best for professionals</p>
                </div>

                <h2 className="mt-5">
                  <span className="text-3xl font-bold">$29</span>/month
                </h2>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>✔ Access to all premium tools</li>
                  <li>✔ Unlimited templates</li>
                  <li>✔ Priority support</li>
                  <li>✔ Unlimited projects</li>
                  <li>✔ Cloud sync</li>
                  <li>✔ Advanced analytics</li>
                </ul>
              </div>

              <button className="btn rounded-3xl w-full text-[#9514FA] bg-white">
                Start Pro Trial
              </button>
            </div>
          </div>

          {/* card 3 */}
          <div className="card h-full flex flex-col bg-base-100 shadow-sm">
            <div className="card-body flex flex-col justify-between h-full">
              <div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Enterprise</h2>
                  <p>For teams and businesses</p>
                </div>

                <h2 className="mt-5 text-gray-600">
                  <span className="text-3xl font-bold text-black">$99</span>
                  /month
                </h2>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>✔ Everything in Pro</li>
                  <li>✔ Team collaboration</li>
                  <li>✔ Dedicated support</li>
                  <li>✔ SLA guarantee</li>
                  <li>✔ Custom branding</li>
                </ul>
              </div>

              <button className="btn rounded-3xl w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mt-20 bg-[#101727] flex flex-col justify-center items-center container())">
        <footer className="footer sm:footer-horizontal text-white text-base-content p-10">
            <div>
                <h1 className="text-3xl">DigiTool</h1>
                <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
            </div>
          <nav>
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press</a>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="flex">
                <FaInstagramSquare className="text-5xl" />
                <FaFacebookSquare className="text-5xl"/>
                <FaSquareYoutube className="text-5xl" />
            </div>
          </nav>
         <div>
         </div>
        </footer>
         
        <div className="text-gray-500 md:gap-56 flex flex-col md:flex-row justify-around border-t-1 p-10 border-gray-500">
            <h1>© 2026 Digitools. All rights reserved.</h1>
            <ul className="flex gap-5">
                <li>Privacy Policy</li>
                <li>Terms of Service </li>
                <li>Cookies</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default AfterCart;
