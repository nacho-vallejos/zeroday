import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'VOID SECURITY LABS - Elite Red Team Operations'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: 80, fontWeight: 'bold', letterSpacing: '0.2em' }}>
            VOID SECURITY
          </div>
          <div style={{ fontSize: 32, color: '#7c3aed', letterSpacing: '0.15em', marginTop: 20 }}>
            ELITE RED TEAM OPERATIONS
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
