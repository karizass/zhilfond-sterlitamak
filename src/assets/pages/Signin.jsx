import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../scss/style.scss';

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { data, error: authError } = await signIn(
      formData.email, 
      formData.password
    );

    if (authError) {
      setError('Неверный email или пароль');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h6>Вход</h6>
        
        {error && <div className="form-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email *</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label>Пароль *</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit" className="btn-submit">Войти</button>
        </form>
        
        <div className="auth-footer">
          <p className="p-16">
            Нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;