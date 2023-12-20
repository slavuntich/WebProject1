function AppAboutUs() {
    return (
        <div>
            <header className="header-main">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/ru/archive/5/55/20071205223601%21Porsche_logo.png" alt="Porsche Logo" />
                </div>
                <div className="title">
                    <h1>Porsche Cars World</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="Classic.html">Classic Cars</a></li>
                        <li><a href="Sport.html">Sports Cars</a></li>
                        <li><a href="Electric.html">Electric Cars</a></li>
                        <li><a href="History.html">Porsche History</a></li>
                        <li><a href="Achievements.html">Sport Achievements</a></li>
                        <li><a href="AboutUs.html">About Us</a></li>
                        <li><a href="Configure.html">Design & Interior</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="about">
                    <h2>Добро пожаловать Porsche Cars World</h2>
                    <p>
                        Porsche Cars World - ведущий производитель автомобилей класса люкс с богатой историей мастерства и инноваций.
                        Наше стремление к совершенству сделало нас символом производительности и престижа в автомобильной промышленности.
                    </p>

                    <h3>Наша история</h3>
                    <p>
                        Наш автосалон работает с 1990 года, у нас представлены только лучшие автомобили Porsche от премиум-сегмента до семейных автомобилей. Индивидуальный подход к каждому клиенту.
                    </p>

                    <h3>Наши клиенты</h3>
                    <p>
                        Мы гордимся сотрудничеством с лидерами отрасли и энтузиастами, которые разделяют нашу страсть к качеству и инновациям.
                        Некоторые из наших уважаемых клиентов включают:
                    </p>
                    <ul>
                        <li>Supercar Enthusiast Magazine</li>
                        <li>Global Motorsports Association</li>
                        <li>Luxury Lifestyle Events</li>

                    </ul>

                    <h3>Опыт вождения элитного сегмента</h3>
                    <p>
                        В Porsche Cars World мы верим в предоставление непревзойденных впечатлений от вождения, сочетающих в себе производительность, комфорт и стиль.
                        Присоединяйтесь к нам в путешествии к автомобильному совершенству, где каждый Porsche - это шедевр, созданный для тех, кто требует самого лучшего.
                    </p>
                </section>

                <section className="contact">
                    <h2>Связаться с нами:</h2>

                    <div className="map">
                        <iframe
                            title="Porsche Cars World Location"
                            width="600"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12065.384332965617!2d-122.0838!3d37.42199999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836d3fbc6bed73%3A0x21621b7deefda886!2sКульджинский%20тракт%2012%2F1%2C%20Алматы!5e0!3m2!1sen!2skz!4v1665908618474!5m2!1sen!2skz"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="contact-info">
                        <h3>Адресс</h3>
                        <p>Кульджинский Тракт 12/1, Porsche World Cars</p>

                        <h3>Контакты:</h3>
                        <p>Продажи: +7 (778) 025‒44‒14</p>
                        <p>Сервис: +7 (727) 355‒80‒80</p>

                        <h3>Email</h3>
                        <p>info@porschecarsworld.com</p>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2023 Porsche Cars World</p>
            </footer>
        </div>
    );
}

ReactDOM.render(<AppAboutUs />, document.getElementById('root'));
