// to achive scroll 
setInterval(()=>{
    const ms=document.getElementById("abc");
    if(ms!==null){
       ms.scrollTop=ms.scrollHeight;
    }
},10)
