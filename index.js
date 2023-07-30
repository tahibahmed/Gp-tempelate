

const scrolling = ()=>{
    let atttemp = document.querySelectorAll('#atttemp')[0]
    console.log(atttemp)
    let chqwindow = window.scrollY;
    if(chqwindow < 550){
        atttemp.classList.remove('chnageColor')
    }else{
        atttemp.classList.add('chnageColor')
    }
}

window.addEventListener('scroll',scrolling)


   


