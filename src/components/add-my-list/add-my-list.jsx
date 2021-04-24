import React from "react";
import PropTypes from "prop-types";

const AddMyList = ({isFavorite, handlePostFavorite}) => {

  function renderButton(isFav) {
    if (isFav) {
      return (
        <svg viewBox="0 0  18 14" width="18" height="14">
          <use xlinkHref="#in-list"/>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"/>
      </svg>
    );
  }

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handlePostFavorite}>
      {renderButton(isFavorite)}
      <span>My list</span>
    </button>
  );
};

export default AddMyList;

AddMyList.propTypes = {
  isFavorite: PropTypes.bool,
  handlePostFavorite: PropTypes.func,
};
