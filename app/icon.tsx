import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0a192f',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 6,
            background: 'radial-gradient(circle at 50% 40%, rgba(0,191,255,0.25), transparent 70%)',
          }}
        />
        <span
          style={{
            fontFamily: 'serif',
            fontSize: 14,
            fontWeight: 700,
            color: '#00BFFF',
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          KH
        </span>
      </div>
    ),
    { ...size },
  );
}
