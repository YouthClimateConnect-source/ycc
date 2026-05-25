import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './blog'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType],
}
