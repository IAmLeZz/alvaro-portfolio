import React from 'react'
import { PageProps } from '../../../../.next/types/app/layout';
import { Project } from './Project';

export default function page({ params }: PageProps) {
    return (
        <main className='z-10 antialiased'>
            <Project params={params} />
        </main>
    )
}
