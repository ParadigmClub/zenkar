import React from "react";
import { Browser } from "@capacitor/browser";

function card(props) {
  const openLink = async (url) => {
    await Browser.open({ url });
  };
  return (
    <div>
      <div className="relative block p-4 overflow-hidden bg-gray-900 border border-gray-100 rounded-lg sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <img
          src={props.img}
          alt="John Doe"
          className="mx-auto border-4 rounded w-28"
        />
        <div className="mx-auto mt-4 text-center">
          <p
            onClick={() => openLink(props.link)}
            className="text-lg text-gray-300 text-pretty"
          >
            {props.issue}
          </p>
        </div>

        <dl className="flex gap-4 mt-6 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-base font-bold text-gray-600">Report Date</dt>
            <dd className="text-xs text-gray-400">{props.date}</dd>
          </div>
        </dl>

        <div className="absolute text-right bottom-4 right-4">
          <dd className="text-xs text-gray-400">{props.status}</dd>

          <dt className="text-base font-bold text-gray-600">Report By</dt>
        </div>
      </div>
    </div>
  );
}

export default card;
