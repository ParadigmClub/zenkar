import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import AnimationOnScroll from "react-animate-on-scroll";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const cachedNews = localStorage.getItem("news");
      const cachedTimestamp = localStorage.getItem("newsTimestamp");
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

      if (
        cachedNews &&
        cachedTimestamp &&
        Date.now() - cachedTimestamp < oneDay
      ) {
        setNews(JSON.parse(cachedNews));
      } else {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/everything?q=finance&pageSize=20&apiKey=58f0ec31b5f04d258567ff2a43e3662b`
          );
          setNews(response.data.articles);
          localStorage.setItem("news", JSON.stringify(response.data.articles));
          localStorage.setItem("newsTimestamp", Date.now().toString());
          console.log("Fetched news:", response.data.articles);
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="relative h-screen bg-base-100">
      <div className="absolute top-0 left-0 z-10 w-full rounded-t-lg bg-primary h-1/4">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="mt-2 avatar">
            <div className="w-32 h-32 rounded-full">
              <img
                src={
                  `https://avatar.iran.liara.run/username?username=` +
                  localStorage.getItem("username")
                }
                alt="Profile Pic"
              />
            </div>
          </div>
          <h2 className="mt-1 text-2xl font-black text-slate-50">
            Welcome, {localStorage.getItem("username")}
          </h2>
        </div>
      </div>
      <div className="absolute left-0 w-full overflow-y-auto top-1/4 h-3/4 snap-y snap-mandatory">
        <AnimationOnScroll animateIn="lightSpeedInLeft" animatePreScroll={true}>
          <h1 className="p-4 ml-2 text-2xl font-bold underline text-slate-200">
            Latest Finance Headlines:
          </h1>
        </AnimationOnScroll>

        <div className="grid grid-cols-1 gap-4 p-4 mb-20">
          {news.map((article, index) => {
            const card = (
              <Card
                key={index}
                className="snap-start"
                issue={article.title}
                date={new Date(article.publishedAt).toLocaleDateString()}
                status={article.source.name}
                img={article.urlToImage}
                link={article.url}
              />
            );

            return index < 2 ? (
              <AnimationOnScroll animateIn="fadeInUp" key={index}>
                {card}
              </AnimationOnScroll>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
