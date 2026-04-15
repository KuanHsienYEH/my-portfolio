import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0a192f',
          fontFamily: 'monospace',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,191,255,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,191,255,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', marginBottom: 32, color: '#00BFFF', fontSize: 20 }}>
          {'<KuanYeh />'}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: '#ccd6f6',
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Kuan Yeh
        </div>

        {/* Title */}
        <div style={{ fontSize: 36, color: '#00BFFF', marginBottom: 40 }}>
          Frontend Engineer
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['React', 'TypeScript', 'Next.js', 'Performance'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                border: '1px solid rgba(0,191,255,0.4)',
                borderRadius: 6,
                color: 'rgba(0,191,255,0.8)',
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 80,
            right: 80,
            display: 'flex',
            justifyContent: 'space-between',
            color: '#8892b0',
            fontSize: 18,
          }}
        >
          <span>7+ years experience</span>
          <span>knight123g@gmail.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
