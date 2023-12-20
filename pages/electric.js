function CarIcon(props) {
    const { imageSrc, model, technicalSpecs, onClick } = props;

    return (
        <div className="car-item" onClick={() => onClick(imageSrc, model, technicalSpecs)}>
            <img src={imageSrc} alt={model} />
            <p>{model}</p>
        </div>
    );
}

function AppElectric() {
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
                    <h2>Вашему вниманию наша коллекция электрокаров</h2>
                    <p>Откройте для себя будущее вождения с нашими инновационными электромобилями.</p>
                </section>

                <section className="presentation">
                    <h2>Витрина электромобилей</h2>
                    <p>Познакомьтесь с передовыми технологиями и экологичностью нашей коллекции электромобилей.</p>

                    <div className="car-row">
                        <CarIcon
                            imageSrc="data:image/jpeg;base64,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"
                            model="Porsche Taycan 4S"
                            technicalSpecs={
                                <ul>
                                    <li>Максимальная дальность : 365 км</li>
                                    <li>Мощность: 522 лс</li>
                                    <li>Разгон (0-100 km/h): 4.0 секунд</li>
                                    <li>Время полной зарядки: 22.5 минут (0-80%)</li>
                                    <li>Цена: $103,800</li>
                                </ul>
                            }
                            onClick={openModal}
                        />
                        <CarIcon
                            imageSrc="data:image/jpeg;base64,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"
                            model="Porsche Taycan Turbo"
                            technicalSpecs={
                                <ul>
                                    <li>Максимальная дальность : 381 км</li>
                                    <li>Мощность: 670 hp</li>
                                    <li>Разгон (0-100 km/h): 3.2 секунд</li>
                                    <li>Время полной зарядки: 22.5 минут (0-80%)</li>
                                    <li>Цена: $150,900</li>
                                </ul>
                            }
                            onClick={openModal}
                        />
                        <CarIcon
                            imageSrc="https://files.porsche.com/filestore/image/multimedia/none/j1-taycan-tu-s-modelimage-sideshot/model/452affb2-1f25-11ee-8103-005056bbdc38/porsche-model.png"
                            model="Porsche Taycan Turbo S"
                            technicalSpecs={
                                <ul>
                                    <li>Максимальная дальность : 389 км</li>
                                    <li>Мощность: 750 лс</li>
                                    <li>Разгон (0-100 km/h): 2.8 секунд</li>
                                    <li>Время полной зарядки: 22.5 минут (0-80%)</li>
                                    <li>Цена: $185,000</li>
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

ReactDOM.render(<AppElectric />, document.getElementById('root'));
