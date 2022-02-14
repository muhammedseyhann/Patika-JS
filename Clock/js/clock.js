function isim() {
    let isim = prompt("Lütfen isminizi giriniz: ");
    let nameDom = document.querySelector("#myName");
    nameDom.innerHTML = isim;
}

function showTime() {
    let date = new Date();
    let months = {
        0:"Ocak",
        1:"Şubat",
        2:"Mart",
        3:"Nisan",
        4:"Mayıs",
        5:"Haziran",
        6:"Temmuz",
        7:"Ağustos",
        8:"Eylül",
        9:"Ekim",
        10:"Kasım",
        11:"Aralık"
    }
    let days = {
        0:"Pazar",
        1:"Pazartesi",
        2:"Salı",
        3:"Çarşamba",
        4:"Perşembe",
        5:"Cuma",
        6:"Cumartesi"
    }

    let month = months[date.getMonth()];
    console.log(month)
    let day = days[date.getDay()];
    let daily = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    let timeDom = document.querySelector("#myClock");
    timeDom.innerHTML = `${hour}:${minute}:${seconds} - ${daily} ${month} ${day}`
}

console.log(isim())
console.log((setInterval(showTime, 1000)))