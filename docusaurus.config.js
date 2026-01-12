const prismThemes = require('prism-react-renderer').themes;
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PURUPURU Tools Manual',
    tagline: 'PhysBone Full Copier / Copy Failure Inspector',
    favicon: 'img/favicon.ico',

    url: 'https://purupuru00396-dot.github.io',
    baseUrl: isProd ? '/PRP-System-PhysBone-Full-Copier/' : '/',

    onBrokenLinks: 'throw',

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
            logo: {
                alt: 'PURUPURU',
                src: 'img/logo.png',
            },
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
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} PURUPURU. Built with Docusaurus.`,
        },

        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
};

module.exports = config;
