/*
Adım 1: Kullanıcıdan tarih ve yazacağı metni alın.

Adım 2: Bu bilgiyi localStorage'a kaydedin.

Adım 3: Sayfa yenilendiğinde, tüm günlükleri gösterin. 
*/
function isAccepted(msg, ...keys){
    const value = prompt(msg);

    if (keys.includes(value)) {
        return value;
    }else{
        return isAccepted(msg, ...keys);
    }
}

function nextAction(){
    const value = isAccepted("Başka bir işlem yapmak ister misiniz ? (e/h)","e","h","E","H");

    if (value.toLowerCase() === "e") {
        return mainMenu();
    }else{
        alert("Bye Bye");
        return;
    }
}

function mainMenu(){
    const value = isAccepted("1- Gününü ekle. \n 2- Gününü göster. \n 3- Çık.","1","2","3");
    if (value == 1) {
        addDiaryContext();
    }else if(value == 2){
        listDiary();
    }else if(value == 3){
        alert("Bye");
        return;
    }else{
        alert("Hatalı tuşlama!");
        return mainMenu();
    }
}

let diary = [];

if (localStorage.diary) {
    diary = JSON.parse(localStorage.diary);
}


function addDiaryContext(){
    
    const date = prompt("Günün tarihini yazınız. (dd / mm / yyyy)");

    const text = prompt("Bugünü anlatan bir yazı yazınız.");

    diary.push(
        {
            date,
            text
        }
    )

    localStorage.diary = JSON.stringify(diary);

    return nextAction();
}

function listDiary(){
    const listDiary = diary.map(daily => `${daily.date} - ${daily.text}`).join("\n");
    alert(listDiary);

    return nextAction();
}

mainMenu();