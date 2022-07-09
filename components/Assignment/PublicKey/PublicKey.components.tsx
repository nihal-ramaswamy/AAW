import React, { ReactPropTypes, useState } from "react";

interface IProps {
  nextStep(): any;
}

const PublicKey = (props: IProps) => {
  const [publicKey, setPublicKey] = useState("");

  const submitHandler = () => {
    localStorage.setItem("User-Key", publicKey);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("Public Key");
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={() => submitHandler()}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Public Key:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="publicKey"
            type="text"
            placeholder="Enter public key here"
            value={publicKey}
            onChange={(e) => setPublicKey(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit key
          </button>
        </div>
      </form>
      <div className=" flex items-center justify-center">
        <button
          onClick={copyToClipboard}
          className="m-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Copy Our Public Key
        </button>
        <button 
          className="m-auto bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => props.nextStep()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PublicKey;
