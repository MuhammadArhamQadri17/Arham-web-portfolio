const img = document.getElementById('hoverImage');

img.addEventListener('mouseenter', () => {
  img.src = 'image/product-11-2.jpg'; // Image to show on hover
});

img.addEventListener('mouseleave', () => {
  img.src = 'image/product-11-1.jpg'; // Revert to original
});





  const carousel = document.getElementById('carouselExampleSlidesOnly');
  const dots = document.querySelectorAll('.custom-indicators .dot');

  carousel.addEventListener('slid.bs.carousel', function (e) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[e.to].classList.add('active');
  });




 window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navigation_wrapper');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



function submit() {
let a=document.getElementById('check').value;
let b=document.getElementById('check2').value;
let c=document.getElementById('check3').value;

if (a==""  ||  b==""  ||  c=="")
  alert("please fill the input first ⚠️")

else 
  alert("Thakhs to contact us 😊")

}




