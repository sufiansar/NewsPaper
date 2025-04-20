import { useState } from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    author,
    published_date,
    total_view,
    rating,
    details,
    others_info,
  } = news;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="card bg-white shadow-md hover:shadow-lg transition-all duration-300 mb-6">
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full">
                <img src={author.img} alt="Author" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm">{author.name}</p>
              <p className="text-xs text-gray-500">
                {new Date(published_date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <button className="btn btn-sm btn-ghost">
            <FiShare2 className="text-xl" />
          </button>
        </div>

        {(others_info?.is_todays_pick || others_info?.is_trending) && (
          <div className="px-4 pt-2">
            {others_info.is_todays_pick && (
              <span className="badge badge-success mr-2">Today's Pick</span>
            )}
            {others_info.is_trending && (
              <span className="badge badge-warning">Trending</span>
            )}
          </div>
        )}

        <div className="px-4 pt-3">
          <h2 className="text-lg font-semibold leading-snug">{title}</h2>
        </div>

        <figure className="px-4 pt-3">
          <img
            src={thumbnail_url}
            alt="News"
            className="rounded-lg w-full h-56 object-cover"
          />
        </figure>
        <div className="px-4 py-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {details.length > 250 ? `${details.slice(0, 250)}...` : details}
          </p>
          {details.length > 250 && (
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-link text-primary px-0 text-sm mt-1"
            >
              Read More
            </button>
          )}
        </div>
        <div className="flex items-center justify-between px-4 pb-4 border-t pt-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaStar className="text-orange-400" />
            <span>
              {rating.number} ({rating.badge})
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
      {isOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle opacity-50">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {details}
            </p>
            <div className="modal-action">
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-sm btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default NewsCard;
