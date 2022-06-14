import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NewsPage = () => {
    const router = useRouter();
    const { detail }= router.query
   
    return (
        <>
            <h1>The News Page</h1>
            <ul>

                <li>
                    <Link href='/news/detail'>First Detail</Link>
                    </li>
                    <li>
                    <Link href='/news/detail'>Second Detail</Link>
                    </li>
            </ul>
        </>
    );
};

export default NewsPage;
