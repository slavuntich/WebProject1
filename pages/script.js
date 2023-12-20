
function CarIcon(props) {
    const { imageSrc, model, description, onClick } = props;

    return (
        <div className="car-item" onClick={() => onClick(imageSrc, model, description)}>
            <img src={imageSrc} alt={model} />
            <p>{model}</p>
        </div>
    );
}
function App() {
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
                    <h2>Добро пожаловать в мир автомобилей Porsche!</h2>
                    <p>Исследуйте различные сферы автомобильного мира с нашей разнообразной коллекцией автомобилей Porsche.</p>
                </section>

                <section className="presentation">
                    <h2>Наша витрина автомобилей</h2>
                    <p>Откройте для себя лучший выбор автомобилей Porsche, каждый из которых предлагает уникальные впечатления от вождения.</p>

                    <div className="car-row">
                        <CarIcon
                            imageSrc="https://images-porsche.imgix.net/-/media/F37C21DB85FB4547A771546059EAE61B_04ACE8C7900149B6A13080AB1A0EBC9C_00X_Easy-Model-Selector_04_CL16Z05IX0001_1_GL_5_175_rgb?w=1920&h=1080&q=45&crop=faces%2Centropy%2Cedges&auto=format"
                            model="Porsche 993"
                            description="Легендарная модель, представленная в 1963 году, олицетворяющая спортивные традиции марки. Эта модель стала иконой автомобильной индустрии и пользуется высоким спросом среди коллекционеров и ценителей классических автомобилей."
                            onClick={openModal}
                        />
                        <CarIcon
                            imageSrc="https://files.porsche.com/filestore/image/multimedia/none/911-tus-modelimage-sideshot/model/930894f1-6214-11ea-80c8-005056bbdc38/porsche-model.png"
                            model="Porsche 911"
                            description="Современный дизайн Porsche 911 сочетает в себе элегантность и агрессивность, с сохранением узнаваемых черт легендарной модели. Использование высококачественных материалов и передовых технологий в проектировании."
                            onClick={openModal}
                        />
                        <CarIcon
                            imageSrc="https://files.porsche.com/filestore/image/multimedia/none/j1-taycan-modelimage-sideshot/model/e36a18ca-fffb-11eb-80dd-005056bbdc38/porsche-model.png"
                            model="Porsche Taycan"
                            description="Это не просто автомобиль. Taycan — это мощный электрический спортивный седан, способный на впечатляющее ускорение. Электрический двигатель обеспечивает мгновенное и плавное ускорение, позволяя вам ощутить потрясающую динамику от каждого момента вождения."
                            onClick={openModal}
                        />
                        <CarIcon
                            imageSrc="https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-coupe-s-phev-modelimage-sideshot/model/bef1e76d-52ff-11ee-8107-005056bbdc38/porsche-model.png"
                            model="Porsche Cayenne"
                            description="Porsche Cayenne предоставляет просторный и уютный интерьер, идеально подходящий для семейных поездок. Прекрасно спроектированные сиденья и множество опций настройки обеспечивают комфорт для всех пассажиров."
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
                    <p id="modalDescription">
                        <strong>{modalContent.model}</strong>: {modalContent.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));