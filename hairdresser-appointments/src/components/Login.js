import React from 'react';

const Login = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    // Perform login logic here...
    setIsLoggedIn(true); // Update the logged-in state
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
