let reviews = [
    {
        name: "Denny Edesen",
        designation: "Wed developer",
        Lorem: "Hi Danial how are you hope you will be fine as we appriciate you that you do our project on time we decided to gave over next project with you",
        img: "assests/pic1.jpg"
    },
    {
        name:"Steven wilsen",
        designation: "App Developer",
        Lorem: "Dear Danial we have sended the email to you about some changes in project kindly looks the email gave the rply",
        img:"assests/pic2.jpg"
    },
    {
        name: "Aliyan",
        designation: "Admin",
        Lorem: "Dear Danial hope you good we listed to you our new project kindly see the detail in email",
        img: "assests/pic3.jpg"
    }
]

let num = 0;

let cards = document.querySelector('.card')
let image = document.querySelector('img')
let heading = document.querySelector('h2')
let heading1 = document.querySelector('h4')
let para = document.querySelector('p')
let btn_l = document.querySelector('.left')
let btn_r = document.querySelector('.right')

function reviewRun(index) {
    image.src = index.img;
    heading.textContent = index.name;
    heading1.textContent = index.designation;
    para.textContent = index.Lorem;
    // cards.style.transform = `translateX(-${num * (100 / reviews.length)}%)`;
}

function forward() {
    if (num == reviews.length - 1) {
        num = 0;
    } else {
        num++;
    }
    reviewRun(reviews[num])
}
function backward() {
    if (num == 0) {
        num = reviews.length - 1;
    } else {
        num--;
    }
    reviewRun(reviews[num]);
}
reviewRun(reviews[num]);
btn_r.addEventListener('click', forward);
btn_l.addEventListener('click', backward);