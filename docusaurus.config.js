// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PURUPURU Tools Manual',
    tagline: 'PhysBone Full Copier / Copy Failure Inspector',
    favicon: 'img/favicon.ico',

    future: { v4: true },

    // ✅ GitHub Pages 기본 도메인 (유저 도메인 없어도 됨)
    url: 'https://purupuru00396-dot.github.io',

    // ✅ 로컬에서는 '/', 배포에서는 레포명 경로
    baseUrl: isProd ? '/PRP-System-PhysBone-Full-Copier/' : '/',

    organizationName: 'purupuru00396-dot',
    projectName: 'PRP-System-PhysBone-Full-Copier',

    // 링크 하나 잘못돼도 빌드 폭발 방지(원하면 throw로 되돌려도 됨)
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // ✅ 문서를 사이트 첫 화면으로
                    routeBasePath: '/',
                    editUrl: 'https://github.com/purupuru00396-dot/PRP-System-PhysBone-Full-Copier',
                },
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
