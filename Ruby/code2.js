function vanish(){
  var kaninchen= document.getElementById('kaninchen')
if(kaninchen.classList.contains("hidden")){
  kaninchen.classList.remove ("hidden");
  kaninchen.classList.add("show");
}
else{
  kaninchen.classList.remove ("show");
  kaninchen.classList.add ("hidden");
}
}