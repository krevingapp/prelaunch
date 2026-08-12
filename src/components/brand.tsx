import { useState } from 'react';

const BASE = import.meta.env.BASE_URL;
const asset = (path: string) => `${BASE}${path.replace(/^\//, '')}`;

type KrevingLogoProps = {
  className?: string;
  variant?: 'default' | 'light';
  ariaHidden?: boolean;
};

export function KrevingLogo({ className = '', variant = 'default', ariaHidden = false }: KrevingLogoProps) {
  return (
    <img
      src={asset('/assets/kreving-logo.png')}
      alt={ariaHidden ? '' : 'Kreving'}
      aria-hidden={ariaHidden}
      className={`kreving-logo ${className}`}
      width={120}
      height={120}
      loading="eager"
      decoding="async"
    />
  );
}

type FoodImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
};

export function FoodImage({ src, alt, className = '', loading = 'lazy', width, height }: FoodImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`food-fallback ${className}`}
        role="img"
        aria-label={alt}
        style={width || height ? { aspectRatio: width && height ? `${width}/${height}` : undefined } : undefined}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="200" height="200" fill="#20242b" />
          <circle cx="100" cy="85" r="38" fill="#ff5b00" opacity="0.15" />
          <path d="M70 100 Q100 70 130 100 Q130 130 100 135 Q70 130 70 100Z" fill="#ff5b00" opacity="0.5" />
          <circle cx="100" cy="100" r="12" fill="#ff5b00" />
          <text x="100" y="170" textAnchor="middle" fill="#ff5b00" fontSize="11" fontFamily="monospace" letterSpacing="2">KREVING</text>
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      onError={() => setFailed(true)}
    />
  );
}

export const foodSpots = [
  { name: 'Smoky taco stop', category: 'Tacos', image: asset('/assets/street-food-1.jpg'), distance: '2 min away', tag: 'Trending' },
  { name: 'Golden dosa cart', category: 'Dosa', image: asset('/assets/street-food-5.jpg'), distance: '5 min away', tag: 'Hidden gem' },
  { name: 'Steaming momos', category: 'Momos', image: asset('/assets/street-food-6.jpg'), distance: '8 min away', tag: 'Popular' },
  { name: 'Pani puri corner', category: 'Pani Puri', image: asset('/assets/street-food-7.jpg'), distance: '3 min away', tag: 'Trending' },
  { name: 'Shawarma spot', category: 'Shawarma', image: asset('/assets/street-food-8.jpg'), distance: '6 min away', tag: 'Hidden gem' },
  { name: 'Wok noodles', category: 'Noodles', image: asset('/assets/street-food-9.jpg'), distance: '4 min away', tag: 'Popular' },
];

export const heroFood = asset('/assets/hero-food.jpg');
export const communityFood = asset('/assets/street-food-1.jpg');
export const peopleFood = asset('/assets/street-food-2.jpg');
export const vendorFood = asset('/assets/street-food-4.jpg');
export const featureFood = asset('/assets/street-food-3.jpg');
