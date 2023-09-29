import React from "react";
import NewsCard from "./NewsCard";

// dummy news
const news = [
  {
    title:
      "Mela shona",
    description:
      "Uno baby hai mela shona, uno shines so much I love you my shiney uno baby wuvu",
  },
  {
    title:
      "Mela baby",
    description:
      "Aap ho mela chotu sa pyalu sa baby jaan I love you mostestest my cutestestest",
  },
  {
    title:
      "Mela nonie",
    description:
      "Mela nonie mela booobooo mela sabse special sabse precious baby jaanu I love you mostestetsest",
  },
];

const News = () => {
  return (
    <section className='mx-auto w-[min(calc(90%-2rem),1140px)] my-20 ' >
      <div className="  ">
        <div className="content flex flex-col relative gap-8">
          <h2 className="about-head text-left text-[#199199199] font-bold text-4xl">
            Mela Wuvu
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            {news.map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;






