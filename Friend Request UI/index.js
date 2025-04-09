let stranger = document.querySelector("h2");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");



add.addEventListener("click", function(){
    stranger.innerText="Friend";
    stranger.style.color="green"
})
remove.addEventListener("click",function(){
    stranger.innerHTML="Stranger";
     stranger.style.color="red"
})