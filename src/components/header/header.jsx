import React from "react";
import {getAuthorisationStatus, getAvatar} from "../../store/selectors";
import {connect} from "react-redux";
import {AuthorisationStatus, HeaderOfPage} from "../../const";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Header = (props) => {
  const {authorisationStatus, avatar, page} = props;
  return (
    <header className={`page-header ${page === `main` ? HeaderOfPage.MAIN : HeaderOfPage.MY_LIST}`}>
      <div className="logo">
        <a className="logo__link" href={page !== `main` ? `/` : null}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {props.children}
      <div className="user-block">
        {authorisationStatus === AuthorisationStatus.AUTH
          ? <div className="user-block__avatar">
            <Link to={`/mylist`}>
              <img src={avatar} alt="User avatar" width="63" height="63"/>
            </Link>
          </div>
          : <Link to="/login" className="user-block__link">Sign in</Link>
        }
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorisationStatus: getAuthorisationStatus(state),
  avatar: getAvatar(state),
});

export {Header};

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  authorisationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  children: PropTypes.object,
  page: PropTypes.string,
};
