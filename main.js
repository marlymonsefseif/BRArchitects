var body = document.body;
var button = document.getElementById("btn");
function execute(){
    body.classList.toggle("darkmood");
    if(body.classList.contains("darkmood")){
        button.textContent = "☀️";
    }
    else {
        button.textContent = "🌙";
    }
}