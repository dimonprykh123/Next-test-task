import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";
import NextNprogress from 'nextjs-progressbar';
import {GlobalStyle} from "../styles/mainStyles";

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <>
        <GlobalStyle/>
        <NextNprogress
            color="tomato"
            startPosition={0.3}
            stopDelayMs={100}
            height={3}
        />
        <Component {...pageProps}  />
    </>
);

export default wrapper.withRedux(WrappedApp);