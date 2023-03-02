const togglebtn = document.getElementById("hamburger-menu");
const nav_menu = document.getElementsByClassName("nav_menu")[0];
const left_sliding_btn = document.getElementsByClassName("left_sliding_btn")[0];
const right_sliding_btn =
  document.getElementsByClassName("right_sliding_btn")[0];
let totalSlideSizeSum = 0;
onload=()=>{
    const togglebtn = document.getElementById("hamburger-menu");
    const nav_menu = document.getElementsByClassName("nav_menu")[0];
    const left_sliding_btn = document.getElementsByClassName("left_sliding_btn")[0];
    const right_sliding_btn = document.getElementsByClassName("right_sliding_btn")[0];
    let totalSlideSizeSum = 0;
    const sliderElement = document.getElementsByClassName('card_slider')[0];
    let slideContainerWidth = document.querySelector('.card_holder').getBoundingClientRect().width;
    let slideMovedBy = document.querySelector('.card_slider').getBoundingClientRect().width;
    togglebtn.addEventListener('click',()=>{
        nav_menu.classList.toggle('open');
    });
    right_sliding_btn.addEventListener('click',()=>{
        slideTheContainer(-1);
    });
    left_sliding_btn.addEventListener('click',()=>{
        slideTheContainer(1)
    });
    function slideTheContainer(sign){
        totalSlideSizeSum += (slideContainerWidth * sign);
        let slideBy = totalSlideSizeSum % slideMovedBy;
        if(Math.floor(slideBy)>0){
            slideBy= slideContainerWidth - slideMovedBy;
            totalSlideSizeSum = slideBy;
        }
        document.getElementsByClassName('card_slider')[0].style.left = slideBy+"px";
    }
}
