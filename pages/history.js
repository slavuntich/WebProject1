

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




function HistoryPage() {
    return (
        <div>
            <Header />
            <div className="history-content">
                <img src="https://servis-porsche.ru/img/history.jpg" alt="Porsche History" width="100%" />
                <h1>ИСТОРИЯ PORSCHE</h1>
                <p>
                    Porsche – немецкая автомобильная компания, производящая в первую очередь спортивные автомобили и автомобили класса люкс.
                    Штаб-квартира расположена в Штутгарте.
                </p>
                <hr />
                <p>
                    Ее основатель, Фердинанд Порше-старший (Ferdinand Porsche) родился в 1875 году в семье водопроводчика, и, получив образование,
                    продолжает дело отца. Но интерес к технике у него простирается дальше техники санитарной, поэтому уже в 1898 году он основывает
                    в Вене конструкторское бюро. Первая же работа молодого инженера – мотор-колесо для электромобиля – приносит ему славу талантливого
                    конструктора. В итоге в 1906 году он становится главным конструктором компании Austro-Daimler, где для начала проектирует
                    артиллерийский тягач с активным прицепом.
                </p>
                <hr />
                <p>
                    1909 год ознаменовывается двумя событиями – рождением сына, также Фердинанда Порше (Ferdinand Porsche), младшего, которого часто называют Ферри Порше;
                    а также участием конструктора в ралли принца Генриха Прусского на самостоятельно спроектированном автомобиле, принесшем ему второе место.
                    Через год в том же ралли честолюбивый конструктор занял уже первое место.
                </p>
                <hr />
                <p>
                    В 1923 году компания под его техническим руководством начинает выпускать автомобили высочайшего класса, а сам Порше переходит в Daimler-Benz, также на пост главного конструктора.
                    Основным его занятием там становится проектирование и усовершенствование новых компрессорных двигателей, в том числе для гоночных машин.
                    В частности Фердинанд Порше принял участие в разработке знаменитых серий Mercedes S и K.
                </p>
                <hr />
                <p>
                    Наступают девяностые годы, и Porsche выпускает миллионный автомобиль. Тогда же начинает производиться Boxter – доступная широкому потребительскому сегменту модель, увеличивающая и без того высокие продажи компании.
                    В 1997 кардинально меняется самая известная модель фирмы – 911 Carrera. Новоиспеченная модификация получает номер 996. В новом тысячелетии компания становится акционерным обществом.
                    Производится очередная кардинальная модификация 911, делающая ее одним из самых желанных скоростных автомобилей в мире.
                    Сейчас компании находится в стадии роста и процветания и производит технически безупречные и скоростные авто для настоящих ценителей.
                </p>
            </div>
        </div>
    );
}

ReactDOM.render(<HistoryPage />, document.getElementById('root'));
