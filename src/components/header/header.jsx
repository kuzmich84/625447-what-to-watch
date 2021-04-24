import React from "react";
import {getAuthorisationStatus, getAvavtar} from "../../store/selectors";
import {connect} from "react-redux";
import {AuthorisationStatus} from "../../const";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Header = ({authorisationStatus, avatar}) => {

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        {authorisationStatus === AuthorisationStatus.AUTH
          ? <div className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63"/>
          </div>
          : <Link to="/login" className="page-title">Sign in</Link>
        }

      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorisationStatus: getAuthorisationStatus(state),
  avatar: getAvavtar(state),
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  authorisationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};
