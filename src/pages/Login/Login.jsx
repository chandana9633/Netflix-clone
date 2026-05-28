import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignup) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">

      {/* NETFLIX LOGO */}
      <h1 className="login-logo">NETFLIX</h1>

      {/* LOGIN CARD */}
      <div className="login-box">
        <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="switch-text">
          {isSignup ? "Already have an account?" : "New to Netflix?"}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Sign In" : " Sign up now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;