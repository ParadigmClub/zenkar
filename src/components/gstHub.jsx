import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import { Browser } from "@capacitor/browser";

const openLink = async (url) => {
  await Browser.open({ url });
};

function GstHub() {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-white bg-base-100 min-h-screen-">
      <h1 className="mb-8 text-4xl font-bold underline">
        GST Registration Hub
      </h1>

      <div className="w-full max-w-3xl p-6 mb-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">Common FAQs</h2>

        <ul className="list-disc list-inside">
          <AnimationOnScroll animateIn="fadeInLeft">
            <li className="mb-2">
              <strong>What is GST?</strong>

              <p>
                GST stands for Goods and Services Tax, a comprehensive tax
                levied on the supply of goods and services.
              </p>
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInLeft">
            <li className="mb-2">
              <strong>Who needs to register for GST?</strong>

              <p>
                Businesses with an annual turnover exceeding the threshold limit
                are required to register for GST.
              </p>
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInLeft">
            <li className="mb-2">
              <strong>How to register for GST?</strong>

              <p>
                You can register for GST online through the official GST portal.
              </p>
            </li>
          </AnimationOnScroll>
        </ul>
      </div>

      <div className="w-full max-w-3xl p-6 mb-20 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">Register:</h2>
        <ul className="list-disc list-inside">
          <AnimationOnScroll animateIn="fadeInUp" offset={75}>
            <li className="mb-2">
              <a
                href="#"
                onClick={() =>
                  openLink(
                    "https://services.gst.gov.in/services/quicklinks/registration"
                  )
                }
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Start GST Registration
              </a>
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp" offset={75}>
            <li className="mb-2">
              <a
                href="#"
                onClick={() => openLink("https://www.gst.gov.in/docadvisor/")}
                className="text-blue-400 hover:underline"
              >
                Documents Required
              </a>
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp" offset={75}>
            <li className="mb-2">
              <a
                href="#"
                onClick={() =>
                  openLink("https://services.gst.gov.in/services/arnstatus")
                }
                className="text-blue-400 hover:underline"
              >
                Check Application Status
              </a>
            </li>
          </AnimationOnScroll>
        </ul>
      </div>
    </div>
  );
}

export default GstHub;
