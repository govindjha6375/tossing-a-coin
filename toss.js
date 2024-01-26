let head = 0;
let tail = 0;
let coin = document.querySelector(".coins");
let flipBtn = document.querySelector("#flip-coin");
let resetBtn = document.querySelector("#reset");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random()*2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-head 3s forwards";
        },100);
        head++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tail 3s forwards";
        },100);
        tail++;
    }
    setTimeout(updateStats,3000);
    disableButton();
});
function updateStats(){
    document.querySelector("#head-count").textContent = `Heads: ${head}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tail}`;
}
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
resetBtn.addEventListener("click", () =>{
    coin.style.transform = "rotateX(0)";
    head = 0;
    tail = 0;
    updateStats();
    });
