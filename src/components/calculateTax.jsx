import React, { useState, useEffect } from "react";
import calculateTax from "../taxCalc";
import AnimationOnScroll from "react-animate-on-scroll";
import { Browser } from "@capacitor/browser";

function CalculateTax() {
  const [step, setStep] = useState(1);
  const [netSalary, setNetSalary] = useState("Eg: 5000000");
  const [tax, setTax] = useState(null);
  const [tax2, setTax2] = useState(null);

  const [deductions, setDeductions] = useState(null);
  const [additionalInfo1, setAdditionalInfo1] = useState("");
  const [additionalInfo2, setAdditionalInfo2] = useState("");
  const [additionalInfo3, setAdditionalInfo3] = useState("");
  const [additionalInfo4, setAdditionalInfo4] = useState("");
  const [additionalInfo5, setAdditionalInfo5] = useState("");
  const [additionalInfo6, setAdditionalInfo6] = useState("");
  const [additionalInfo7, setAdditionalInfo7] = useState("");
  const [additionalInfo8, setAdditionalInfo8] = useState("");
  const [additionalInfo9, setAdditionalInfo9] = useState("");
  const [additionalInfo10, setAdditionalInfo10] = useState("");
  const [additionalInfo11, setAdditionalInfo11] = useState("");
  const [additionalInfo12, setAdditionalInfo12] = useState("");
  const [qualifiedSalary, setQualifiedSalary] = useState(0);
  const [savings, setSavings] = useState(0);

  const handleNext = () => {
    if (step === 1 && netSalary) {
      const salary = parseFloat(netSalary);
      if (salary <= 0 || isNaN(salary)) {
        alert("Please enter a valid salary");
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleCalculateTax = () => {
    const additionalInfoSum =
      parseFloat(additionalInfo6) +
      parseFloat(additionalInfo7) +
      parseFloat(additionalInfo8);

    console.log(additionalInfoSum, "lookhere");
    const year = "2023-24";
    const year2 = "2024-25";
    let finalDeductions =
      parseFloat(additionalInfo9) +
      parseFloat(additionalInfo10) +
      parseFloat(additionalInfo11) +
      parseFloat(additionalInfo12);

    if (finalDeductions > 200000) {
      finalDeductions = 200000;
      console.log("Deductions capped at 200000");
    }

    // Pass the information to the calculateTax framework
    const result = calculateTax(
      netSalary,
      additionalInfo2,
      additionalInfo1,
      additionalInfo3,
      additionalInfo4,
      additionalInfo5,
      additionalInfoSum,
      year,
      finalDeductions
    );
    const result2 = calculateTax(
      netSalary,
      additionalInfo2,
      additionalInfo1,
      additionalInfo3,
      additionalInfo4,
      additionalInfo5,
      additionalInfoSum,
      year2
    );

    // Set the tax and deductions based on the result
    if (result[0] === false) {
      console.log("You are not eligible to pay any income tax");
      setTax("0");
      setTax2("0");
      setDeductions("0");
      setQualifiedSalary(result[1]);
      setSavings("0");
      return alert("You are not eligible to pay any income tax");
    }
    console.log(result[1]);
    const savi = result[0] - result2[0];
    setTax(result[0]);
    setTax2(result2[0]);
    setQualifiedSalary(result[1]);
    setSavings(savi);
    setDeductions(finalDeductions);
  };

  useEffect(() => {
    if (step === 9) {
      handleCalculateTax();
    }
  }, [step]);

  const openLink = async (url) => {
    await Browser.open({ url });
  };

  return (
    <div className="">
      <h3 className="mt-5 mb-16 text-center underline">Tax Calculator</h3>
      <AnimationOnScroll animateIn="fadeInLeft">
        <div className="relative flex items-center justify-center mb-20 text-white bg-base-100">
          <div className="items-center p-8 mx-2 text-center bg-gray-800 rounded-lg shadow-lg">
            {step === 1 && (
              <div className="mb-4">
                <label className="block mb-2 text-lg font-semibold">
                  What is your salary:
                </label>
                <input
                  type="number"
                  placeholder="Eg: 5000000"
                  onChange={(e) => setNetSalary(e.target.value)}
                  className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            {step === 2 && (
              <AnimationOnScroll animateIn="fadeIn">
                <div className="mb-4 ">
                  <label className="block mb-2 text-lg font-semibold">
                    Have you received any allowances under u/s 10:
                  </label>
                  <input
                    type="number"
                    placeholder="Leave Empty if None"
                    value={additionalInfo1}
                    onChange={(e) => setAdditionalInfo1(e.target.value)}
                    className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </AnimationOnScroll>
            )}
            {step === 3 && (
              <AnimationOnScroll animateIn="fadeIn">
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-semibold">
                    How much relief under section 89 have you received:
                  </label>
                  <input
                    type="number"
                    placeholder="Leave Empty if None"
                    value={additionalInfo2}
                    onChange={(e) => setAdditionalInfo2(e.target.value)}
                    className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </AnimationOnScroll>
            )}
            {step === 4 && (
              <AnimationOnScroll animateIn="fadeIn">
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-semibold">
                    Have you claimed any deductions under u/s 16:
                  </label>
                  <input
                    type="number"
                    placeholder="Leave Empty if None"
                    value={additionalInfo3}
                    onChange={(e) => setAdditionalInfo3(e.target.value)}
                    className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </AnimationOnScroll>
            )}
            {step === 5 && (
              <AnimationOnScroll animateIn="fadeIn">
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-semibold">
                    If you own a house property, enter the rent received:
                  </label>
                  <input
                    type="number"
                    placeholder="Leave Empty if None"
                    value={additionalInfo4}
                    onChange={(e) => setAdditionalInfo4(e.target.value)}
                    className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </AnimationOnScroll>
            )}
            {step === 6 && (
              <AnimationOnScroll animateIn="fadeIn">
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-semibold">
                    If you own a house property, enter the interest paid on home
                    loan:
                  </label>
                  <input
                    type="number"
                    placeholder="Leave Empty if None"
                    value={additionalInfo5}
                    onChange={(e) => setAdditionalInfo5(e.target.value)}
                    className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </AnimationOnScroll>
            )}
            {step === 7 && (
              <AnimationOnScroll animateIn="fadeIn">
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-semibold">
                    Please provide details of any other sources of income:
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setAdditionalInfo6(e.target.value)}
                    className="w-full p-2 mb-4 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Interest from Income Tax Refund "
                  />
                  <input
                    type="number"
                    onChange={(e) => setAdditionalInfo7(e.target.value)}
                    className="w-full p-2 mb-4 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Interest from Saving Bank Account"
                  />
                  <input
                    type="number"
                    onChange={(e) => setAdditionalInfo8(e.target.value)}
                    className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Interest from Deposit (Bank/Post Office/Cooperative Society)"
                  />
                </div>
              </AnimationOnScroll>
            )}
            {step === 8 && (
              <AnimationOnScroll animateIn="fadeIn">
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-semibold">
                    Please provide the deductions claimed u/s 80:
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setAdditionalInfo9(e.target.value)}
                    className="w-full p-2 mb-4 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Deductions under 80C - Life Insurance, PPF, EPF, etc."
                  />
                  <input
                    type="number"
                    onChange={(e) => setAdditionalInfo10(e.target.value)}
                    className="w-full p-2 mb-4 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Deductions under 80D - Medical Insurance"
                  />
                  <input
                    type="number"
                    onChange={(e) => setAdditionalInfo11(e.target.value)}
                    className="w-full p-2 mb-4 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Deductions under 80G - Donations"
                  />
                  <input
                    type="number"
                    onChange={(e) => setAdditionalInfo12(e.target.value)}
                    className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contributions to National Pension Scheme (NPS)"
                  />
                </div>
              </AnimationOnScroll>
            )}
            {step === 9 && (
              <>
                <AnimationOnScroll animateIn="zoomIn">
                  <div className="mb-4">
                    <label className="block mt-1 mb-2 text-lg font-semibold">
                      Taxable Salary:
                    </label>
                    <input
                      type="text"
                      value={`₹ ${qualifiedSalary}`}
                      readOnly
                      className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="block mt-1 mb-2 text-lg font-semibold">
                      Old Regime Tax:
                    </label>
                    <input
                      type="text"
                      value={`₹ ${tax}`}
                      readOnly
                      className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="block mt-1 mb-2 text-lg font-semibold">
                      New Regime Tax:
                    </label>
                    <input
                      type="text"
                      value={`₹ ${tax2}`}
                      readOnly
                      className="w-full p-2 text-lg text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-1">
                    <span className="text-lg font-semibold">
                      <p className="text-base text-slate-400">Deductions:</p> ₹{" "}
                      {deductions}
                    </span>
                    <button
                      onClick={() =>
                        openLink("https://cleartax.in/s/80c-80-deductions")
                      }
                      className="ml-2 text-lg text-blue-400"
                    >
                      ?
                    </button>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() =>
                        openLink(
                          "https://m.economictimes.com/wealth/tax/how-to-save-tax-6-easy-income-tax-saving-tips/articleshow/108513591.cms"
                        )
                      }
                      className="block mb-2 text-lg text-blue-400"
                    >
                      How to save on taxes
                    </button>
                    <button
                      onClick={() =>
                        openLink(
                          "https://www.hdfclife.com/insurance-knowledge-centre/tax-saving-insurance/tax-saving-investments-2024"
                        )
                      }
                      className="block mb-2 text-lg text-blue-400"
                    >
                      Tax-saving investments
                    </button>
                    <button
                      onClick={() =>
                        openLink("https://cleartax.in/s/80c-80-deductions")
                      }
                      className="block mb-2 text-lg text-blue-400"
                    >
                      Deductions you can claim
                    </button>
                  </div>
                </AnimationOnScroll>
              </>
            )}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {step > 1 && (
                <button
                  onClick={handlePrevious}
                  className={`w-full text-lg font-semibold text-white transition delay-75 rounded bg-zinc-500 btn hover:shadow-xl hover:scale-95 ${
                    step === 9 ? "col-span-2" : ""
                  }`}
                >
                  Back
                </button>
              )}
              {step < 9 && (
                <AnimationOnScroll animateIn="fadeInDown">
                  <button
                    onClick={handleNext}
                    className={`w-full text-lg font-semibold text-white transition delay-75 bg-green-500 rounded btn btn-success hover:shadow-xl hover:scale-95 ${
                      step === 1 ? "col-span-2" : ""
                    }`}
                  >
                    Next
                  </button>
                </AnimationOnScroll>
              )}
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default CalculateTax;
