import React, { useState } from "react";
import Editor, { DiffEditor } from "@monaco-editor/react";

export default function Center() {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <div>
      <div className="flex mb-4">
        <div className="w-1/2 body-font text-gray-500 ">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <h1 className="flex order-first lg:order-none  title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
              <span className="ml-3 text-2xl xl:block lg:hidden">
                Introduction to SmartPy
              </span>
            </h1>

            <h1 className="flex order-first lg:order-none  title-font font-medium items-center text-gray-600 lg:items-center lg:justify-center mb-4 md:mb-0">
              <span className="ml-3 text-l xl:block lg:hidden">
                Intro: <br />
                SmartPy is a high-level smart contracts library built to greatly
                ease the accessibility, understandability and probability of
                smart contracts that can be used to write and test smart
                contracts that are deployable on the Tezos blockchain. It uses
                the widely popular programming language Python to reduce the
                barrier of entry for smart contracts builders and empower a
                large crowd of potential developers of dApps and other smart
                contracts to contribute to the Tezos ecosystem.
              </span>
            </h1>
          </div>
        </div>
        <div className="w-1/2 bg-gray-500 container overflow-hidden">
          <div>
            <Editor
              height={`${showOutput ? `41vh` : `65vh`}`}
              language="python"
              theme="dark"
              value={"// start writing something😁\n"}
            />
          </div>
          {showOutput && (
            <div className="output h-40">
              <Editor
                height="100%"
                language="python"
                theme="dark"
                value={"// the output will be shown here😁\n"}
              />
            </div>
          )}
          <div>
            <div className="compile">
              <header className="text-gray-500 bg-gray-900 body-font h-32">
                <div className="container mx-auto flex flex-wrap p-5  items-end">
                  <button class="bg-black-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mr-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Answer
                  </button>
                  <button
                    onClick={() => setShowOutput(!showOutput)}
                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    Compile
                  </button>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
