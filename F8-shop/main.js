const bclickRight = document.getElementById('fs-right');
const bclickLeft = document.getElementById('fs-left');
const imgNumber = document.querySelectorAll('.slider-content-left-top img');
let index =0;
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li');
console.log(imgNumberLi);
bclickRight.addEventListener('click', function() { 
    index=index+1;
    if(index > imgNumber.length - 1){
        index = 0;
    }
	document.querySelector(".slider-content-left-top").style.right=index*100+"%";
});

bclickLeft.addEventListener('click', function() {
    index = index-1;
    if(index<=0){
         index = imgNumber.length - 1;
    }
    document.querySelector(".slider-content-left-top").style.right=index*100+"%";
    });
imgNumberLi.forEach(function(images, index){
    images.addEventListener('click', function(){
        removeactive();
        document.querySelector(".slider-content-left-top").style.right=index*100+"%";
        images.classList.add("active");
     })

 })
function removeactive(){
    let imgactive = document.querySelector('.active');
    imgactive.classList.remove("active");

}
// Ảnh chạy
function imgAuto(){
    index += 1;
    if(index > imgNumber.length-1){
        index=0;
    }
    removeactive();
    document.querySelector(".slider-content-left-top").style.right=index*100+"%";
    imgNumberLi[index].classList.add("active");
}
setInterval(imgAuto,4000) // Hàm sét time chạy
