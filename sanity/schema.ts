import { type SchemaTypeDefinition } from 'sanity';

import { pageInfo } from './schemas/pageInfo';
import { skill } from './schemas/skill';
import { project } from './schemas/project';
import { social } from './schemas/social';
import { fact } from './schemas/fact';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skill, project, social, fact],
};
