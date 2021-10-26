let property = document.querySelectorAll(".property")
let detail = document.getElementById("detail")

let downUser = document.getElementById("downUser")
let userOptins = document.getElementById("userOptins")
let photoMain = document.getElementById("photo")
let photos = document.querySelectorAll(".image_i")
let userIcons = document.querySelectorAll(".fa-user")

userIcons.forEach(userIcon => {
    userIcon.onclick = () => {
        userOptins.classList.add("active")
    }
})


downUser.onclick = () => {
    userOptins.classList.remove("active")
}
photos.forEach((photo => {
        photo.onclick = () => {
            photoMain.src = photo.src;
        }
    }))
    /*infoClose.onclick = () => {
        info.classList.remove("active")
    }*/
property.forEach(property => {
    property.onclick = () => {
        detail.classList.add("active")
    }
});
const mediaQuery = window.matchMedia("(max-width: 450px)")
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    if (mediaQuery.matches) {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }
}