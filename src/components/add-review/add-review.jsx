import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {commentPost} from "../../store/api-actions";
import {getErrorSendReview, getIsSendReview} from "../../store/selectors";
import {setIsSendReview} from "../../store/action";
import Header from "../header/header";
import {Link} from "react-router-dom";
import withAddReview from "../../hocs/withAddReview";

const AddReview = ({film, handleSubmitComment, handleChangeRating, isSendReview, handleChangeReview, review, isDisabled}) => {
  const {backgroundImage, id, name, posterImage} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmitComment}>
          <div className="rating">
            <div className="rating__stars">
              {
                Array.from(`12345`).map((item) => {
                  return (
                    <Fragment key={item}>
                      <input onChange={handleChangeRating} className="rating__input" id={`star-${item}`} type="radio" name="rating" value={`${item}`} disabled={isSendReview}/>
                      <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
                    </Fragment>
                  );
                })
              }

            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onChange={handleChangeReview}
              value={review}
              className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"
              disabled={isSendReview}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isDisabled || isSendReview}>Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};


const mapStateToProps = (state) => ({
  isSendReview: getIsSendReview(state),
  error: getErrorSendReview(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitComment(filmId, data) {
    dispatch(commentPost(filmId, data));
  },
  onSetIsSendReview(bool) {
    dispatch(setIsSendReview(bool));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(withAddReview(AddReview));

AddReview.propTypes = {
  film: PropTypes.object.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
  filmId: PropTypes.string.isRequired,
  isSendReview: PropTypes.bool.isRequired,
  error: PropTypes.number,
  onSetIsSendReview: PropTypes.func.isRequired,
};
