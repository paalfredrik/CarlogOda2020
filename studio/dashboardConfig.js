export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8d0cfaf2f60194deb092b6',
                  title: 'Sanity Studio',
                  name: 'CarlogOda2020-studio',
                  apiId: '0feb83e2-f2d6-4d9b-8cd3-7802b5d02637'
                },
                {
                  buildHookId: '5d8d0cfa4507db9634d01dd5',
                  title: 'Blog Website',
                  name: 'CarlogOda2020',
                  apiId: '5ee499e6-92c4-4bed-81c9-ddb766e6eed9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/CarlogOda2020',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://CarlogOda2020.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
