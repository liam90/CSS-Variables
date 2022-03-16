const box = document.querySelector('.box');
const boxStyles = getComputedStyle(box);
const boxMainColor = boxStyles.getPropertyValue('--box__main__color');

const header = document.querySelector('#main__header');
header.style.setProperty('--header__bg__color', boxMainColor);