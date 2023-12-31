import axios from 'axios';
import PropTypes from 'prop-types';

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post('https://node-chat-production.up.railway.app/authenticate', {
        username: value,
      })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((err) => console.log('error', err));
  };
  AuthPage.propTypes = {
    onAuth: PropTypes.func.isRequired,
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
