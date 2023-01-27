let red_box=document.querySelector('.red-box')
let green_box=document.querySelector('.green-box')

let countX=0;
let countY=0;
let x=window.innerWidth
let y=window.innerHeight;
document.body.addEventListener('keydown',(e)=>{
    console.log(countX)
    switch(e.key){
        case 'ArrowUp':
            red_box.style.top=`${countY -=15}px`
            break;
        case 'ArrowDown': 
        red_box.style.top=`${countY+=15}px` 
        break;
        
        case 'ArrowRight':
         red_box.style.left=`${countX+=15}px`
         break;
         
        case 'ArrowLeft':
            red_box.style.left=`${countX-=15}px` 
    }
    if (countX > x/2 - 245 && countX < x/2 + 125 && countY > y/2 - 245 && countY < y/2 + 125 ){
        green_box.style.backgroundColor='yellow'
    }else{
        green_box.style.backgroundColor='green'
    }
    
})
