let nav_container = document.getElementById('nav_container');



menu_logo.addEventListener('click', () => {

        nav_container.classList.toggle('nav_container_toggle');

});

//portfolio functions

const container_img = document.querySelector('.container-works');
const pointer_img = document.querySelectorAll('.puntos');

pointer_img.forEach(( punto ,  i) =>{
        pointer_img[i].addEventListener('click' ,()=>{
                let position = i;
                let operation = position * -50;

                container_img.style.transform = `translateX(${ operation }%)`; 

                pointer_img.forEach( (punto , i)=>{
                        pointer_img[i].classList.remove('activo');
                })
                pointer_img[i].classList.add('activo');
        });
});



