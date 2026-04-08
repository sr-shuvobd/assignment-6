import React from "react";
import user from "../../assets/user.png";
import packag from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
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
          <div className="shadow rounded-2xl p-5 space-y-9">
            <div className="flex justify-end text-center">
                <p className="p-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-2xl">2</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center space-y-3">
                <img className="p-5 rounded-full bg-purple-200" src={packag} alt="" />
                <h2 className="font-bold text-2xl">Choose Products</h2>
                <p className="text-gray-600">Browse our catalog and select the tools that fit your needs.</p>
            </div>
        </div>
        {/* card 3 */}
        <div className="shadow rounded-2xl p-5 space-y-9">
            <div className="flex justify-end text-center">
                <p className="p-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-2xl">3</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center space-y-3">
                <img className="p-5 rounded-full bg-purple-200" src={rocket} alt="" />
                <h2 className="font-bold text-2xl">Start Creating</h2>
                <p className="text-gray-600">Download and start using your premium tools immediately.</p>
            </div>
        </div>
        </div>
      </div>

    </div>
  );
};

export default AfterCart;
