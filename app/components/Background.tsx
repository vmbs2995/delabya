// components/Background.tsx
import Image from 'next/image';
import { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-50 pulse-bg">
        <Image
          src="/fondo.png"
          alt="Fondo"
          fill
          priority
          quality={100}
          className="object-cover select-none pointer-events-none"
          draggable={false}
          sizes="100vw"
        />
      </div>
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Background;

