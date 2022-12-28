var today = new Date(); // 오늘 날짜
var date = new Date();

function beforem() //이전 달을 today에 값을 저장
{
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    build(); //만들기
}

function nextm()  //다음 달을 today에 저장
{
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    build();
}

function build()
{
    var yearmonth = document.getElementById("yearmonth"); //  년도와 월 출력할곳
    yearmonth.innerHTML = today.getFullYear() + "년 "+ (today.getMonth() + 1) + "월"; //년도와 월 출력

    var nowyearmonth=document.getElementById("date");
    nowyearmonth.innerText=today.getFullYear() + "-"+ (today.getMonth() + 1);
    var nowmidx=document.getElementById("midx");
    nowmidx.innerText=1;

}

var btns = document.querySelectorAll(".btn");

function optionClick(event) {
    btns.forEach((e) => {
        e.classList.remove("show-menu");
        e.classList.add("hide-menu");
    });
    event.target.classList.add("show-menu");
    event.target.classList.remove("hide-menu");
    emotioninput.value = event.target.id;
    console.log(event.target);
}

btns.forEach((e) => {
    e.addEventListener("click", optionClick);
});