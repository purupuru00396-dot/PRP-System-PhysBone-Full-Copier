/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    tutorialSidebar: [
        // =========================
        // PhysBone Full Copier
        // =========================
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
            ],
        },

        // =========================
        // Support
        // =========================
        {
            type: 'category',
            label: 'サポート情報',
            collapsed: false,
            items: [
                'support/faq',
                'support/license',
                'support/environment',
            ],
        },

        // =========================
        // Copy Failure Inspector
        // =========================
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
