// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
    return (
        <Html>
            <Head>
                {/* Clarity Tracking Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ng0f7e5t3p");
            `,
                    }}
                />
                {/* End Clarity Tracking Code */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
