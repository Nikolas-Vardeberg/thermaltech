import type { SchemaTypeDefinition } from 'sanity';

export const schemaTypes = [
];

export const schema: {
	types: SchemaTypeDefinition[];
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	templates: (prev: any[]) => any[];
} = {
	types: schemaTypes,
	templates: (prev) => [...prev],
};