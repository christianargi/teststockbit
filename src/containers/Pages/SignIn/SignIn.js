import React from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import authAction from '@iso/redux/auth/actions';
import appAction from '@iso/redux/app/actions';
import SignInStyleWrapper from './SignIn.styles';

const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.Auth.idToken);

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  function handleLogin(e, token = false) {
    e.preventDefault();
    if (token) {
      dispatch(login(token));
    } else {
      dispatch(login());
    }
    dispatch(clearMenu());
    history.push('/dashboard');
  }
  let { from } = location.state || { from: { pathname: '/dashboard' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              MOVIES
            </Link>
          </div>
          <div className="isoSignInForm">
            <form>
              <div className="isoInputWrapper isoOtherLogin">
                <Button
                  onClick={handleLogin}
                  type="primary"
                  className="btnFacebook"
                >
                  View Movies
                </Button>
              </div>
            </form>

            <div className="isoCenterComponent isoHelperWrapper">
            </div>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
