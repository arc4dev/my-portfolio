export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'deployedUrl',
      title: 'Deployed URL',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'skill' },
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the desktop version of the project',
      options: {
        hotspot: true,
      },
    },
  ],
};
