/*
Adım 1: Kullanıcıdan tarih ve yazacağı metni alın.

Adım 2: Bu bilgiyi localStorage'a kaydedin.

Adım 3: Sayfa yenilendiğinde, tüm günlükleri gösterin. 
*/

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

}

addDiaryContext();