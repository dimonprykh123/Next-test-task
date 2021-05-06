import React from 'react';
import MainLayout from "../layouts/mainLayout";
import Link from "next/link";
import {LinkContainer} from "../styles/mainStyles";

const ErrorPage = () => {
    return (
        <MainLayout show>
            <Link href={"/"}>
                <LinkContainer>
                    {"<"} Back to all posts
                </LinkContainer>
            </Link>
            <div>
                <h1>Error 404 - page not found!</h1>
            </div>
        </MainLayout>
    );
};

export default ErrorPage;