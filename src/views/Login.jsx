import "../assets/styles/Login.css";

const Login = () => {
  return (
    <div id="login-container">
      <div id="login_left">
         
      </div>
      <div id="login_right">
        <div className="login-box">
        <h2 className="login-title">Iniciar Sesión</h2>
        <p className="login-subtitle">Bienvenido al sistema KUDU</p>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="usuario@correo.com" />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
