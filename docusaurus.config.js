module.exports = {
  title: 'SENSE',
  tagline: 'Sense Finance',
  url: 'https://sensefi.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'sensefi', // Usually your GitHub org/user name.
  projectName: 'sensefi.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sense Finance',
      logo: {
        alt: 'Sense Finance',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        /*{
          href: 'https://github.com/sensefi/website',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Join Guide',
              to: 'docs/',
            }, 
            {
              label: "What's Sense Token",
              to: 'docs/doc2'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/sensefi',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/sensefi',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sensefi',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sensefi/sensefi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sensefi/website/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sensefi/website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
