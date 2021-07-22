const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Blog Kaustubh K.',
  tagline: 'Dinosaurs are cool',
  url: 'https://blog.kaustubh.codes',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kaustubhk24', // Usually your GitHub org/user name.
  projectName: 'blog.kaustubh.codes', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Kaustubh K.',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        
        {to: 'https://kaustubh.codes', label: 'Portfolio', position: 'left'},
        {
          href: 'https://github.com/kaustubhk24/blog.kaustubh.codes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @kaustubhk24. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
            'https://github.com/kaustubhk24/blog.kaustubh.codes/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          path: './blog',
          routeBasePath: '/', 
          // Please change this to your repo.
          editUrl:
            'https://github.com/kaustubhk24/blog.kaustubh.codes/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],

    
  ],
};
