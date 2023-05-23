const nextElement=document.querySelector(".next");
const prevElement=document.querySelector(".prev");
const ContainerElement=document.querySelector(".image_container");

let currentImg=1;


nextElement.addEventListener("click",()=>{
    currentImg++;
    updateImg();
})


prevElement.addEventListener("click",()=>{
   currentImg--;
   updateImg2(); 
})

function updateImg(){
if(currentImg<=4){ 
    let offset= (currentImg-1)*(-500);
    offset=String(offset)+"px";
    console.log(offset);
    ContainerElement.style.transform=`translateX(${offset})`;
}else{
    currentImg=1;
    ContainerElement.style.transform="translateX(0px)";
}

}

function updateImg2(){
    if(currentImg!=0){
        let offset=(currentImg-1)*(-500);
        offset=String(offset)+"px";
        ContainerElement.style.transform=`translateX(${offset})`
    }else{
        currentImg=4;
        ContainerElement.style.transform="translateX(-1500px)";
    }
}