"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import logoLight from '../public/logo-light.png';
import logoDark from '../public/logo.png';

export default function HeroLogo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering the theme-dependent image after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder structure during server render
    return (
      <div className="absolute opacity-0 inset-0" ></div>
    );
  }

  const imageSrc = resolvedTheme === 'light' ? logoLight : logoDark;

  return (
    <Image
      src={imageSrc}
      alt="Solveria Labs Logo Background"
      fill
      className="object-cover z-0"
      style={{
        filter: resolvedTheme === 'light'
          ? "drop-shadow(0 0 40px rgba(14, 165, 233, 0.15))" // Subtler shadow for light mode
          : "drop-shadow(0 0 50px rgba(var(--primary-rgb), 0.6))"
      }}
      quality={100}
      unoptimized={true}
      priority
    />
  );
}
