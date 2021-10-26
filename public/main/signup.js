async function Signup() {
    return `
<section class="signup">
<form id="form">
    <h1>AGENT SIGNIN</h1>
    <div class="input">
        <i class="fas fa-user "></i>
        <input type="text" name="username" placeholder="Username">

    </div>
    <div class="input ">
        <i class="far fa-user "></i>
        <input type="text" name="email" placeholder="Email">

    </div>
    <div class="input ">
        <i class="fas fa-search-location "></i>
        <input type="text" name="location" placeholder="Enter Your Location ">

    </div>
    <div class="input ">
        <i class="fas fa-phone "></i>
        <input type="tel" name="phone" placeholder=" Phone number 09000000 ">

    </div>
    <div class="input">
        <i class="fas fa-lock "></i>
        <input type="password" name="password" placeholder="Enter Your Screat Password ">
    </div>
    <button type="submit">SIGNIN</button>
</form>
</section>

`;
}