import React from "react";

import Header from "../layout/header/header";
import Footer from "../layout/footer";
import Head from "next/head";
import RegisterComponent from "./imports/Register";
import Background from "../core/Background";
const LoginPage = () => {
    return (
        <div className="Register">
            <Head>
                <title>NTIC Rabat - Registration</title>
            </Head>

            <Header />
            <Background />
            <div className="RegisterContainer">
                <div className="wrapper">
                    <RegisterComponent />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default LoginPage;
