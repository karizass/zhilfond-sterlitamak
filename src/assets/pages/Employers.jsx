import React from "react";
import '../scss/style.scss';

import employee1 from '../img/team-employe-1.webp';
import phoneIcon from '../img/team-page-phone-icon.webp';
import emailIcon from '../img/team-page-email-icon.webp';
import contactIcon from '../img/team-phone-icon.webp';

function Employers() {
  const employees = [
    {
      id: 1,
      name: "Елена Волкова",
      position: "Ведущий риелтор",
      experience: "12 лет опыта",
      specialization: "Жилая недвижимость",
      description: "Специализируется на жилой недвижимости, работает с квартирами в новостройках и на вторичном рынке.",
      phone: "+7 (917) 123-45-67",
      email: "volkova@zhilfond-str.ru",
      image: employee1
    },
    {
      id: 2,
      name: "Дмитрий Смирнов",
      position: "Старший риелтор",
      experience: "10 лет опыта",
      specialization: "Коммерческая недвижимость",
      description: "Эксперт в коммерческой недвижимости, помогает подобрать офисные и торговые площади.",
      phone: "+7 (917) 234-56-78",
      email: "smirnov@zhilfond-str.ru",
      image: employee1
    },
    {
      id: 3,
      name: "Анна Петрова",
      position: "Риелтор",
      experience: "7 лет опыта",
      specialization: "Загородная недвижимость",
      description: "Работает с загородной недвижимостью, коттеджами и земельными участками.",
      phone: "+7 (917) 345-67-89",
      email: "petrova@zhilfond-str.ru",
      image: employee1
    },
    {
      id: 4,
      name: "Игорь Козлов",
      position: "Риелтор",
      experience: "8 лет опыта",
      specialization: "Инвестиционная недвижимость",
      description: "Консультирует по инвестиционным проектам и помогает выгодно вложить средства в недвижимость.",
      phone: "+7 (917) 456-78-90",
      email: "kozlov@zhilfond-str.ru",
      image: employee1
    }
  ];

  // Функция для очистки номера телефона (убираем пробелы, скобки, тире)
  const cleanPhone = (phone) => phone.replace(/[^0-9+]/g, '');

  return (
    <div className="employers">
        <div className="employers-header">
            <h5>Наша команда</h5>
            <p className="p-description">Познакомьтесь с профессионалами, которые помогут вам найти идеальную недвижимость. Каждый член нашей команды — это эксперт с многолетним опытом работы на рынке недвижимости Стерлитамака.</p>
        </div>

        <div className="employers-grid">
            {employees.map((employee) => (
                <div key={employee.id} className="employee-card">
                    <div className="employee-card-image">
                        <img src={employee.image} alt={employee.name} />
                    </div>
                    <div className="employee-card-content">
                        <h6>{employee.name}</h6>
                        <p className="employee-position">{employee.position}</p>
                        
                        <div className="employee-info">
                            <div className="employee-info-row">
                                <span className="employee-info-label">Опыт:</span>
                                <span className="employee-info-value">{employee.experience}</span>
                            </div>
                            <div className="employee-info-row">
                                <span className="employee-info-label">Специализация:</span>
                                <span className="employee-info-value">{employee.specialization}</span>
                            </div>
                        </div>

                        <p className="employee-description">{employee.description}</p>

                        <div className="employee-contacts">
                            <a href={`tel:${cleanPhone(employee.phone)}`} className="employee-contact-item">
                                <img src={contactIcon} alt="phone" />
                                <span>{employee.phone}</span>
                            </a>
                            <a href={`mailto:${employee.email}`} className="employee-contact-item">
                                <img src={emailIcon} alt="email" />
                                <span>{employee.email}</span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="employers-cta">
            <h6>Не нашли подходящего специалиста?</h6>
            <p className="p-description">Свяжитесь с нами, и мы подберём риелтора под ваши конкретные потребности</p>
            <a href="tel:+73473000000" className="btn-dark">
                <img src={phoneIcon} alt="phone" />
                Позвонить нам
            </a>
        </div>
    </div>
  );
}

export default Employers;