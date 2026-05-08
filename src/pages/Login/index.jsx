import "./index.css";

function Login() {
  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </main>
  );
}

export default Login;