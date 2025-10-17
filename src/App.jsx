import React, { useState, useEffect } from 'react';
import Login from './views/Login.jsx';
import { LoadScreen } from './components/LoadScreen.jsx';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (loading) {
    return <LoadScreen />;
  }

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