import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

export default function StudentCard({ student }) {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.items);
  const isFav = favorites.some((f) => f.id === student.id);

  const toggleFav = () => {
    if (isFav) dispatch(removeFavorite(student.id));
    else dispatch(addFavorite(student));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center space-x-4">
        <img
          src={student.image || `https://i.pravatar.cc/80?u=${student.id}`}
          className="w-16 h-16 rounded-full shadow-inner"
        />
        <div>
          <h3 className="text-lg font-semibold dark:text-white">
            {student.firstName} {student.lastName}
          </h3>
          <p className="text-gray-500 dark:text-gray-300">{student.email}</p>
          <p className="text-gray-500 dark:text-gray-300">{student.address?.city}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/students/${student.id}`}
          className="px-3 py-2 bg-blue-600 text-white rounded-md"
        >
          View
        </Link>

        <button
  onClick={toggleFav}
  className={`px-3 py-2 rounded-md text-white transition 
    ${isFav ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}`}
>
  {isFav ? "Remove Favorite" : "Add Favorite"}
</button>

      </div>
    </div>
  );
}
