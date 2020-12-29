const container=document.querySelector('.container');
const btn=document.querySelector('#btn');
btn.addEventListener('click',()=>{
    console.log("Clicked");
    var x=Math.floor(Math.random()*256);
    var y=Math.floor(Math.random()*256);
    var z=Math.floor(Math.random()*256);
    var bgColor = "rgba(" + x + "," + y + "," + z +0.4+ ")";
    // console.log(x,y,z)
    container.style.backgroundColor=bgColor;
});