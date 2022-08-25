const btn  = document.querySelectorAll(".dropdown")

// showButton.addEventListener("click", () => {
//    showContainer.classList.remove("hidden")
//    boldHeading.style.fontWeight = "bold"
//});

btn.forEach(function(button) {
    button.addEventListener('click', function(){
        this.classList.toggle('show');

        if(button.classList.contains('show')){
            btn.forEach(function(button){
                button.classList.remove('show');
            })
            button.classList.toggle('show');
        }
    });
});

console.log(btn);