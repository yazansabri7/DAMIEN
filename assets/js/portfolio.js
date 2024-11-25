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
const allArray2 =[...allTestemonial2];
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
/* start first section show*/
const show = document.querySelectorAll(".one");
const oneShow =[...show];
const left = document.querySelector(".rows2 .left-one ");
const right= document.querySelector(".rows2 .right-one ");
let count1=0;

/* end first section show*/



/* start second section show*/


const showtwo = document.querySelectorAll(".two");
const twoShow =[...showtwo];
const lefttwo = document.querySelector(".rows2 .left-two ");
const righttwo= document.querySelector(".rows2 .right-two ");
let count2=0;


/*end second section show */



/* start third section show*/


const show3 = document.querySelectorAll(".three");
const show33 =[...show3];
const left3 = document.querySelector(".rows2 .left-three ");
const right3= document.querySelector(".rows2 .right-three ");
let count3=0;


/*end third section show */


const showMobile = window.matchMedia("(max-width:525px)");
if(showMobile.matches){
    
    right.addEventListener("click" , () => {
        if(count1>=3){
            return;
        }
        if(count1>=0 && count1 < oneShow.length -1){
            oneShow[count1].classList.add("noneShow");
            oneShow[count1 + 1].classList.add("activeShow");
            count1++;
           
            
            
        }
        
    })


    left.addEventListener("click" , () => {
        if(count1 <= 0){
            return;
        }
        if(count1>=0 && count1 < oneShow.length ){
            oneShow[count1].classList.remove("activeShow");
            oneShow[count1 - 1].classList.remove("noneShow");
            count1--;
            
            
            
        }
    })




    righttwo.addEventListener("click" , () => {
        if(count2>=3){
            return;
        }
        if(count2>=0 && count2 < twoShow.length -1){
            twoShow[count2].classList.add("noneShow");
            twoShow[count2 + 1].classList.add("activeShow");
            count2++;
           
            
            
        }
        
    })
    lefttwo.addEventListener("click" , () => {
        if(count2<=0){
            return;
        }
        if(count2>=0 && count2 < twoShow.length){
            twoShow[count2].classList.remove("activeShow");
            twoShow[count2 - 1].classList.remove("noneShow");
            count2--;
           
            
            
        }
        
    })
    right3.addEventListener("click" , () => {
        if(count3>=3){
            return;
        }
        if(count3>=0 && count3 < show33.length -1){
            show33[count3].classList.add("noneShow");
            show33[count3 + 1].classList.add("activeShow");
            count3++;
           
            
            
        }
        
    })
   
    left3.addEventListener("click" , () => {
        if(count3<=0){
            return;
        }
        if(count3>=0 && count3 < show33.length){
            show33[count3].classList.remove("activeShow");
            show33[count3 - 1].classList.remove("noneShow");
            count3--;
           
            
            
        }
        
    })
   


   
    
}



