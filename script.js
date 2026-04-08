const currentMode = document.getElementById("mode");

let isDarkMode = localStorage.getItem('darkMode') === 'true';
applyMode();

function applyMode(){
    if (isDarkMode){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        currentMode.textContent = "Toggle Light Mode";
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        currentMode.textContent = "Toggle Dark Mode";
    }
}

currentMode.addEventListener("click" , function(){
    isDarkMode = !isDarkMode;
    
    localStorage.setItem('darkMode', isDarkMode);

    applyMode();
});