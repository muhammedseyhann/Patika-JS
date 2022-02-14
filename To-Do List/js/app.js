let listAll = document.getElementsByTagName('li');//Tüm liste elemanlarını alma

//Mevcutta bulunan listelere çarpı işareti koyma
for (let i = 0; i < listAll.length; i++) {
    let span = document.createElement("span");
    span.classList ="close"
    let icon = document.createElement("i");
    icon.classList = "bi bi-x-circle-fill";
    span.appendChild(icon);
    listAll[i].appendChild(span);
};

//onclick ile çarpı işaretine basıldığında listeden çıkarma
let close = document.querySelectorAll(".close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let parent = this.parentElement;
        parent.style.display = "none";
    };
};

//tıklanıldığında o göreve tik koyma
for (let i = 0; i < listAll.length; i++) {
    listAll[i].addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    });
};

//listenin en altına yeni eleman ekleme
function newElement() {
    let icerik = document.getElementById("task");
    let value = icerik.value;
    let ul = document.getElementById("list");
    
    if (value == "") {
        $(".error").toast("show");
    }else {
        $(".success").toast("show");
        icerik.value = "";
        let li = document.createElement("li");
        li.innerHTML = value;
        let span = document.createElement("span");
        span.classList ="close"
        let icon = document.createElement("i");
        icon.classList = "bi bi-x-circle-fill";
        span.appendChild(icon);
        li.appendChild(span);
        ul.appendChild(li);
        span.onclick = function() {
            let parent = this.parentElement;
            parent.style.display = "none";
        };
    };
};

