console.log('js conneted');

const optionButton = document.querySelector('.cross-button')
let toggle = optionButton.style.getPropertyValue("--toggle")
console.log(toggle);
const handleOptionEffect = () =>  optionButton.style.getPropertyValue("--toggle") === 'true' ?optionButton.style.cssText = '--rotate:0deg;--slide:center;--toggle:false;':optionButton.style.cssText = '--rotate:25deg;--slide:100px;--toggle:true;' 

document.addEventListener('click',handleOptionEffect)