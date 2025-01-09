import { LI } from "@/common/components/atoms/icon";
import { defineField, type Rule } from "sanity";
import { Image } from 'lucide-react';

type Props = {
	name?: string;
	group?: string;
	description?: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	options?: any;
	title?: string;
	validation?: (Rule: Rule) => Rule;
};

export const image = ({ options, ...props }: Props) => {
    return defineField({
        type: 'image',
		title: 'Bilde',
		icon: LI(Image),
		options: {
			...options,
			hotspot: true,
		},
        fields: [
            {
				name: 'description',
				type: 'string',
				title: 'Bildetekst',
				description: 'En kort beskrivelse av bildet. Bruk bildetekst i media for gjenbruk.',
			},
            {
				name: 'altTextOverride',
				type: 'string',
				title: 'Alternativ tekst',
				description: 'Beskriv bildet for noen som ikke kan se det.',
			},
        ],
        ...(props as any),
		name: props.name || 'image',
		preview: {
			select: {
				title: 'asset.originalFilename',
				subtitle: 'asset.description',
				media: 'asset',
			},
		},
    })
}