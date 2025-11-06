import { useState } from "react";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempted with:", { username, password });
    };

    const handleGoogleLogin = () => {
        alert("Google login not yet implemented.");
    };

    return (
        <div className="login-container">
            <h2>Welcome Back</h2>
            <p>Sign in to continue</p>

            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button type="submit" className="btn-login">
                    Login
                </button>
            </form>

            <div className="divider">or</div>

            <button onClick={handleGoogleLogin} className="btn-google">
                <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                    width="20"
                    height="20"
                    style={{
                        marginRight: "8px",
                        verticalAlign: "middle",
                    }}
                />
                Login with Google
            </button>

            <p className="signup-text">
                Don&apos;t have an account?{" "}
                <a href="/register" className="signup-link">
                    Create one
                </a>
            </p>
        </div>
    );
}

export default Login;
