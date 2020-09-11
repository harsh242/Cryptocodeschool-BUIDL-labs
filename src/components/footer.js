import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="text-gray-500 bg-gray-900 body-font flex ">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a
              className="flex title-font font-medium items-center md:justify-start justify-center text-white"
              href="https://cryptocodeschool.in/tezos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
              <span className="ml-3 text-xl">
                Chapter 3: Introduction to SmartPy
              </span>
            </a>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                className="text-gray-600"
                href="https://cryptocodeschool.in/tezos"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </a>
              <a
                className="ml-3 text-gray-600"
                href="https://cryptocodeschool.in/tezos"
              >
                <span className="ml-3 text-l text-white">Prev</span>
              </a>
              <a
                className="ml-3 text-gray-600"
                href="https://cryptocodeschool.in/tezos"
              >
                <span className="ml-3 text-l text-white">3/15</span>
              </a>
              <a
                className="ml-3 text-gray-600"
                href="https://cryptocodeschool.in/tezos"
              >
                <span className="ml-3 text-l text-white">Next</span>
              </a>
              <a
                className="text-gray-600"
                href="https://cryptocodeschool.in/tezos"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
