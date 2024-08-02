let energyCat = document.getElementById("energy").innerHTML;
let powerCat= document.getElementById("Power").innerHTML -1 ;
let countCat = document.getElementById("count").innerHTML ;
//let countMinute =   document.getElementById("countHour").innerHTML;
//let countPower =   document.getElementById("costPower").innerHTML;

function tapCat(){

    if(energyCat>= powerCat){
        energyCat = energyCat - powerCat
        countCat =  Number(countCat) + Number(powerCat)

        document.getElementById("energy").innerHTML = energyCat
        document.getElementById("count").innerHTML = countCat

    }
  }
document.getElementById('buttonCat').addEventListener("mousedown",newPoint)

function newPoint(event){
    if(energyCat >= powerCat){
        let newImg = document.createElement("img")
        newImg.src = "opo/laz-otrezka-125-10_500x500_024.jpg"
        newImg.style.position = "absolute";
        newImg.style.width = "20px";
        newImg.style.height = "20px";
        newImg. style.left= event.pageX+"px";
        newImg. style.top= event.pageY+"px";
        document.getElementById("buttonCat").appendChild(newImg);

        let startPoint = event.pageY;
        let op = 100;
        let animationPoint = setInterval(function(){
             startPoint = startPoint -2;
             newImg.style.top = startPoint +"px"; 
             newImg.style.filter = "opacity("+op+"%)";
             op--;
        },10)
        setTimeout(function(){
            clearInterval(animationPoint);
            newImg.remove();
        },1000);
    }

    countCat += document.getElementById("countTur").innerHTML / 120;
    document.getElementById("count").innerHTML = Math.floor(countCat);
}

 
setInterval(addEnergy, 500);

function addEnergy(){
    if(energyCat <= 100 - powerCat){
        energyCat += powerCat;
        document.getElementById("energy").innerHTML = energyCat;
    }
    countCat = Number(countCat) + document.getElementById("countTur").innerHTML / 120;
    document.getElementById("count").innerHTML = Math.floor(countCat);
}





function buy(){
    if(countCat >= document.getElementById("costPower").innerHTML){
        powerCat++;
        document.getElementById("Power").innerHTML = powerCat + 1;
        countCat -=  document.getElementById('costPower').innerHTML
        document.getElementById('costPower').innerHTML *= 5;
        



    } 
}

function openSetWindow(){
    document.getElementById("testingSetWindow").showModal();
}
closeSetWindow
function closeSetWindow(){
    document.getElementById("testingSetWindow").close();
}

function buyCard(numberCard){
    if(countCat >= document.getElementById("buyCard"+numberCard).innerHTML){
        countCat = Number(countCat) - document.getElementById("costCardId"+numberCard).innerHTML;
        document.getElementById("countHour").innerHTML = Number (document.getElementById("countHour").innerHTML) + Number(document.getElementById("countCardId"+numberCard).innerHTML);
         document.getElementById("levelCardId" + numberCard).innerHTML = Number(document.getElementById("levelCardId"+numberCard).innerHTML) + 1;
         document.getElementById("costCardId" + numberCard).innerHTML = Number(document.getElementById("costCardId"+numberCard).innerHTML) * 2;
         document.getElementById("countCardId"+ numberCard).innerHTML = Math.floor (Number()* 1.5);
    }    
}