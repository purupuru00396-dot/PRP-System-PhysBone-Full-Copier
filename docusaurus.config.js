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

    // GitHub Pages (project pages)
    url: 'https://purupuru00396-dot.github.io',
    baseUrl: isProd ? '/PRP-System-PhysBone-Full-Copier/' : '/',

    onBrokenLinks: 'throw',

    // ✅ 최신 방식 (경고 메시지 뜨던 부분 해결)
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    // ✅ docs를 사이트 루트(/)로 올림
                    routeBasePath: '/',
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
                    href: 'https://pururu.booth.pm/items/6843070', // 너 부스 링크로 바꿔도 됨
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
