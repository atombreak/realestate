let form = document.getElementById("form");
let form1 = document.getElementById("form1");
let profile = document.getElementById("profile");
let profileImage = document.getElementById("profileImage");
let uploadBTN = document.getElementById("uploadBTN");
let input_photo = document.getElementById("input_photo");
let notice = document.getElementById("notice")
let showLoading = document.getElementById("showLoading")
let noticeClose = document.getElementById("noticeClose")
let showNotice = document.getElementById("showNotice")



noticeClose.onclick = function () {
    showNotice.classList.remove("active")
}


input_photo.addEventListener("click", () => {
    profile.click()
})


profile.addEventListener("change", function() {
    const file = this.files[0];

    const source = URL.createObjectURL(file);

    if (file) {
        profileImage.src = source;
        uploadBTN.classList.add("active")
    }
})

form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const formdata = new FormData(this);

    showLoading.classList.add("active")

    showNotice.classList.remove("active")

    try {
        
        const res = await fetch("/auth/sign", {
            method: "POST",
            body: formdata,
        })


        const data = await res.json()
        if (data.user) {
            location.assign("/")
            showLoading.classList.remove("active")
        } else if (data.massage) {
            
            showNotice.classList.add("active")
            notice.innerHTML = data.massage;
            showLoading.classList.remove("active")
        }

    } catch (error) {
        console.log();
    }
})

form1.addEventListener("submit", async function(e) {
    e.preventDefault();
    const formdata = new FormData(this);
    try {
        const res = await fetch("n,m/auth/login", {
            method: "POST",
            body: formdata,
        })
        const data = await res.json()
        if (data.user) {
            location.assign("/")
        }
    } catch (error) {
        console.log(error);
    }

})