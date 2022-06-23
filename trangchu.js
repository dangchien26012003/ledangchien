var kichThuoc = document.getElementsByClassName('banner')[0].clientWidth;
var chuyen = 0;
var chuyenSlide = document.getElementsByClassName('slide')[0]
var img = chuyenSlide.getElementsByTagName('img')
var max = kichThuoc * (img.length-1);
function next() {
    if(chuyen < max){
        chuyen += kichThuoc; 

    }else{
        chuyen = 0
    }
    chuyenSlide.style.marginLeft = '-' + chuyen + 'px'
}

function back() {
    if(chuyen == 0){
        
        chuyen = max
    }else{
        chuyen -= kichThuoc; 
    }
    chuyenSlide.style.marginLeft = '-' +chuyen + 'px'
}


setInterval(next, 2000)