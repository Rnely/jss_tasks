const x = document.getElementsByTagName("strong");
function highlight (){
for(let i = 0; i < x.length; i++){
x[i].style.color = "red";
}
}

function return_normal (){
for(let i = 0; i < x.length; i++){
x[i].style.color = "black";
}
}