window.addEventListener('scroll',()=>{
    if(scrollY>600){
        document.querySelector('.logo').style.color = "red";
        document.querySelector('ul').style.color = "blue"
       
    }
    else{
        document.querySelector('.logo').style.color = "white";
        document.querySelector('ul').style.color = "white"
    }
})