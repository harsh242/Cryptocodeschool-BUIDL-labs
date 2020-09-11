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
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Ask Question
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
