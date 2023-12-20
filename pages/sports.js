
function CarIcon(props) {
    const { imageSrc, model, technicalSpecs, onClick } = props;

    return (
        <div className="car-item" onClick={() => onClick(imageSrc, model, technicalSpecs)}>
            <img src={imageSrc} alt={model} />
            <p>{model}</p>
        </div>
    );
}

// Компонент AppSports, включающий в себя все компоненты для страницы Sports Cars
function AppSports() {
    const [modalContent, setModalContent] = React.useState({
        imageSrc: '',
        model: '',
        technicalSpecs: '',
    });

    const openModal = (imageSrc, model, technicalSpecs) => {
        setModalContent({
            imageSrc: imageSrc,
            model: model,
            technicalSpecs: technicalSpecs,
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
                    <h2>Добро пожаловать в коллекцию спортивных автомобилей!</h2>
                    <p>Испытайте острые ощущения от наших высокопроизводительных спортивных автомобилей и их технического мастерства.</p>
                </section>

                <section className="presentation">
                    <h2>Витрина спортивных автомобилей</h2>
                    <p>Познакомьтесь с передовыми технологиями и производительностью нашей коллекции спортивных автомобилей.</p>

                    <div className="car-row">
                        {/* Используйте CarIcon для каждой модели машины */}
                        <CarIcon
                            imageSrc="https://files.porsche.com/filestore/image/multimedia/none/911-tus-modelimage-sideshot/model/930894f1-6214-11ea-80c8-005056bbdc38/porsche-model.png"
                            model="Porsche 911 Turbo S"
                            technicalSpecs={
                                <ul>
                                    <li>Объем двигателя: 3,8 л</li>
                                    <li>Мощность: 640 лс</li>
                                    <li>Разгон (0-100 km/h): 2.7 секунд</li>
                                    <li>Расход топлива: 11.1 l/100 km</li>
                                    <li>Цена: $203,500</li>
                                </ul>
                            }
                            onClick={openModal}
                        />
                        <CarIcon
                            imageSrc="https://files.porsche.com/filestore/image/multimedia/none/992-c4-gts-modelimage-sideshot/model/6a56f857-d3f3-11eb-80d9-005056bbdc38/porsche-model.png"
                            model="Porsche 911 GTS"
                            technicalSpecs={
                                <ul>
                                    <li>Объем двигателя: 3.0 л</li>
                                    <li>Мощность: 450 лс</li>
                                    <li>Ускорение (0-100 km/h): 3.5 секунд</li>
                                    <li>Расход топлива: 9.7 l/100 км</li>
                                    <li>Цена: $120,700</li>
                                </ul>
                            }
                            onClick={openModal}
                        />
                        <CarIcon
                            imageSrc="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png"
                            model="Porsche 911 GT3 RS"
                            technicalSpecs={
                                <ul>
                                    <li>Объем двигателя: 4,0 л</li>
                                    <li>Мощность: 520 лс</li>
                                    <li>Ускорение (0-100 km/h): 3.2 секунд</li>
                                    <li>Расход топлива: 13.3 l/100 км</li>
                                    <li>Цена: $187,500</li>
                                </ul>
                            }
                            onClick={openModal}
                        />
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
                    <div id="modalDescription">{modalContent.model}</div>
                    <div>{modalContent.technicalSpecs}</div>
                </div>
            </div>
        </div>
    );
}
ReactDOM.render(<AppSports />, document.getElementById('root'));
