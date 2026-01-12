import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PURUPURU Tools Manual',
    tagline: 'PhysBone Full Copier / Copy Failure Inspector',
    favicon: 'img/favicon.ico',

    url: 'https://purupuru00396-dot.github.io',
    baseUrl: isProd ? '/PRP-System-PhysBone-Full-Copier/' : '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'], // 👉 다국어는 나중에 다시
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/', // ✅ docs가 루트
                    sidebarPath: path.join(__dirname, 'sidebars.js'),
                },
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
                { to: '/', label: 'Tutorial', position: 'left' },
                {
                    href: 'https://pururu.booth.pm/items/6843070',
                    label: 'BOOTH',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} PURUPURU.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
};

export default config;
