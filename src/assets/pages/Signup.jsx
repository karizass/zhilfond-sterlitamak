import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../scss/style.scss';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeNotifications: false,
    agreeCall: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return;
    }

    if (!formData.agreeNotifications || !formData.agreeCall) {
      setError('Для завершения регистрации необходимо согласие с условиями');
      return;
    }

    const { data, error: authError } = await signUp(
      formData.email, 
      formData.password, 
      formData.fullName
    );

    if (authError) {
      setError(authError.message);
    } else {
      setSuccess('Регистрация успешна! Проверьте почту для подтверждения.');
      setTimeout(() => navigate('/'), 3000);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h6>Регистрация</h6>
        
        {error && <div className="form-error">{error}</div>}
        {success && <div className="form-success">{success}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Имя *</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required 
            />
          </div>
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
          <div className="form-group">
            <label>Подтвердите пароль *</label>
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group form-checkbox">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                name="agreeNotifications"
                checked={formData.agreeNotifications}
                onChange={handleChange}
                required
              />
              <span>Регистрируясь, вы подписываетесь на уведомления о новых предложениях и акциях агентства</span>
            </label>
          </div>
          
          <div className="form-group form-checkbox">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                name="agreeCall"
                checked={formData.agreeCall}
                onChange={handleChange}
                required
              />
              <span>Я соглашаюсь на предварительный обзвон специалистом для уточнения пожеланий касаемо недвижимости</span>
            </label>
          </div>
          
          <button type="submit" className="btn-submit">Зарегистрироваться</button>
        </form>
        
        <div className="auth-footer">
          <p className="p-16">
            Уже есть аккаунт? <Link to="/signin">Войти</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;