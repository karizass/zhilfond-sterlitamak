import React from "react";
import { Link } from "react-router-dom";
import '../scss/style.scss';

import buttonArrow from '../img/banner-button-arrow.webp';
import bannerImage from '../img/home-banner-image.webp';
import adv1Icon from '../img/home-advantages-1-icon.webp';
import adv2Icon from '../img/home-advantages-2-icon.webp';
import adv3Icon from '../img/home-advantages-3-icon.webp';
import realestateFirst from '../img/home-realestate-box-1.webp';
import realestateSecond from '../img/home-realestate-box-2.webp';
import realestateThird from '../img/home-realestate-box-3.webp';
import realestateFourth from '../img/home-realestate-box-4.webp';
import chose1Icon from '../img/home-chose-1-icon.webp';
import chose2Icon from '../img/home-chose-2-icon.webp';
import chose3Icon from '../img/home-chose-3-icon.webp';
import chose4Icon from '../img/home-chose-4-icon.webp';
import dealImage from '../img/home-deal-image.webp';

function Home() {
  return (
    <div className="home">
       <section className="home-banner">
            <div className="home-banner-text">
                <h1>Ваш надежный партнер в мире недвижимости</h1>
                <p className="home-banner-text-description">Профессиональная команда риелторов с многолетним опытом 
                работы на рынке недвижимости по России. Мы помогаем находить идеальные решения для каждого клиента</p>
                <div className="home-banner-text-buttons">
                    <Link to="/team" className="button-with-arrow">
                        Наша команда <img src={buttonArrow} alt="" />
                    </Link>
                    <Link to="/contacts" className="btn-primary">Связаться с нами</Link>
                </div>
            </div>
            <div className="home-banner-image">
              <img src={bannerImage} alt="banner-image" />
            </div>
       </section>

       <section className="home-advantages">
            <div className="home-advantages-inner">
                <div className="home-page-images"><img src={adv1Icon} alt="" /></div>
                <h2>5+</h2>
                <p className="p-20">Лет на рынке</p>
            </div>
            <div className="home-advantages-inner">
                <div className="home-page-images"><img src={adv2Icon} alt="" /></div>
                <h2>1000+</h2>
                <p className="p-20">Довольных клиентов</p>
            </div>
            <div className="home-advantages-inner">
                <div className="home-page-images"><img src={adv3Icon} alt="" /></div>
                <h2>98%</h2>
                <p className="p-20">Успешных сделок</p>
            </div>
       </section>

       <section className="home-realestate">
            <h3>Работаем с любой недвижимостью</h3>
            <p className="p-description">От квартир до загородных домов — наши риелторы помогут с любым объектом</p>
            <div className="home-realestate-box">
                <Link to="/services" className="realestate-item">
                    <img src={realestateFirst} alt="Квартиры" />
                    <span className="realestate-label">Квартиры</span>
                </Link>
                <Link to="/services" className="realestate-item">
                    <img src={realestateSecond} alt="Дома" />
                    <span className="realestate-label">Дома</span>
                </Link>
                <Link to="/services" className="realestate-item">
                    <img src={realestateThird} alt="Новостройки" />
                    <span className="realestate-label">Новостройки</span>
                </Link>
                <Link to="/services" className="realestate-item">
                    <img src={realestateFourth} alt="Вторичный рынок" />
                    <span className="realestate-label">Вторичный рынок</span>
                </Link>
            </div>
       </section>

       <section className="home-chose">
            <h3>Почему выбирают нас</h3>
            <p className="p-description">Мы предлагаем комплексный подход и персональное внимание к каждому клиенту</p>
            <div className="home-chose-box">
                <div className="home-chose-box-inner">
                    <div className="home-page-images" ><img src={chose1Icon} alt="" /></div>
                    <p className="p-21">Опытные специалисты</p>
                    <p className="p-16">Команда профессиональных риелторов с глубокими знаниями рынка</p>
                </div>
                <div className="home-chose-box-inner">
                    <div className="home-page-images" ><img src={chose2Icon} alt="" /></div>
                    <p className="p-21">Индивидуальный подход</p>
                    <p className="p-16">Учитываем желания и находим оптимальные решения</p>
                </div>
                <div className="home-chose-box-inner">
                    <div className="home-page-images" ><img src={chose3Icon} alt="" /></div>
                    <p className="p-21">Быстрые сделки</p>
                    <p className="p-16">Эффективное сопровождение на всех этапах сделки</p>
                </div>
                <div className="home-chose-box-inner">
                    <div className="home-page-images" ><img src={chose4Icon} alt="" /></div>
                    <p className="p-21">Юридическая чистота</p>
                    <p className="p-16">Полная проверка документов и безопасность сделок</p>
                </div>
            </div>
       </section>

       <section className="home-team" style={{ backgroundImage: `url(${dealImage})` }}>
            <div className="home-team-overlay"></div>
            <div className="home-team-content">
                <h4>Каждая сделка — это наш успех</h4>
                <p className="p-24">Мы гордимся доверием наших клиентов и работаем для достижения лучших результатов</p>
                <Link to="/team" className="btn-white">Познакомиться с командой</Link>
            </div>
        </section>

       <section className="home-consult">
            <h2>Готовы начать работу с профессионалами?</h2>
            <p className="p-20">Свяжитесь с нами сегодня, и наши риелторы помогут вам найти идеальную недвижимость или выгодно продать ваше собственность</p>
            <Link to="/contacts" className="btn-white">Получить консультацию</Link>
       </section>
    </div>
  );
}

export default Home;