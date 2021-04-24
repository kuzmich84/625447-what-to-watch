import React from "react";
import AddMyList from "./add-my-list";
import PropTypes from "prop-types";

const AddMyListContainer = ({isFavorite, postFilmFavorite, filmId}) => {
  function status(isBool) {
    if (isBool) {
      return 0;
    }
    return 1;
  }

  function handlePostFavorite() {
    postFilmFavorite(filmId, status(isFavorite));
  }

  return <AddMyList isFavorite={isFavorite} handlePostFavorite={handlePostFavorite}/>;
};

export default AddMyListContainer;

AddMyListContainer.propTypes = {
  isFavorite: PropTypes.bool,
  postFilmFavorite: PropTypes.func,
  filmId: PropTypes.number,
};
