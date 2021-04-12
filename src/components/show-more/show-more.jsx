import React from "react";
import PropTypes from "prop-types";

const ShowMore = ({handlerClickButton}) => {

  return (
    <button className="catalog__button" type="button" onClick={handlerClickButton}>Show more</button>
  );
};

export default ShowMore;

ShowMore.propTypes = {
  handlerClickButton: PropTypes.func.isRequired,
};
