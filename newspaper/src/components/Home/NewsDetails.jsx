import { FaEye, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header/Header";
import RightLayout from "../LayoutComponet/RightLayout/RightLayout";

const NewsDetails = () => {
  const loadedData = useLoaderData();
  const news = loadedData?.data?.[0];

  if (!news) {
    return <div className="text-center py-20">Loading news details...</div>;
  }

  const {
    title,
    image_url,
    author,
    published_date,
    total_view,
    rating,
    details,
    others_info,
  } = news;

  return (
    <div className="container mx-auto">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <div className="bg-white min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-sm breadcrumbs mb-4 text-primary font-semibold">
                <ul>
                  <li>
                    <a href="#">Dragon News</a>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border">
                <figure>
                  <img
                    src={image_url}
                    alt={title}
                    className="w-full object-cover h-[200px] sm:h-[300px]"
                  />
                </figure>

                <div className="p-6">
                  <h1 className="text-2xl font-bold text-black leading-snug mb-3">
                    {title}
                  </h1>

                  <div className="flex flex-wrap items-center justify-between text-gray-500 text-sm mb-4 border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                          <img src={author?.img} alt="Author" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">
                          {author?.name}
                        </p>
                        <p className="text-xs">
                          {new Date(published_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center mt-3 sm:mt-0">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-orange-400" />
                        <span>
                          {rating?.number} ({rating?.badge})
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{total_view}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                    {details}
                  </p>

                  {(others_info?.is_todays_pick ||
                    others_info?.is_trending) && (
                    <div className="mt-6 space-x-2">
                      {others_info?.is_todays_pick && (
                        <span className="badge badge-success">
                          Today's Pick
                        </span>
                      )}
                      {others_info?.is_trending && (
                        <span className="badge badge-warning">Trending</span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <Link to={"/"} className="btn btn-error btn-sm text-white">
                  ➤ All news in this category
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <RightLayout />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
