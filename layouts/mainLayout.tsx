import React from 'react';
import {Header, MainContainer, MainWrapper, Footer, Logo, LinkContainer} from "../styles/mainStyles";
import Link from "next/link";
import {Head} from "next/document";

interface MainLayoutProps {
    show: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, show = true}) => {
    return (
        <>
            <MainWrapper>
                <Header>
                    <Link href="/">
                    <LinkContainer>
                        <Logo>Poster</Logo>
                    </LinkContainer>
                    </Link>
                    {show &&
                    <Link href="/posts/new">
                        <LinkContainer>Create new post</LinkContainer>
                    </Link>
                    }
                </Header>
                <MainContainer>
                    {children}
                    <Footer/>
                </MainContainer>
            </MainWrapper>
        </>
    );
};

export default MainLayout;