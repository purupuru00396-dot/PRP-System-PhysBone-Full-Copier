/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'PhysBone Full Copier Manual',
            collapsible: true,
            collapsed: false,
            items: [
                'pbfc/intro',
                'pbfc/merits',
                'pbfc/updates',
                'pbfc/getting-started',
                'pbfc/hair-copy',
                {
                    type: 'category',
                    label: 'サポート情報',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        'pbfc/faq',
                        'pbfc/license',
                        'pbfc/environment',
                    ],
                },

        {
            type: 'category',
            label: 'Copy Failure Inspector Tools Manual',
            collapsible: true,
            collapsed: false,
            items: [
                'cfi/merits',
                'cfi/getting-started',
            ],
        },
    ],
};

module.exports = sidebars;