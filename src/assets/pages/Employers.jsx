import React from "react";
import '../scss/style.scss';

import employee1 from '../img/team-employee1.webp';
import employee2 from '../img/team-employee2.webp';
import employee3 from '../img/team-employee3.webp';
import employee4 from '../img/team-employee4.webp';
import phoneIcon from '../img/team-page-phone-icon.webp';
import emailIcon from '../img/team-page-email-icon.webp';
import contactIcon from '../img/team-phone-icon.webp';

function Employers() {
  const employees = [
    {
      id: 1,
      name: "Юмагулова Гузель",
      position: "Директор",
      experience: "5 лет на рынке",
    //   specialization: "Жилая недвижимость",
      description: "Специализируется на жилой и коммерческой недвижимости, работает с квартирами в новостройках и на вторичном рынке.",
      phone: "+7 (905) 005-28-82",
      email: "gale_09@mail.ru",
      image: employee1
    },
    {
      id: 2,
      name: "Шарипова Айгуль",
      position: "Риелтор",
      experience: "4 года на рынке",
    //   specialization: "Жилая недвижимость",
      description: "Специализируется на жилой и коммерческой недвижимости, работает с квартирами и жилыми домами.",
      phone: "+7 (937) 162-59-83",
      email: "sharipova1212@icloud.com",
      image: employee2
    },
    {
      id: 3,
      name: "Каримова Элиза",
      position: "Риелтор",
      experience: "3 года на рынке",
    //   specialization: "Жилая недвижимость",
      description: "Специализируется на жилой и коммерческой недвижимости, работает с квартирами и жилыми домами.",
      phone: "+7 (903) 312-44-09",
      email: "Eliza-karimova@mail.ru",
      image: employee3
    },
    {
      id: 4,
      name: "Даутов Рустам",
      position: "Застройщик",
      experience: "3 года на рынке",
    //   specialization: "Жилая недвижимость",
      description: "Партнерская строительная компания, специализирующаяся на жилых домах из СИП-панелей.",
      phone: "+7 (917) 377-78-50",
      email: "sip_home2@yandex.ru",
      image: employee4
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
                            {/* <div className="employee-info-row">
                                <span className="employee-info-label">Специализация:</span>
                                <span className="employee-info-value">{employee.specialization}</span>
                            </div> */}
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
            <a href="tel:+79177308313" className="btn-dark">
                <img src={phoneIcon} alt="phone" />
                Позвонить нам
            </a>
        </div>
    </div>
  );
}

export default Employers;