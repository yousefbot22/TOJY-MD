// typing effect
const text = ["مطور مواقع", "مطور تطبيقات", "مصمم واجهات"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type(){
  if(charIndex < text[index].length){
    typingElement.innerHTML += text[index][charIndex];
    charIndex++;
    setTimeout(type,100);
  }else{
    setTimeout(erase,2000);
  }
}

function erase(){
  if(charIndex > 0){
    typingElement.innerHTML = text[index].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase,50);
  }else{
    index = (index+1)%text.length;
    setTimeout(type,500);
  }
}

document.addEventListener("DOMContentLoaded", function(){type();});
