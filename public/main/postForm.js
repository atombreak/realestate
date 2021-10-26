//photo 1
const photo1 = document.getElementById("photo1");
const icon1 = document.getElementById("icon1");
const photo1Image = document.getElementById("photo1Image");
const photo1Input = document.getElementById("photo1Input");

photo1.addEventListener("click", function() {
    photo1Input.click()
})
photo1Input.addEventListener("change", function() {
    const file = this.files[0];

    const source = URL.createObjectURL(file);

    if (file) {
        photo1Image.src = source;
        icon1.classList.add("active")
    }
})

//photo2
const photo2 = document.getElementById("photo2");
const icon2 = document.getElementById("icon2");
const photo2Image = document.getElementById("photo2Image");
const photo2Input = document.getElementById("photo2Input");

photo2.addEventListener("click", function() {
    photo2Input.click()
})
photo2Input.addEventListener("change", function() {
    const file = this.files[0];
    const source = URL.createObjectURL(file);
    if (file) {
        photo2Image.src = source;
        icon2.classList.add("active")
    }
})

//photo3
const photo3 = document.getElementById("photo3");
const icon3 = document.getElementById("icon3");
const photo3Image = document.getElementById("photo3Image");
const photo3Input = document.getElementById("photo3Input");
photo3.addEventListener("click", function() {
    photo3Input.click()
})
photo3Input.addEventListener("change", function() {
    const file = this.files[0];
    const source = URL.createObjectURL(file);
    if (file) {
        photo3Image.src = source;
        icon3.classList.add("active")
    }
})

//photo4
const photo4 = document.getElementById("photo4");
const icon4 = document.getElementById("icon4");
const photo4Image = document.getElementById("photo4Image");
const photo4Input = document.getElementById("photo4Input");
photo4.addEventListener("click", function() {
    photo4Input.click()
})
photo4Input.addEventListener("change", function() {
    const file = this.files[0];
    const source = URL.createObjectURL(file);
    if (file) {
        photo4Image.src = source;
        icon4.classList.add("active")
    }
})

//photo5
const photo5 = document.getElementById("photo5");
const icon5 = document.getElementById("icon5");
const photo5Image = document.getElementById("photo5Image");
const photo5Input = document.getElementById("photo5Input");
photo5.addEventListener("click", function() {
    photo5Input.click()
})
photo5Input.addEventListener("change", function() {
    const file = this.files[0];
    const source = URL.createObjectURL(file);
    if (file) {
        photo5Image.src = source;
        icon5.classList.add("active")
    }
})


const photo6 = document.getElementById("photo6");
const icon6 = document.getElementById("icon6");
const photo6Image = document.getElementById("photo6Image");
const photo6Input = document.getElementById("photo6Input");
photo6.addEventListener("click", function() {
    photo6Input.click()
})
photo6Input.addEventListener("change", function() {
    const file = this.files[0];
    const source = URL.createObjectURL(file);
    if (file) {
        photo6Image.src = source;
        icon6.classList.add("active")
    }
})
const notification = document.getElementById("notification");

const erroNoti = document.getElementById("erroNoti");
const clo = document.getElementById("clo");
const erroNotiOut = document.getElementById("erroNotiOut");
const creatPost = document.getElementById("creatPost");

clo.addEventListener("click", () => {
    erroNoti.classList.remove("active");
})

creatPost.addEventListener("submit", async function(e) {
    e.preventDefault();
    const formdata = new FormData(this);
    notification.classList.add("active");
    erroNoti.classList.remove("active");
    
    try {
        const res = await fetch("/estate/post", {
            method: "POST",
            body: formdata,
        })
        
        const data = await res.json()
        if (data.property) {
            location.assign("/")
            notification.classList.remove("active");
        
        } else if (data.massage) {
            erroNoti.classList.add("active");
            erroNotiOut.innerHTML = data.massage;
           notification.classList.remove("active");
        }
    } catch (error) {
        console.log(error);
    }
})





