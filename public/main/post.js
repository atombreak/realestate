async function Post() {
    return `

<div class="postProperties">
                    <div class="profile_container">

                        <form class="creatPost">
                            <p>POSTING AN ESTATE IS FREE</p>
                            <div class="agentInfo">
                                <input type="text" name="agentUsername" value="user.username">
                                <input type="phone" name="agentPhone" value="user.phone">
                                <input type="text" name="agentPhoto" value="user.photo">
                                <input type="email" name="agentEmail" value="user.email">
                            </div>
                            <div class="input">
                                <input type="text" name="username" placeholder="Title of the Estate" autocomplete="none">
                            </div>
                            <div class="input">
                                <input type="text" name="username" placeholder="Location" autocomplete="none">
                            </div>
                            <div class="input">
                                <input type="text" name="username" placeholder="Price for the Estate" autocomplete="none">
                            </div>
                            <div class="text">
                                <textarea name="description" id="description" placeholder="Desciption of the Estate"></textarea>
                            </div>
                            <h1>Image samples of the esatate</h1>
                            <div class="photos">
                                <div class="photo">
                                    <div class="icon">
                                        <i class="far fa-image"></i>
                                        <p>+</p>
                                    </div>
                                </div>
                                <div class="photo">
                                    <div class="icon">
                                        <i class="far fa-image"></i>
                                        <p>+</p>
                                    </div>
                                </div>
                                <div class="photo">
                                    <div class="icon">
                                        <i class="far fa-image"></i>
                                        <p>+</p>
                                    </div>
                                </div>
                                <div class="photo">
                                    <div class="icon">
                                        <i class="far fa-image"></i>
                                        <p>+</p>
                                    </div>
                                </div>
                                <div class="photo">
                                    <div class="icon">
                                        <i class="far fa-image"></i>
                                        <p>+</p>
                                    </div>
                                </div>
                                <div class="photo">
                                    <div class="icon">
                                        <i class="far fa-image"></i>
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
`;
}