import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="text-gray-500 bg-gray-900 body-font ">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-1/3 flex-wrap items-center text-base md:ml-auto">
              <a
                href="https://cryptocodeschool.in/tezos"
                className="mr-5 hover:text-white"
              >
                Back
              </a>
            </nav>
            <h1 className="flex order-first lg:order-none lg:w-1/3 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
              <span className="ml-3 text-xl xl:block lg:hidden">
                Lesson: Introduction to SmartPy
              </span>
            </h1>
            <div className="lg:w-1/3 inline-flex lg:justify-end ml-5 lg:ml-0">
              <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                Ask Question
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
