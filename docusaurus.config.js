
import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';
import { fileURLToPath } from 'url';

const isProd = process.env.NODE_ENV === 'production';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PURUPURU Tools Manual',
    tagline: 'PhysBone Full Copier / Copy Failure Inspector',
    favicon: 'img/favicon.ico',

    // ✅ GitHub Pages (project pages)
    url: 'https://purupuru00396-dot.github.io',
    baseUrl: isProd ? '/PRP-System-PhysBone-Full-Copier/' : '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                // ✅ Docs를 루트로 올리고, 첫 화면을 "pbfc/getting-started"로 지정
                docs: {
                    routeBasePath: '/', // <-- 핵심: docs가 / 에서 열림
                    homePageId: 'pbfc/getting-started', // <-- 핵심: 첫 화면 문서
                    sidebarPath: path.join(__dirname, 'sidebars.js'),
                    // editUrl 필요 없으면 지워도 됨
                    // editUrl: 'https://github.com/purupuru00396-dot/PRP-System-PhysBone-Full-Copier/edit/main/',
                },

                // ✅ Blog 완전 OFF
                blog: false,

                theme: {
                    customCss: path.join(__dirname, 'src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'PURUPURU Tools Manual',
            items: [
                // docs가 루트니까 그냥 to: '/' 로 두면 됨
                { to: '/', label: 'Tutorial', position: 'left' },

                // BOOTH 링크(원하는 URL로 교체)
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
    },
};

export default config;
