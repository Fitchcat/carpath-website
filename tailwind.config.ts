import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Theme switching via data-theme attribute on <html>
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      // ── Couleurs de marque (design/TOKENS.md — VERROUILLÉES) ──────────────
      colors: {
        // Primitives
        'color-accent':     '#C79A3B',
        'color-black':      '#0D0D0D',
        'color-white':      '#FFFFFF',
        'color-gray-light': '#F2F2F2',
        'color-gray-dark':  '#3A3A3A',
        // Accent hover states
        'accent-hover':     '#B8893A',
        'accent-active':    '#A07830',
      },
      // ── Espacement (base 4px, design/TOKENS.md) ──────────────────────────
      spacing: {
        '1':  '4px',
        '2':  '8px',
        '3':  '12px',
        '4':  '16px',
        '6':  '24px',
        '8':  '32px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      // ── Rayons de bordure (design/TOKENS.md) ─────────────────────────────
      borderRadius: {
        'sm':   '4px',
        'md':   '8px',
        'lg':   '12px',
        'xl':   '16px',
        '2xl':  '24px',
        'full': '9999px',
      },
      // ── Ombres (design/TOKENS.md) — CSS vars pour dark/light ─────────────
      boxShadow: {
        'sm':     'var(--shadow-sm)',
        'md':     'var(--shadow-md)',
        'lg':     'var(--shadow-lg)',
        'accent': 'var(--shadow-accent)',
        'glow':   'var(--shadow-glow)',
      },
      // ── Typographie (design/TOKENS.md) ───────────────────────────────────
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs':           ['12px', { lineHeight: '1.6' }],
        'sm':           ['14px', { lineHeight: '1.6' }],
        'base':         ['16px', { lineHeight: '1.6' }],
        'lg':           ['18px', { lineHeight: '1.6' }],
        'xl':           ['20px', { lineHeight: '1.3' }],
        '2xl':          ['24px', { lineHeight: '1.2' }],
        '3xl':          ['30px', { lineHeight: '1.15' }],
        '4xl':          ['36px', { lineHeight: '1.1' }],
        '5xl':          ['48px', { lineHeight: '1.1' }],
        'hero-mobile':  ['32px', { lineHeight: '1.15' }],
      },
      // ── Durées d'animation (design/TOKENS.md) ────────────────────────────
      transitionDuration: {
        'fast': '100ms',
        'base': '200ms',
        'slow': '350ms',
      },
      transitionTimingFunction: {
        'out':     'ease-out',
        'in-out':  'ease-in-out',
      },
      // ── max-width pour centrage de contenu ────────────────────────────────
      maxWidth: {
        'prose-sm':   '560px',
        'prose-md':   '640px',
        'prose-lg':   '720px',
        'prose-body': '70ch',
        'site':       '1280px',
        'embed':      '800px',
      },
    },
  },
  plugins: [],
}

export default config
