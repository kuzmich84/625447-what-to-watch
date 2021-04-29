import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withAddReview = (Component) => {
  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: 5,
        review: ``,
        isDisabled: true,
      };
      this._handleChangeReview = this._handleChangeReview.bind(this);
      this._handleChangeRating = this._handleChangeRating.bind(this);
      this._validation = this._validation.bind(this);
      this._handleSubmitComment = this._handleSubmitComment.bind(this);
    }


    componentDidUpdate(prevProps) {
      const {isSendReview, error} = this.props;
      if (isSendReview !== prevProps.isSendReview && !error) {
        this.setState({
          rating: 5,
          review: ``,
        });
      }
    }

    _handleChangeReview(evt) {
      this.setState({review: evt.target.value}, this._validation);
    }

    _handleChangeRating(evt) {
      this.setState({rating: +evt.target.value}, this._validation);
    }

    _validation() {
      if (this.state.review.length >= 50 && this.state.review.length < 400) {
        this.setState({isDisabled: false});
      } else {
        this.setState({isDisabled: true});
      }
    }

    _handleSubmitComment(e) {
      e.preventDefault();
      const {onSubmitComment, filmId, onSetIsSendReview} = this.props;
      onSetIsSendReview(true);
      onSubmitComment(filmId, {
        comment: this.state.review,
        rating: this.state.rating,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          handleSubmitComment={this._handleSubmitComment}
          handleChangeRating={this._handleChangeRating}
          handleChangeReview={this._handleChangeReview}
          review={this.state.review}
          isDisabled={this.state.isDisabled}


        />
      );
    }
  }

  WithAddReview.propTypes = {
    onSubmitComment: PropTypes.func.isRequired,
    onSetIsSendReview: PropTypes.func.isRequired,
    filmId: PropTypes.string.isRequired,
    isSendReview: PropTypes.bool.isRequired,
    error: PropTypes.number,

  };

  return WithAddReview;

};

export default withAddReview;
