module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig(
      './tsconfig.json'
    ).parse,
    exampleMode: 'expand',
    usageMode: 'expand',
    styleguideDir: 'docs',
    pagePerSection: true,
    ignore: [
      '**/index.tsx',
      '**/__tests__/**',
      '**/*.test.{js,jsx,ts,tsx}',
      '**/*.spec.{js,jsx,ts,tsx}',
      '**/*.d.ts'
    ],
    theme: {
      color: {
        base: '#FFF',
        baseBackground: '#222',
        sidebarBackground: '#333',
        codebarBackground: '#333',
        link : 'rgb(218, 133, 0);',
        linkHover : 'rgb(238, 153, 0)',
        type : 'rgb(20,200,20)',
        codeBase : '#055505',
        codeProperty: '#ff008c',
        codeDeleted: '#ff008c'
      }
    },
    sections: [
      {
        name: 'Introduction',
        content: 'README.md'
      },
      {
        name: 'Documentation',
        pagePerSection: true,
        description: 'The description for the documentation section',
        sections: [
          {
            name: 'Components',
            pagePerSection: true,
            components: 'src/components/**/*.tsx',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
          }
        ]
      },
      {
        name: 'Live Demo',
        external: true,
        href: 'https://github.com/MGuillaumeF/MOCOR#readme'
      }
    ]
  };