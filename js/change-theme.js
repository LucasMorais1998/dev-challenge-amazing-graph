const html = document.querySelector('html');
const btnChangeTheme = document.querySelector('#btn-change-theme');
let darkThemeIsActive = false;

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const ligthTheme = {
    gray: getStyle(html, '--gray'),
    background: getStyle(html, '--background'),
}

const darkTheme = {
    gray: '#bbb',
    background: '#111',
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key]);
    });
}

btnChangeTheme.addEventListener('click', () => {

    if(!darkThemeIsActive) {
        changeColors(darkTheme)
        btnChangeTheme.classList.toggle('fa-moon');
        btnChangeTheme.classList.toggle('fa-sun');
        darkThemeIsActive = true;

    } else {
        changeColors(ligthTheme)
        btnChangeTheme.classList.toggle('fa-sun');
        btnChangeTheme.classList.toggle('fa-moon');
        darkThemeIsActive = false;
    }
    
});


