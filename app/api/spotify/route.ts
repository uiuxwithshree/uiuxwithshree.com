/**
 * /app/api/spotify/route.ts
 *
 * Fetches currently playing or recently played track from Spotify.
 *
 * SETUP (one time):
 * 1. Go to https://developer.spotify.com/dashboard → create an app
 * 2. Set redirect URI to http://localhost:3000 (or your domain)
 * 3. Get CLIENT_ID and CLIENT_SECRET
 * 4. Get a refresh token:
 *    - Visit: https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-currently-playing,user-read-recently-played
 *    - Copy the `code` param from redirect URL
 *    - Exchange for refresh_token:
 *      curl -X POST https://accounts.spotify.com/api/token \
 *        -H "Authorization: Basic $(echo -n CLIENT_ID:CLIENT_SECRET | base64)" \
 *        -d "grant_type=authorization_code&code=CODE&redirect_uri=http://localhost:3000"
 *    - Save the `refresh_token` from response
 *
 * 5. Add to .env.local:
 *    SPOTIFY_CLIENT_ID=your_client_id
 *    SPOTIFY_CLIENT_SECRET=your_client_secret
 *    SPOTIFY_REFRESH_TOKEN=your_refresh_token
 */

import { NextResponse } from 'next/server'

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID!
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  return res.json()
}

export async function GET() {
  try {
    const { access_token } = await getAccessToken()

    // Try currently playing first
    const nowRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    })

    if (nowRes.status === 200) {
      const data = await nowRes.json()
      if (data.item) {
        return NextResponse.json({
          isPlaying: data.is_playing,
          title: data.item.name,
          artist: data.item.artists.map((a: { name: string }) => a.name).join(', '),
          albumArt: data.item.album.images[0]?.url ?? '',
          songUrl: data.item.external_urls.spotify,
        })
      }
    }

    // Fall back to recently played
    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    const recentData = await recentRes.json()
    const track = recentData.items?.[0]?.track

    if (track) {
      return NextResponse.json({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((a: { name: string }) => a.name).join(', '),
        albumArt: track.album.images[0]?.url ?? '',
        songUrl: track.external_urls.spotify,
      })
    }

    return NextResponse.json({ isPlaying: false, title: null })
  } catch (err) {
    console.error('Spotify API error:', err)
    return NextResponse.json({ isPlaying: false, title: null }, { status: 500 })
  }
}

// Revalidate every 30 seconds
export const revalidate = 30