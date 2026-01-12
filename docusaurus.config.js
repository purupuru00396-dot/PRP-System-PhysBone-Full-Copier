// docusaurus.config.js
// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PURUPURU Tools Manual',
    tagline: 'PhysBone Full Copier / Copy Failure Inspector',
    favicon: 'img/favicon.ico',

    url: 'https://purupuru00396-dot.github.io',

    baseUrl: '/PRP-System-PhysBone-Full-Copier/',

 
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

  
    i18n: {
        defaultLocale: 'ja',
        locales: ['ja'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',

 
                    editUrl:
                        'https://github.com/purupuru00396-dot/PRP-System-PhysBone-Full-Copier/edit/main/',


                    showLastUpdateTime: true,
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
            navbar: {
                title: 'PURUPURU Tools Manual',
          
                // logo: { alt: 'PURUPURU', src: 'img/logo.png' },

                items: [
                
                    { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Manual' },

                  
                    {
                        href: 'https://pururu.booth.pm/items/6843070', 
                        label: 'BOOTH',
                        position: 'right',
                    },

                   
                    {
                        href: 'https://discord.gg/qn76Vs83Sg', 
                        label: 'Discord',
                        position: 'right',
                    },

                
                    { type: 'colorMode', position: 'right' },
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
