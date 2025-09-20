//? Access Elements 
let
    firstButton = document.querySelector('.btn1'),
    preLoader = document.querySelector('#loader'),
    secondButton = document.querySelector('.btn2'),
    thirdButton = document.querySelector('.btn3'),
    copyBtn = document.getElementById('copyBtn'),
    copyText = document.getElementById('copyText'),
    selectColorCombination = document.querySelector('.colorCombination');

let
    rgb1 = '#255ffa',
    rgb2 = '#8e5b5a',
    rgb3 = '#7a1ead',
    myHexValues,
    colorCode,
    color;

//?  Function logic

const hexValues = (() => {
    myHexValues = '0123456789abcdef';
    color = '';
    for (let i = 0; i < 6; i++) {
        colorCode = myHexValues[Math.floor(Math.random() * 16)];
        color += colorCode;
    }
    color = '#' + color;
    return color;
});

const changeColor = (myButton, color) => {
    if (selectColorCombination.value === 'Three Colors') {
        if (myButton.className.includes('btn1')) {
            document.body.style.backgroundImage = `linear-gradient(to right top,${color},${rgb2},${rgb3})`;
            copyText.innerHTML = `background-image:linear-gradient(to right top ,${color},${rgb2},${rgb3});`;
        }
        else if (myButton.className.includes('btn2')) {
            document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},${color},${rgb3})`;
            copyText.innerHTML = `background-image:linear-gradient(to right top ,${rgb1},${color},${rgb3});`;
        }
        else {
            document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},${rgb2},${color})`;
            copyText.innerHTML = `background-image:linear-gradient(to right top ,${rgb1},${rgb2},${color});`;
        }
    }
    else if (selectColorCombination.value === 'Two Colors') {
        if (myButton.className.includes('btn1')) {
            document.body.style.backgroundImage = `linear-gradient(to right top,${color},${rgb2})`;
            copyText.innerHTML = `background-image:linear-gradient(to right top ,${color},${rgb2});`;
        }
        else {
            document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},${color})`;
            copyText.innerHTML = `background-image:linear-gradient(to right top ,${rgb1},${color});`;
        }
    }
    else if (selectColorCombination.value === 'One Color') {
        document.body.style.backgroundImage = `linear-gradient(${color},${color})`;
        copyText.innerHTML = `background-color: ${color};`;
    }
    myButton.innerText = `${color}`;
    myButton.style.backgroundColor = `${color}`;
    myButton.style.borderColor = `${color}`;
}

const handleButton1 = (() => {
    rgb1 = hexValues();
    changeColor(firstButton, rgb1);
});

const handleButton2 = (() => {
    rgb2 = hexValues();
    changeColor(secondButton, rgb2);
})

const handleButton3 = (() => {
    rgb3 = hexValues();
    changeColor(thirdButton, rgb3);
})

const copyCode = () => {
    navigator.clipboard.writeText(copyText.innerText);
    copyBtn.innerText = 'Coppied!..'
    setTimeout(() => {
        copyBtn.innerText = 'Copy Gradient'
    }, 1000)
}

const manageColorBtns = () => {
    if (selectColorCombination.value === 'One Color') {
        secondButton.style.display = 'none';
        thirdButton.style.display = 'none';
        document.body.style.backgroundImage = `linear-gradient(${rgb1},${rgb1})`;
        copyText.innerText = `background-color: ${rgb1};`;
    }
    else if (selectColorCombination.value === 'Two Colors') {
        thirdButton.style.display = 'none';
        firstButton.style.display = 'inline-block';
        secondButton.style.display = 'inline-block';
        document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},${rgb2})`;
        copyText.innerText = `background-image:linear-gradient(to right top ,${rgb1},${rgb2});`;
    }
    else {
        firstButton.style.display = 'inline-block';
        secondButton.style.display = 'inline-block';
        thirdButton.style.display = 'inline-block';
        document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},${rgb2},${rgb3})`;
        copyText.innerText = `background-image:linear-gradient(to right top ,${rgb1},${rgb2},${rgb3});`;
    }
}

const showMyWebsite = () => {
    preLoader.style.display = 'none';

    firstButton.innerText = rgb1;
    firstButton.style.backgroundColor = rgb1;
    firstButton.style.borderColor = `2px solid ${rgb1}`;
    secondButton.innerText = rgb2;
    secondButton.style.backgroundColor = rgb2;
    secondButton.style.borderColor = `2px solid ${rgb2}`;
    thirdButton.innerText = rgb3;
    thirdButton.style.backgroundColor = rgb3;
    thirdButton.style.borderColor = `2px solid ${rgb3}`;

    document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},${rgb2},${rgb3})`;
    copyText.innerHTML = `background-image:linear-gradient(to right top ,${rgb1},${rgb2},${rgb3});`;
}

// * Adding Events
firstButton.addEventListener('click', handleButton1);
secondButton.addEventListener('click', handleButton2);
thirdButton.addEventListener('click', handleButton3);
copyBtn.addEventListener('click', copyCode);
copyText.addEventListener('click', copyCode);
selectColorCombination.addEventListener('click', manageColorBtns);
onload = setTimeout(showMyWebsite, 2000);