const testemonial = document.querySelector(".testmnial-section");
const prev =document.querySelector(".left-arrow");
const next =document.querySelector(".right-arrow");
const allTestemonial= document.querySelectorAll(".testmnial-section");
const allArray =Array.from(allTestemonial);
const count = allArray.length;
let index=0;
prev.style.cursor="auto";
next.style.cursor="pointer";

const pointer = () =>{
    
    if(index === 0){
        prev.style.cursor="auto";
        next.style.cursor="pointer";
    }
    else if(index ===  Math.floor(allArray.length/2) -1){
        prev.style.cursor="pointer";
        next.style.cursor="auto";
        
    }
    else{
        prev.style.cursor="pointer";
        next.style.cursor="pointer";
    }
}



next.addEventListener("click",() => {
    if(index < 2){
        pointer();
    }else{
        return;
    }
    
    if(index>=0 && index < Math.floor(allArray.length/2)){
        
        allArray[index].classList.add("d-none");
        allArray[index+3].classList.remove("d-none");   
        index++;
    }
   
    
    
})

prev.addEventListener("click", () => {
    if(index > 0){
        pointer();
    }
    else{
        return;
    }
    if(index>0 && index <= Math.floor(allArray.length/2)){
        
        allArray[index + 2].classList.add("d-none");
        allArray[index - 1].classList.remove("d-none");   
        index--;
    }
  
    if(index==0){
        pointer();
    }
})
const prev2 = document.querySelector(".left-arrow2");
const next2 = document.querySelector(".right-arrow2");
const allTestemonial2= document.querySelectorAll(".testmnial-section");
const allArray2= Array.from(allTestemonial2);
let index2=0;




const testemonialMobile = window.matchMedia("(max-width:744px)");
if(testemonialMobile.matches){
    
    next2.addEventListener("click", () => {
        if(index2 >= 4){
            return;
        }
        if(index2 >=0 && index2 <allArray2.length){
            
                allArray2[index2].classList.add("none");
                allArray2[index2 + 1].classList.add("active12");
                index2++;
                
               
            }
    })
    prev2.addEventListener("click", () => {
        if(index2<=0){
            return;
        }
        if(index2 >=0 && index2 <allArray2.length){
            allArray2[index2].classList.remove("active12");
            allArray2[index2 - 1].classList.remove("none");
            index2--;
           

        }
    })

}

