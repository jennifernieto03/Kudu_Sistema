import { useState } from 'react';
import Login from './views/Login.jsx';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    console.log('Usuario logueado:', userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Si no hay usuario, mostrar formulario de login
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Si hay usuario, mostrar dashboard
  return (
    <div className="app">
      <header className="app-header">
        <h1>KUDU Sistema - Dashboard</h1>
        <div className="user-info">
          <span>Bienvenido, {user.name}</span>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </header>
      <main>
        <h2>¡Has iniciado sesión correctamente!</h2>
        <p>Email: {user.email}</p>
      </main>
    </div>
  );
}

export default App;