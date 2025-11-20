import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, clearFavorites } from "../redux/favoritesSlice";

export default function Favorites() {
  const favorites = useSelector((s) => s.favorites.items);
  const dispatch = useDispatch();

  if (!favorites.length)
    return <p className="p-6 text-center">No favorites currently</p>;

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Favorites</h2>
        <button
          className="px-3 py-2 border rounded-md"
          onClick={() => dispatch(clearFavorites())}
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {favorites.map((f) => (
          <div
            key={f.id}
            className="p-4 shadow bg-white dark:bg-gray-800 rounded-xl flex justify-between"
          >
            <div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                {f.firstName} {f.lastName}
              </h3>
              <p className="text-gray-400">{f.email}</p>
            </div>

            <button
  onClick={() => dispatch(removeFavorite(f.id))}
  className="px-3 py-1 rounded text-white bg-red-600 hover:bg-red-700"
>
  Remove
</button>

          </div>
        ))}
      </div>
    </div>
  );
}
