

function Header() {
    return (
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
    );
}
// SportAchievementsPage.jsx

function SportAchievementsPage() {
    return (
        <div>
            <Header />
            <div className="achievements-content">
                <h1>Спортивные достижения</h1>
                {/* Вставьте здесь код для ваших видео */}
                <video width="100%" height="315" controls>
                    <source src="/videos/Porsche 959. КАК ГИПЕРКАР НА БЕЗДОРОЖЬЕ ПОБЕЖДАЕТ ВНЕДОРОЖНИКИ_!.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает тег video.
                </video>
            </div>
            <footer>
                <p>&copy; 2023 Porsche Cars World</p>
            </footer>
        </div>
    );
}

ReactDOM.render(<SportAchievementsPage />, document.getElementById('root'));