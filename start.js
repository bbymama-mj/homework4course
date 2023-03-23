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
    numberBox1.classList = 'numberBox1';
    numberBox1.textContent = '1';

    const numberBox2 = document.createElement('div');
    numberBox2.classList = 'numberBox2';
    numberBox2.textContent = '2';

    const numberBox3 = document.createElement('div');
    numberBox3.classList = 'numberBox3';
    numberBox3.textContent = '3';

    const button = document.createElement('button');
    button.textContent = 'Старт';
    button.classList = 'btn btn__login';

    numberBox1.addEventListener('click', () => {
        numberBox1.classList = 'numberChoose';
        numberBox2.classList.remove('numberChoose');
        numberBox2.classList.add('numberBox1');
        numberBox3.classList.remove('numberChoose');
        numberBox3.classList.add('numberBox2');
    })

    numberBox2.addEventListener('click', () => {
        numberBox2.classList = 'numberChoose';
        numberBox1.classList.remove('numberChoose');
        numberBox1.classList.add('numberBox1');
        numberBox3.classList.remove('numberChoose');
        numberBox3.classList.add('numberBox2');
    })

    numberBox3.addEventListener('click', () => {
        numberBox3.classList = 'numberChoose';
        numberBox1.classList.remove('numberChoose');
        numberBox1.classList.add('numberBox1');
        numberBox2.classList.remove('numberChoose');
        numberBox2.classList.add('numberBox2');
    })

    button.addEventListener('click', () => {
        
        window.application.blocks.screenGame();
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
