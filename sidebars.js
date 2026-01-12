const sidebars = {
    tutorialSidebar: [
        {
            type: "category",
            label: "PhysBone Full Copier Manual",
            collapsed: false,
            items: [
                "pbfc/intro",
                "pbfc/merits",
                "pbfc/updates",
                "pbfc/getting-started",
                "pbfc/hair-copy",
            ],
        },

        {
            type: "category",
            label: "サポート情報",
            collapsed: false,
            items: [
                "pbfc/faq",
                "pbfc/license",
                "pbfc/environment",
            ],
        },

        {
            type: "category",
            label: "Copy Failure Inspector Tools Manual",
            collapsed: false,
            items: [
                "cfi/merits",
                "cfi/getting-started",
            ],
        },
    ],
};

{
    type: 'doc',
        id: 'pbfc/getting-started',
            label: 'ツールの始め方',
},
{
    type: 'doc',
        id: 'cfi/getting-started',
            label: 'ツールの始め方',
},


module.exports = sidebars;
