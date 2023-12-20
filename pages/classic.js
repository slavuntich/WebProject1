
function CarIcon(props) {
    const { imageSrc, model, description, onClick } = props;

    return (
        <div className="car-item" onClick={() => onClick(imageSrc, model, description)}>
            <img src={imageSrc} alt={model} />
            <p>{model}</p>
        </div>
    );
}

function AppClassic() {
    const [modalContent, setModalContent] = React.useState({
        imageSrc: '',
        model: '',
        description: '',
    });

    const openModal = (imageSrc, model, description) => {
        setModalContent({
            imageSrc: imageSrc,
            model: model,
            description: description,
        });

        const modal = document.getElementById('myModal');
        modal.style.display = 'block';
    };

    const closeModalFunction = () => {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    };

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
                <section className="welcome">
                    <h2>Вашему вниманию наша коллекция классических экземпляров</h2>
                    <p>Познакомьтесь с неподвластной времени красотой и производительностью наших классических автомобилей Porsche.</p>
                </section>

                <section className="presentation">
                    <h2>Витрина классических автомобилей</h2>
                    <p>Откройте для себя элегантность и историю нашей коллекции классических автомобилей.</p>

                    <div className="car-row">
                        {/* Используйте CarIcon для каждой модели машины */}
                        <CarIcon
                            imageSrc="https://hips.hearstapps.com/autoweek/assets/s3fs-public/131119796.jpg"
                            model="Porsche 911 Classic"
                            description="Культовый Porsche 911 Classic, неподвластный времени шедевр, известный своим оригинальным дизайном и превосходными эксплуатационными характеристиками. Символ роскоши и изысканности."
                            onClick={openModal}
                        />
                        <CarIcon
                            imageSrc="https://assets.drivestraat.com//cars/1969_Porsche_911_T_Light_Ivory_119120823./optimized/studio/indoors/image_57d182ea4a3bf_02.jpg"
                            model="1969 Porsche 911 E"
                            description="Porsche 911 E 1969 года выпуска, классическая красавица, покорившая сердца энтузиастов своим мощным двигателем и аэродинамическим дизайном."
                            onClick={openModal}
                        />
                        <CarIcon
                            imageSrc="https://silverpass.ru/wp-content/uploads/2022/07/Porsche-930-Turbo-Silver-dream-machine-OPUMO-Magazine.png"
                            model="Porsche 930"
                            description="Благодаря турбонаддуву в 1975 модельном году появилась особенно мощная модификация Porsche 911 – модель 911 Turbo.
                                         С момента выхода на рынок в 1975 модельном году 911 Turbo (изначально получившая название 930) представляла собой модель высшего класса в линейке Porsche 911."
                            onClick={openModal}
                        />
                        {/* Добавьте другие модели классических автомобилей */}
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2023 Porsche Cars World</p>
            </footer>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModalFunction}>&times;</span>
                    <img id="modalImage" src={modalContent.imageSrc} alt="Modal Image" />
                    <p id="modalDescription">
                        <strong>{modalContent.model}</strong>: {modalContent.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
ReactDOM.render(<AppClassic />, document.getElementById('root'));
