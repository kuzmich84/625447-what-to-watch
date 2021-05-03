import React, {createRef, useState} from 'react';
import PropTypes from "prop-types";
import {login} from "../../store/api-actions";
import {compose} from "redux";
import {connect} from "react-redux";
import {Header} from "../header/header";
import {HeaderOfPage} from "../../const";
import Footer from "../footer/footer";
import {validateEmail} from "../../utils";

const SignIn = (props) => {
  const loginRef = createRef();
  const passwordRef = createRef();

  const [error, setError] = useState(``);

  const handleSubmit = (evt) => {
    const {onSubmit} = props;

    evt.preventDefault();

    if (validateEmail(loginRef.current.value)) {
      setError(``);
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      setError(`Please enter a valid email address`);
    }
  };

  return (
    <div className="user-page">
      <Header page={HeaderOfPage.SIGN_IN}><h1 className="page-title user-page__title">Sign in</h1></Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" noValidate onSubmit={handleSubmit}>
          {error && <div className="sign-in__message"><p>{error}</p></div>}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="login"
                id="user-email"
                ref={loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};

export default compose(
    connect(null, mapDispatchToProps)
)(SignIn);
