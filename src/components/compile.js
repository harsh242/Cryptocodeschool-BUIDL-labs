import React, { Component } from "react";

export default class Compile extends Component {
  render() {
    return (
      <div className="compile">
        <header className="text-gray-500 bg-gray-900 body-font h-32">
          <div className="container mx-auto flex flex-wrap p-5  items-end">
            <button class="bg-black-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mr-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Answer
            </button>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Compile
            </button>
          </div>
        </header>
      </div>
    );
  }
}
