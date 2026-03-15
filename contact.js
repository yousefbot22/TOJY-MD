const text = "TOJI MD";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);
i++;

setTimeout(typing,120);

}

}

typing();


// particles

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
color:{value:"#ffffff"},
line_linked:{enable:true,opacity:0.2},
move:{speed:1}
}
});


// scroll top button

let btn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){

btn.style.display="block";

}else{

btn.style.display="none";

}

};

btn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};
