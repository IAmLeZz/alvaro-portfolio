import React from 'react'
import { Project } from './Project';
import { PageProps } from '../../../../.next/types/app/project/[id]/page';

export default function page({ params }: PageProps) {
    return (
        <main className='z-10 antialiased'>
            <Project params={params} />
        </main>
    )
}
