import React from "react";

const MainBodyRight = () => {
    return (
        <div class="right-side">
            <form action="">
                <input type="text" placeholder="Email address or phone number" />
                <input type="text" placeholder="Password" />
                <button class="login-btn">Log in</button>
                <a href="#">Forgotten password?</a>
                <hr width="100%" color="#d8d8d8" />
                <button class="create-btn">Create new account</button>
            </form>
            <p>
                <span>Create a Page</span> for a celebrity, brand or business.
            </p>
        </div>
    );
};

export default MainBodyRight;
