import React, {Fragment, PureComponent} from 'react';
import PropTypes from "prop-types";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      review: ``,
      isDisabled: true,
    };
    this._handleChangeReview = this._handleChangeReview.bind(this);
    this._handleChangeRating = this._handleChangeRating.bind(this);
    this._validation = this._validation.bind(this);
  }

  _handleChangeReview(evt) {
    this.setState({review: evt.target.value}, this._validation);
  }

  _handleChangeRating(evt) {
    this.setState({rating: +evt.target.value}, this._validation);
  }

  _validation() {
    if (this.state.review.length >= 50 && this.state.review.length < 400 && this.state.rating !== 0) {
      this.setState({isDisabled: false});
    } else {
      this.setState({isDisabled: true});
    }
  }


  render() {
    const {film} = this.props;
    const {name, posterImage, backgroundImage} = film;
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                {
                  Array.from(`12345`).map((item) => {
                    return (
                      <Fragment key={item}>
                        <input onChange={this._handleChangeRating} className="rating__input" id={`star-${item}`} type="radio" name="rating" value={`${item}`}/>
                        <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
                      </Fragment>
                    );
                  })
                }

              </div>
            </div>

            <div className="add-review__text">
              <textarea
                onChange={this._handleChangeReview}
                value={this.state.review}
                className="add-review__textarea" name="review-text" id="review-text"
                placeholder="Review text"/>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={this.state.isDisabled}>Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}


export default AddReview;

AddReview.propTypes = {
  film: PropTypes.object.isRequired,
};