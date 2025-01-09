import { defineField } from 'sanity';
import { LinkIcon } from 'lucide-react';
import { pages } from '@/sanity/constants';
import { LI } from '@/common/components/atoms/icon';

export const internalLink = defineField({
    name: 'internalLink',
    type: 'object',
    title: 'Intern lenke',
    // @ts-ignore
    icon: LI(LinkIcon, { width: 16, height: 16 }),
    fields: [
        {
            name: 'reference',
            type: 'reference',
            title: 'Reference',
            validation: (R) => R.required(),
            to: pages,
        },
    ],
});