const circle = document.querySelector('.circle')
let nav = document.querySelectorAll('nav a')
let main_all = document.querySelectorAll('main *')
let mouseX
let mouseY
window.addEventListener("mousemove", function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
});
for(let n of nav){
    n.addEventListener('mouseover',function(){circle.classList.add('cursor_style')})
    n.addEventListener('mouseout',function(){circle.classList.remove('cursor_style')})
}
for(let i of main_all){
    i.addEventListener('mouseover',function(){circle.classList.add('cursor_style2')})
    i.addEventListener('mouseout',function(){circle.classList.remove('cursor_style2')})
}