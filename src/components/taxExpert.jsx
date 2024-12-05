import React, { useState } from "react";
import OpenAI from "openai";
import AnimationOnScroll from "react-animate-on-scroll";
const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

function TaxExpert() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: query,
        max_tokens: 150,
      });
      setResponse(result.choices[0].text);
    } catch (err) {
      setError(
        "The AI model is coming soon too help you with all your tax related needs. - ZenKAR Team"
      );
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white bg-base-100">
      <h1 className="mb-8 text-4xl font-bold underline">
        Talk to AI Expert on Taxes
      </h1>
      <AnimationOnScroll animateIn="fadeInUp">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl p-6 mb-8 bg-gray-800 rounded-lg shadow-lg"
        >
          <textarea
            value={query}
            onChange={handleQueryChange}
            className="w-full p-4 mb-4 bg-gray-900 rounded text-slate-200"
            placeholder="Ask your tax-related question here..."
            rows="4"
          />

          <button
            type="submit"
            className="w-full text-lg font-semibold text-white transition delay-75 bg-green-500 rounded btn btn-success hover:shadow-xl hover:scale-95"
          >
            Ask
          </button>
        </form>
      </AnimationOnScroll>
      {response && (
        <div className="w-full max-w-3xl p-6 mb-8 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
      {error && (
        <div className="w-full max-w-3xl p-6 mb-20 bg-red-800 rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default TaxExpert;
