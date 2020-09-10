import React, { Component } from "react";

export default class Center extends Component {
  render() {
    return (
      <div>
        <div className="flex mb-4">
          <div className="w-1/2 bg-gray-400 h-12">content</div>
          <div className="w-1/2 bg-gray-500 h-12">code</div>
        </div>
      </div>
    );
  }
}
