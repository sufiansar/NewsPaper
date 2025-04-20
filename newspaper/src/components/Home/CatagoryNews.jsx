import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CatagoryNews = () => {
  const data = useLoaderData();
  console.log(data?.data);
  return (
    <div className="text-black">
      <h1 className="text-black font-semibold ">Dragon News Home</h1>
      <div>
        {data.data.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CatagoryNews;
