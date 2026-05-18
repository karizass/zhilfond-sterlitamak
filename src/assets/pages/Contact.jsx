import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../scss/style.scss';

import locationIcon from '../img/contact-locate-icon.webp';
import phoneIcon from '../img/contact-phone-icon.webp';
import emailIcon from '../img/contact-email-icon.webp';
import timeIcon from '../img/contact-clock-icon.webp';
import buttonPhoneIcon from '../img/team-page-phone-icon.webp';

// Ключ для localStorage
const STORAGE_KEY = 'contactSubmissions';

// Вспомогательная функция: получить все заявки
export const getSubmissions = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Ошибка чтения данных из localStorage:', error);
    return [];
  }
};

// Вспомогательная функция: очистить старые заявки (старше 30 дней)
const cleanupOldSubmissions = (submissions, days = 30) => {
  const now = Date.now();
  const maxAge = days * 24 * 60 * 60 * 1000;
  return submissions.filter(sub => (now - new Date(sub.timestamp).getTime()) < maxAge);
};

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Простая валидация
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Пожалуйста, заполните все обязательные поля');
      return;
    }

    try {
      // Формируем объект заявки
      const submission = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString()
      };

      // Получаем существующие заявки
      const existing = getSubmissions();
      
      // Очищаем старые записи и добавляем новую
      const updated = [...cleanupOldSubmissions(existing), submission];
      
      // Сохраняем в localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      // Сброс формы и показ сообщения
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsSubmitted(true);
      setError('');

      // Скрыть сообщение через 5 секунд
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (err) {
      console.error('Ошибка сохранения заявки:', err);
      setError('Не удалось отправить сообщение. Попробуйте позже.');
    }
  };

  // Очистка номера для tel: ссылки
  const cleanPhone = (phone) => phone.replace(/[^0-9+]/g, '');

  return (
    <div className="contacts">
        <div className="contacts-header">
            <h5>Контакты</h5>
            <p className="p-description">Свяжитесь с нами удобным для вас способом. Мы всегда рады ответить на ваши вопросы и помочь с выбором недвижимости.</p>
        </div>

        <div className="contacts-content">
            <div className="contacts-info">
                <h6>Информация для связи</h6>
                
                <div className="contact-item">
                    <div className="contact-item-icon"><img src={locationIcon} alt="" /></div>
                    <div className="contact-item-content">
                        <h6>Адрес офиса</h6>
                        <p className="p-16">г. Стерлитамак, ул. Артема, д. 53<br />Башкортостан, 453100</p>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="contact-item-icon"><img src={phoneIcon} alt="" /></div>
                    <div className="contact-item-content">
                        <h6>Телефон</h6>
                        <p className="p-16">
                          <a href="tel:+79050052882" className="contact-link">+7 (905) 005-28-82</a><br />
                          <a href="tel:+79033124409" className="contact-link">+7 (903) 312-44-09</a>
                        </p>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="contact-item-icon"><img src={emailIcon} alt="" /></div>
                    <div className="contact-item-content">
                        <h6>Email</h6>
                        <p className="p-16">
                          <a href="mailto:gale_09@mail.ru" className="contact-link">gale_09@mail.ru</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="contacts-form-wrapper">
                <div className="contacts-form">
                    <h6>Отправить сообщение</h6>
                    
                    {isSubmitted && (
                      <div className="form-success">
                        ✓ Сообщение отправлено! Мы свяжемся с вами в ближайшее время.
                      </div>
                    )}
                    
                    {error && (
                      <div className="form-error">
                        ⚠ {error}
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Ваше имя *</label>
                            <input 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Телефон *</label>
                            <input 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Сообщение *</label>
                            <textarea 
                              rows="5" 
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-submit">Отправить сообщение</button>
                        <p className="form-privacy">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                    </form>
                </div>
            </div>
        </div>

        <div className="contacts-cta">
            <h4>Остались вопросы?</h4>
            <p className="p-description">Позвоните нам прямо сейчас, и наш специалист ответит на все ваши вопросы. Мы работаем для вас каждый день!</p>
            <a href="tel:+79050052882" className="btn-phone">
                <img src={buttonPhoneIcon} alt="" />
                +7 (905) 005-28-82
            </a>
        </div>
    </div>
  );
}

export default Contacts;
