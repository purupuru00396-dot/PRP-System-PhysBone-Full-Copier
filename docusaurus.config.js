const isProd = process.env.NODE_ENV === 'production';

// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PURUPURU Tools Manual',
    tagline: 'PhysBone Full Copier / Copy Failure Inspector',
    favicon: 'img/favicon.ico',

    future: { v4: true },

    url: 'https://purupuru00396-dot.github.io',
    baseUrl: '/PRP-System-PhysBone-Full-Copier/',


    organizationName: 'purupuru00396-dot',
    projectName: 'PRP-System-PhysBone-Full-Copier',

    onBrokenLinks: 'throw',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: '/',   // ✅ 이 줄 추가: 문서를 사이트 첫 화면으로
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },

                // ✅ Blog 완전 OFF (상단 Blog 탭/라우트 제거)
                blog: false,

                theme: {
                    customCss: './src/css/custom.css',


                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                respectPrefersColorScheme: true,
            },

            navbar: {
                title: 'PURUPURU Tools Manual',
                logo: {
                    alt: 'PURUPURU Tools Manual',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    

                 

                    // ✅ BOOTH 링크
                    {
                        href: 'https://pururu.booth.pm/items/6843070',
                        label: 'BOOTH',
                        position: 'right',
                    },
                ],
            },


            footer: {
                style: 'dark',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} PURUPURU. Built with Docusaurus.`,
            },

            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};
export default config;
