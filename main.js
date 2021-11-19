var canvas= document.getElementById("myCanvas");
var ctx =canvas.getContext("2d");
var heightofrover= 90;
var widthofrover= 100;
var xofrover=10;
var yofrover=10;
var backgroundimage= "mars.jpg";
var roverimage= "rover.png";
function add() {
bgtag=new Image();
bgtag.onload=uploadbg;
bgtag.src=backgroundimage;
rovertag=new Image();
rovertag.onload=uploadroverimg;
rovertag.src=roverimage;
}
function uploadbg() {
    ctx.drawImage(bgtag,0,0,canvas.width,canvas.height);
}
function uploadroverimg(){
    ctx.drawImage(rovertag,xofrover,yofrover,widthofrover,heightofrover);
}
window.addEventListener("keydown",my_keydown)
