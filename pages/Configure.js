// configurator.js

const carModels = [
    {
        id: 1,
        name: 'Porsche 911',
        colors: ['Yellow', 'Silver', 'Pink'],
        images: { Yellow: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiuWTQ4ngfNBYKyXdAxQ9%25tenfIOuw6eu8q%25LAlmP3GeSvg3%25n3IaGuyO3T7KFkuX9A4khYafO',
                  Silver: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiuWTQ4ngfNsRI0DyJGcT891PfIOuw6eu8q%25LAlmP3GeSvg3%25n3IaGuyO3T7KFkuX9A4khYafO',
                   Pink: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiuWTQ4ngfNdRKyXdAxQ9%25tenfIOuw6eu8q%25LAlmP3GeSvg3%25n3IaGuyO3T7KFkuX9A4khYafO' },
    },
    {
        id: 2,
        name: 'Porsche Cayenne',
        colors: ['Red', 'Blue', 'White'],
        images: { Red: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9V7KMHmnhQ5ys9gfNKYL0Dy1pQ9%25tWTfIjMREDrxA2L8uJWRaVWCAxFH2WCYT%25P3TexLeuqXWIJZggf%25oWjrHwo0nq8J',
                  Blue: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOm%25c60KfzDWTQgHtaif3h0DyNJQ9%25tWTfIjMREDrxA2L8uJWRaVWCAxFH2WCYT%25P3TexLeuqXWIJZggf%25oWjrHwo0nq8J',
                  White: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO337KMHmnhQ5ys9gfNKYL0Dy1pQ9%25tWTfIjMREDrxA2L8uJWRaVWCAxFH2WCYT%25P3TexLeuqXWIJZggf%25oWjrHwo0nq8J' },
    },
    {
        id: 3,
        name: 'Porsche Taycan',
        colors: ['Black', 'Gray', 'Snowwhite'],
        images: { Black: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3k7KMDNOhQ5XS9gfNa3KyXccVQ9%25tWtfIjMREDrs6eWR6kUjGl7fSHbXY40wjEwr1F69skkhQXC6%25Il3CgP1Ds',
                  Gray: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3E7KMDNOhQ5XS9gfNa3KyXccVQ9%25tWtfIjMREDrs6eWR6kUjGl7fSHbXY40wjEwr1F69skkhQXC6%25Il3CgP1Ds',
                  Snowwhite: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMDNOhQ5XS9gfNa3KyXccVQ9%25tWtfIjMREDrs6eWR6kUjGl7fSHbXY40wjEwr1F69skkhQXC6%25Il3CgP1Ds' },
    },
    // Добавьте другие модели и цвета
];

function Configurator() {
    const [selectedModel, setSelectedModel] = React.useState(carModels[0]);
    const [selectedColor, setSelectedColor] = React.useState(selectedModel.colors[0]);

    const handleModelChange = (model) => {
        setSelectedModel(model);
        setSelectedColor(model.colors[0]);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    return (
        <div className="configurator">
            <header className="header-main">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/ru/archive/5/55/20071205223601%21Porsche_logo.png" alt="Porsche Logo" />
                </div>
                <div className="title">
                    <h1>Porsche Car Configurator</h1>
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
            <div className="left-panel">
                <img
                    src={selectedModel.images[selectedColor]}
                    alt={selectedModel.name}
                    style={{ width: '720px', height: 'auto' }} // Здесь установите фиксированный размер
                />
            </div>
            <div className="right-panel">
                <div>
                    <label>Choose Model:</label>
                    <select onChange={(e) => handleModelChange(carModels.find((model) => model.id === parseInt(e.target.value)))}>
                        {carModels.map((model) => (
                            <option key={model.id} value={model.id}>
                                {model.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Choose Color:</label>
                    <select onChange={(e) => handleColorChange(e.target.value)}>
                        {selectedModel.colors.map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <h2>Your Configuration:</h2>
                    <p>Model: {selectedModel.name}</p>
                    <p>Color: {selectedColor}</p>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Configurator />, document.getElementById('root'));