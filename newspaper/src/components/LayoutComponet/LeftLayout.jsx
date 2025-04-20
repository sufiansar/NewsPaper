import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../../Provider/AuthProvider";

const LeftLayout = () => {
  const [leftCatagories, setLeftcatagories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setLeftcatagories(data.data.news_category));
  }, []);
  return (
    <div>
      <h1 className="text-black">All Caterogy </h1>

      <div className="flex flex-col gap-2 mt-3 ">
        {leftCatagories.map((catagorie) => (
          <NavLink
            to={`/catagorie/${catagorie.category_id}`}
            className="btn text-black bg-white"
            key={catagorie.category_id}
          >
            {catagorie.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftLayout;
