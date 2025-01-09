import { defineField, defineType } from "sanity";
import { getDefaultBlockSetup } from "./defaults";
import { image } from "../image.schema";
import { internalLink } from "./internal-link";
import { externalLink } from "./external-link";
import { TextCursorIcon, TextIcon } from 'lucide-react';
import { LI } from "@/common/components/atoms/icon";

export const richText = defineType({
    name: 'richText',
	type: 'array',
	// @ts-ignore
	icon: TextIcon,
	of: [
		...getDefaultBlockSetup({
			headingLevels: ['h2', 'h3', 'h4', 'h5'],
			lists: true,
			annotations: [internalLink, externalLink],
		}), // Styling
		image({}), // Image block
	],
});

export const entryRichText = defineType({
	name: 'entryRichText',
	type: 'array',
	// @ts-ignore
	icon: TextIcon,
	of: [
		...getDefaultBlockSetup({
			annotations: [internalLink, externalLink],
		}),
	],
});

export const simpleRichText = defineType({
	name: 'simpleRichText',
	type: 'array',
	// @ts-ignore
	icon: TextIcon,
	of: [...getDefaultBlockSetup({})],
});

export const simplerRichText = defineType({
	name: 'simplerRichText',
	type: 'array',
	// @ts-ignore
	icon: TextIcon,
	of: [
		...getDefaultBlockSetup({
			headingLevels: ['h2', 'h3', 'h4', 'h5'],
			lists: true,
			annotations: [internalLink, externalLink],
		}),
		image({}), // Image block
	],
});

export const simplerTextObject = defineField({
	type: 'object',
	title: 'Riktekst',
	name: 'simplerRichText',
	icon: LI(TextCursorIcon, { width: 16, height: 16 }),
	fields: [
		{
			name: 'text',
			type: 'simplerRichText',
			title: 'Text',
		},
	],
	preview: {
		prepare: () => ({
			title: 'Riktekst',
		}),
	},
});