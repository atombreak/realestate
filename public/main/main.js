const changeRoute = (url) => {
    history.pushState(null, null, url);

    router();
}

const router = async() => {
    const routes = [{
        path: "/",
        view: Home()
    }, {
        path: "/detail",
        view: Detail()
    }, {
        path: "/info",
        view: Info()
    }, {
        path: "/login",
        view: Login()
    }, {
        path: "/sign",
        view: Signup()
    }, {
        path: "/post",
        view: Post()
    }]
    const halfMatches = routes.map(route => {
        return {
            route: route,
            equalMatch: location.pathname == route.path
        }
    })
    const realRoute = halfMatches.find(halfMatch => halfMatch.equalMatch)
    console.log(realRoute);
    const view = await realRoute.route.view
    const app = document.getElementById("app").innerHTML = view;
}
window.addEventListener("popstate", router)

const link = document.querySelectorAll(".link")


document.addEventListener("DOMContentLoaded", function(e) {
    link.forEach(link => {
        link.addEventListener("click", (e) => {
            const sample = document.getElementById("love")
            e.preventDefault()
            alert(sample)
            let href = link.getAttribute("data-links")
            changeRoute(href)
        })
    })
    router();
});