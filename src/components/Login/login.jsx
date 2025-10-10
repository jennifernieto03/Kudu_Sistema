import "../assets/styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Iniciar Sesión</h2>
        <p className="login-subtitle">
          Bienvenido al sistema KUDU
        </p>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="usuario@correo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;