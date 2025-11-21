'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    const { resolvedTheme } = useTheme();

    return (
        <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
            {resolvedTheme === "dark" ? (
                <Image src="/logo-light.svg" alt="logo" width={150} height={170} className='max-md:size-[130px]' />
            ) : (
                <Image src="/logo-dark.svg" alt="logo" width={150} height={170} className='max-md:size-[130px]' />
            )}
        </Link>
    )
}

export default Logo