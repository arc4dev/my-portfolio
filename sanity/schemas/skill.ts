export const skill = {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
    },
    {
      name: 'level',
      title: 'Skill Level',
      type: 'number',
      description: '1-100',
      validation: (Rule: any) => Rule.min(1).max(100),
    },
    {
      name: 'svg',
      title: 'Svg image',
      description: 'SVG markup file',
      type: 'text',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
  ],
};
