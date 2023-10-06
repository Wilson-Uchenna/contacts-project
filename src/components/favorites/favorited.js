import React, { useState } from "react";
import Favorites from "./favorites";
import './favroites.css'

const Favorited = ({ contacts }) => {
  const displayedFavorites = contacts.slice(0, 4);
  const [showAllFavorites, setShowAllFavorites] = useState(false);

  const toggleShowAllFavorites = () => {
    setShowAllFavorites(!showAllFavorites);
  };

  const ContainerClass = contacts.length > 4 ? "flex-container" : "left-align"

  return (
    <div className="">
        <div className={`ma1 ${ContainerClass}`}>
        <h4 className="ma2">⭐️ Favorites</h4>
      {contacts.length > 4 && !showAllFavorites && (
        <p
          className="link dim br2 ph3"
          onClick={toggleShowAllFavorites}
        >
          See All Favorites
        </p>
      )}
        </div>
      <div className="flex flex-wrap ma1">
        {showAllFavorites
          ? contacts.map((user, i) => (
              <div className="w-50 pa2" key={i}>
                <Favorites
                  key={i}
                  id={contacts[i].id}
                  name={contacts[i].name}
                />
              </div>
            ))
          : displayedFavorites.map((user, i) => (
              <div className="w-50 pa2" key={i}>
                <Favorites
                  key={i}
                  id={displayedFavorites[i].id}
                  name={displayedFavorites[i].name}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Favorited;
