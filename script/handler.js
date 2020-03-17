const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 150;

function shadow(e){
    const {offsetWidth: width, offsetHeight: height} = hero; 
    let {offsetX: x, offsetY: y} = e;

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xWalk = math.round((x / width * walk) - (walk / 2));
    const yWalk = math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 blue,
    ${xWalk * -1}px ${yWalk}px 0 red
    `;
};