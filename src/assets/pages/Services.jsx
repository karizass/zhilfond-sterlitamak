import React from "react";
import { Link } from "react-router-dom";
import '../scss/style.scss';

import service1Icon from '../img/services-page-1-icon.webp';
import service2Icon from '../img/services-page-2-icon.webp';
import service3Icon from '../img/services-page-3-icon.webp';
import service4Icon from '../img/services-page-4-icon.webp';
import service5Icon from '../img/services-page-5-icon.webp';
import service6Icon from '../img/services-page-6-icon.webp';

function Services() {
  return (
    <div className="services">
        <div className="services-header">
            <h5>Наши услуги</h5>
            <p className="p-description">Мы предлагаем полный спектр услуг на рынке недвижимости — от подбора и оценки до юридического сопровождения сделок. Наши риелторы работают в ваших интересах и обеспечивают профессиональную поддержку на каждом этапе.</p>
        </div>

        <div className="services-grid">
            <div className="service-card">
                <div className="service-card-icon"><img src={service1Icon} alt="" /></div>
                <h6>Покупка жилой недвижимости</h6>
                <p className="p-16">Подберём квартиру или дом, соответствующий всем вашим требованиям и бюджету. Проведём полную проверку юридической чистоты и сопроводим сделку.</p>
                <ul className="service-features">
                    <li>Подбор объектов по параметрам</li>
                    <li>Организация просмотров</li>
                    <li>Проверка документов</li>
                    <li>Помощь с ипотекой</li>
                </ul>
            </div>

            <div className="service-card">
                <div className="service-card-icon"><img src={service2Icon} alt="" /></div>
                <h6>Продажа недвижимости</h6>
                <p className="p-16">Профессиональная оценка, эффективная реклама и быстрый поиск покупателей. Обеспечим максимальную цену продажи вашей недвижимости.</p>
                <ul className="service-features">
                    <li>Оценка рыночной стоимости</li>
                    <li>Фотосъёмка и реклама</li>
                    <li>Проведение показов</li>
                    <li>Сопровождение сделки</li>
                </ul>
            </div>

            <div className="service-card">
                <div className="service-card-icon"><img src={service3Icon} alt="" /></div>
                <h6>Коммерческая недвижимость</h6>
                <p className="p-16">Помощь в поиске и оформлении офисных, торговых и производственных площадей. Консультации по арендным ставкам и условиям.</p>
                <ul className="service-features">
                    <li>Подбор коммерческих площадей</li>
                    <li>Анализ рынка аренды</li>
                    <li>Переговоры с арендодателем</li>
                    <li>Юридическое сопровождение</li>
                </ul>
            </div>

            <div className="service-card">
                <div className="service-card-icon"><img src={service4Icon} alt="" /></div>
                <h6>Инвестиционные проекты</h6>
                <p className="p-16">Консультации по выгодным вложениям в недвижимость. Анализ рынка и прогнозирование стоимости объектов.</p>
                <ul className="service-features">
                    <li>Анализ инвест. привлекательности</li>
                    <li>Подбор объектов для инвестиций</li>
                    <li>Расчёт доходности</li>
                    <li>Стратегия вложений</li>
                </ul>
            </div>

            <div className="service-card">
                <div className="service-card-icon"><img src={service5Icon} alt="" /></div>
                <h6>Юридическое сопровождение</h6>
                <p className="p-16">Полная юридическая поддержка сделок с недвижимостью. Проверка документов, подготовка договоров, регистрация в Росреестре.</p>
                <ul className="service-features">
                    <li>Проверка правоустанавливающих док.</li>
                    <li>Подготовка договоров</li>
                    <li>Сопровождение в МФЦ/Росреестре</li>
                    <li>Консультации юриста</li>
                </ul>
            </div>

            <div className="service-card">
                <div className="service-card-icon"><img src={service6Icon} alt="" /></div>
                <h6>Безопасность сделок</h6>
                <p className="p-16">Гарантируем юридическую чистоту и безопасность всех операций. Работаем через аккредитивы и банковские ячейки.</p>
                <ul className="service-features">
                    <li>Проверка истории объекта</li>
                    <li>Работа с банковскими ячейками</li>
                    <li>Страхование сделок</li>
                    <li>Защита от мошенничества</li>
                </ul>
            </div>
        </div>

        <div className="services-process">
            <h3>Как мы работаем</h3>
            <div className="process-steps">
                <div className="process-step">
                    <div className="step-number">1</div>
                    <h6>Консультация</h6>
                    <p className="p-16">Знакомство с вашими потребностями и обсуждение условий</p>
                </div>
                <div className="process-step">
                    <div className="step-number">2</div>
                    <h6>Подбор</h6>
                    <p className="p-16">Поиск подходящих вариантов и организация просмотров</p>
                </div>
                <div className="process-step">
                    <div className="step-number">3</div>
                    <h6>Проверка</h6>
                    <p className="p-16">Юридическая проверка документов и объекта</p>
                </div>
                <div className="process-step">
                    <div className="step-number">4</div>
                    <h6>Сделка</h6>
                    <p className="p-16">Оформление документов и регистрация права собственности</p>
                </div>
            </div>
        </div>

        <div className="services-cta">
            <h4>Нужна консультация по услугам?</h4>
            <p className="p-description">Свяжитесь с нами, и наш специалист подробно расскажет о каждой услуге и поможет выбрать оптимальный вариант</p>
            <Link to="/contacts" className="btn-dark">Получить консультацию</Link>
        </div>
    </div>
  );
}

export default Services;