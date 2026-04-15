import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0a192f',
          borderRadius: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 40,
            background: 'radial-gradient(circle at 50% 40%, rgba(0,191,255,0.3), transparent 65%)',
          }}
        />
        <span
          style={{
            fontFamily: 'serif',
            fontSize: 80,
            fontWeight: 700,
            color: '#00BFFF',
            letterSpacing: '-3px',
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
