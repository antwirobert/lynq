'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Logo = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // prevent wrong logo flash
  }

  return (
    <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
      {theme === "dark" ? (
        <Image
          src="/logo-light.svg"
          alt="logo"
          width={150}
          height={170}
          className="max-md:size-[130px]"
        />
      ) : (
        <Image
          src="/logo-dark.svg"
          alt="logo"
          width={150}
          height={170}
          className="max-md:size-[130px]"
        />
      )}
    </Link>
  )
}

export default Logo
