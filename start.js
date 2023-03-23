window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        window.application.timers.forEach( id => {
            clearInterval(id);
        })
        window.application.screens[screenName]();
     },
    renderBlock: function (blockName, container) {
        if (window.application.blocks[blockName]) {
            window.application.blocks[blockName](container);
        } else {
            console.log('Такого блока нет');
        }
    },
    timers: []
};

const app = document.querySelector('.app');
function renderStart(container) {
    const box = document.createElement('div');
    box.classList = 'box';

    const introText = document.createElement ('h1');
    introText.textContent = 'Выбери сложность';
    introText.classList = 'introText';

    const numberBox = document.createElement('div');
    numberBox.classList = 'number';

    const numberBox1 = document.createElement('div');
    numberBox1.classList = 'numberBox';
    numberBox1.textContent = '1';

    const numberBox2 = document.createElement('div');
    numberBox2.classList = 'numberBox';
    numberBox2.textContent = '2';

    const numberBox3 = document.createElement('div');
    numberBox3.classList = 'numberBox';
    numberBox3.textContent = '3';

    const button = document.createElement('button');
    button.textContent = 'Старт';
    button.classList = 'btn btn__login';

    button.addEventListener('click', () => {

    });

    box.append(introText);
    numberBox.append(numberBox1);
    numberBox.append(numberBox2);
    numberBox.append(numberBox3);
    box.append(numberBox);
    app.append(box);
    box.append(button);



};

window.application.blocks['startButton'] = renderStart;
