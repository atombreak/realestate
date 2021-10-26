async function Login() {
    return `
    <section class="signup">
    <form id="form">
        <h1>AGENT LOGIN</h1>

        <div class="input">
            <i class="far fa-user "></i>
            <input type="email" name="email" placeholder="Enter your Email">

        </div>
        <div class="input ">
            <i class="fas fa-lock"></i>
            <input type="password" name="password" placeholder="Enter Your secreat Password ">

        </div>

        <button> LOGIN</button>
    </form>
</section>
    
    `;
}