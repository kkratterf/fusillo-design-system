/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './storybook/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brand: {
        50: 'var(--color-brand-50)',
        100: 'var(--color-brand-100)',
        200: 'var(--color-brand-200)',
        300: 'var(--color-brand-300)',
        400: 'var(--color-brand-400)',
        500: 'var(--color-brand-500)',
        600: 'var(--color-brand-600)',
        700: 'var(--color-brand-700)',
        800: 'var(--color-brand-800)',
        900: 'var(--color-brand-900)',
        950: 'var(--color-brand-950)',
      },
      neutral: {
        0: 'var(--color-neutral-0)',
        50: 'var(--color-neutral-50)',
        100: 'var(--color-neutral-100)',
        200: 'var(--color-neutral-200)',
        300: 'var(--color-neutral-300)',
        400: 'var(--color-neutral-400)',
        500: 'var(--color-neutral-500)',
        600: 'var(--color-neutral-600)',
        700: 'var(--color-neutral-700)',
        800: 'var(--color-neutral-800)',
        900: 'var(--color-neutral-900)',
        950: 'var(--color-neutral-950)',
        1000: 'var(--color-neutral-1000)',
      },
      red: {
        50: 'var(--color-red-50)',
        100: 'var(--color-red-100)',
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        600: 'var(--color-red-600)',
        700: 'var(--color-red-700)',
        800: 'var(--color-red-800)',
        900: 'var(--color-red-900)',
        950: 'var(--color-red-950)',
      },
      orange: {
        50: 'var(--color-orange-50)',
        100: 'var(--color-orange-100)',
        200: 'var(--color-orange-200)',
        300: 'var(--color-orange-300)',
        400: 'var(--color-orange-400)',
        500: 'var(--color-orange-500)',
        600: 'var(--color-orange-600)',
        700: 'var(--color-orange-700)',
        800: 'var(--color-orange-800)',
        900: 'var(--color-orange-900)',
        950: 'var(--color-orange-950)',
      },
      amber: {
        50: 'var(--color-amber-50)',
        100: 'var(--color-amber-100)',
        200: 'var(--color-amber-200)',
        300: 'var(--color-amber-300)',
        400: 'var(--color-amber-400)',
        500: 'var(--color-amber-500)',
        600: 'var(--color-amber-600)',
        700: 'var(--color-amber-700)',
        800: 'var(--color-amber-800)',
        900: 'var(--color-amber-900)',
        950: 'var(--color-amber-950)',
      },
      yellow: {
        50: 'var(--color-yellow-50)',
        100: 'var(--color-yellow-100)',
        200: 'var(--color-yellow-200)',
        300: 'var(--color-yellow-300)',
        400: 'var(--color-yellow-400)',
        500: 'var(--color-yellow-500)',
        600: 'var(--color-yellow-600)',
        700: 'var(--color-yellow-700)',
        800: 'var(--color-yellow-800)',
        900: 'var(--color-yellow-900)',
        950: 'var(--color-yellow-950)',
      },
      lime: {
        50: 'var(--color-lime-50)',
        100: 'var(--color-lime-100)',
        200: 'var(--color-lime-200)',
        300: 'var(--color-lime-300)',
        400: 'var(--color-lime-400)',
        500: 'var(--color-lime-500)',
        600: 'var(--color-lime-600)',
        700: 'var(--color-lime-700)',
        800: 'var(--color-lime-800)',
        900: 'var(--color-lime-900)',
        950: 'var(--color-lime-950)',
      },
      green: {
        50: 'var(--color-green-50)',
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
        300: 'var(--color-green-300)',
        400: 'var(--color-green-400)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
        700: 'var(--color-green-700)',
        800: 'var(--color-green-800)',
        900: 'var(--color-green-900)',
        950: 'var(--color-green-950)',
      },
      emerald: {
        50: 'var(--color-emerald-50)',
        100: 'var(--color-emerald-100)',
        200: 'var(--color-emerald-200)',
        300: 'var(--color-emerald-300)',
        400: 'var(--color-emerald-400)',
        500: 'var(--color-emerald-500)',
        600: 'var(--color-emerald-600)',
        700: 'var(--color-emerald-700)',
        800: 'var(--color-emerald-800)',
        900: 'var(--color-emerald-900)',
        950: 'var(--color-emerald-950)',
      },
      teal: {
        50: 'var(--color-teal-50)',
        100: 'var(--color-teal-100)',
        200: 'var(--color-teal-200)',
        300: 'var(--color-teal-300)',
        400: 'var(--color-teal-400)',
        500: 'var(--color-teal-500)',
        600: 'var(--color-teal-600)',
        700: 'var(--color-teal-700)',
        800: 'var(--color-teal-800)',
        900: 'var(--color-teal-900)',
        950: 'var(--color-teal-950)',
      },
      cyan: {
        50: 'var(--color-cyan-50)',
        100: 'var(--color-cyan-100)',
        200: 'var(--color-cyan-200)',
        300: 'var(--color-cyan-300)',
        400: 'var(--color-cyan-400)',
        500: 'var(--color-cyan-500)',
        600: 'var(--color-cyan-600)',
        700: 'var(--color-cyan-700)',
        800: 'var(--color-cyan-800)',
        900: 'var(--color-cyan-900)',
        950: 'var(--color-cyan-950)',
      },
      sky: {
        50: 'var(--color-sky-50)',
        100: 'var(--color-sky-100)',
        200: 'var(--color-sky-200)',
        300: 'var(--color-sky-300)',
        400: 'var(--color-sky-400)',
        500: 'var(--color-sky-500)',
        600: 'var(--color-sky-600)',
        700: 'var(--color-sky-700)',
        800: 'var(--color-sky-800)',
        900: 'var(--color-sky-900)',
        950: 'var(--color-sky-950)',
      },
      blue: {
        50: 'var(--color-blue-50)',
        100: 'var(--color-blue-100)',
        200: 'var(--color-blue-200)',
        300: 'var(--color-blue-300)',
        400: 'var(--color-blue-400)',
        500: 'var(--color-blue-500)',
        600: 'var(--color-blue-600)',
        700: 'var(--color-blue-700)',
        800: 'var(--color-blue-800)',
        900: 'var(--color-blue-900)',
        950: 'var(--color-blue-950)',
      },
      indigo: {
        50: 'var(--color-indigo-50)',
        100: 'var(--color-indigo-100)',
        200: 'var(--color-indigo-200)',
        300: 'var(--color-indigo-300)',
        400: 'var(--color-indigo-400)',
        500: 'var(--color-indigo-500)',
        600: 'var(--color-indigo-600)',
        700: 'var(--color-indigo-700)',
        800: 'var(--color-indigo-800)',
        900: 'var(--color-indigo-900)',
        950: 'var(--color-indigo-950)',
      },
      violet: {
        50: 'var(--color-violet-50)',
        100: 'var(--color-violet-100)',
        200: 'var(--color-violet-200)',
        300: 'var(--color-violet-300)',
        400: 'var(--color-violet-400)',
        500: 'var(--color-violet-500)',
        600: 'var(--color-violet-600)',
        700: 'var(--color-violet-700)',
        800: 'var(--color-violet-800)',
        900: 'var(--color-violet-900)',
        950: 'var(--color-violet-950)',
      },
      purple: {
        50: 'var(--color-purple-50)',
        100: 'var(--color-purple-100)',
        200: 'var(--color-purple-200)',
        300: 'var(--color-purple-300)',
        400: 'var(--color-purple-400)',
        500: 'var(--color-purple-500)',
        600: 'var(--color-purple-600)',
        700: 'var(--color-purple-700)',
        800: 'var(--color-purple-800)',
        900: 'var(--color-purple-900)',
        950: 'var(--color-purple-950)',
      },
      fuchsia: {
        50: 'var(--color-fuchsia-50)',
        100: 'var(--color-fuchsia-100)',
        200: 'var(--color-fuchsia-200)',
        300: 'var(--color-fuchsia-300)',
        400: 'var(--color-fuchsia-400)',
        500: 'var(--color-fuchsia-500)',
        600: 'var(--color-fuchsia-600)',
        700: 'var(--color-fuchsia-700)',
        800: 'var(--color-fuchsia-800)',
        900: 'var(--color-fuchsia-900)',
        950: 'var(--color-fuchsia-950)',
      },
      pink: {
        50: 'var(--color-pink-50)',
        100: 'var(--color-pink-100)',
        200: 'var(--color-pink-200)',
        300: 'var(--color-pink-300)',
        400: 'var(--color-pink-400)',
        500: 'var(--color-pink-500)',
        600: 'var(--color-pink-600)',
        700: 'var(--color-pink-700)',
        800: 'var(--color-pink-800)',
        900: 'var(--color-pink-900)',
        950: 'var(--color-pink-950)',
      },
      rose: {
        50: 'var(--color-rose-50)',
        100: 'var(--color-rose-100)',
        200: 'var(--color-rose-200)',
        300: 'var(--color-rose-300)',
        400: 'var(--color-rose-400)',
        500: 'var(--color-rose-500)',
        600: 'var(--color-rose-600)',
        700: 'var(--color-rose-700)',
        800: 'var(--color-rose-800)',
        900: 'var(--color-rose-900)',
        950: 'var(--color-rose-950)',
      },
    },
    spacing: {
      0: 'var(--scale-0)',
      1: 'var(--scale-1)',
      2: 'var(--scale-2)',
      3: 'var(--scale-3)',
      4: 'var(--scale-4)',
      5: 'var(--scale-5)',
      6: 'var(--scale-6)',
      7: 'var(--scale-7',
      8: 'var(--scale-8)',
      9: 'var(--scale-9)',
      10: 'var(--scale-10)',
      11: 'var(--scale-11)',
      12: 'var(--scale-12)',
      14: 'var(--scale-14)',
      16: 'var(--scale-16)',
      20: 'var(--scale-20)',
      24: 'var(--scale-24)',
      28: 'var(--scale-28)',
      32: 'var(--scale-32)',
      36: 'var(--scale-36)',
      40: 'var(--scale-40)',
      44: 'var(--scale-44)',
      48: 'var(--scale-48)',
      52: 'var(--scale-52)',
      56: 'var(--scale-56)',
      60: 'var(--scale-60)',
      64: 'var(--scale-64)',
      72: 'var(--scale-72)',
      80: 'var(--scale-80)',
      96: 'var(--scale-96)',
    },
    screens: {
      xs: 'var(--breakpoints-xs)',
      sm: 'var(--breakpoints-sm)',
      md: 'var(--breakpoints-md)',
      lg: 'var(--breakpoints-lg)',
      xl: 'var(--breakpoints-xl)',
      '2xl': 'var(--breakpoints-xxl)',
    },
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      mono: [
        'SFMono-Regular',
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    extend: {
      colors: {
        color: {
          'bg-layout': 'var(--color-bg-layout)',
          'bg-container': 'var(--color-bg-container)',
          'bg-container-subtle': 'var(--color-bg-container-subtle)',
          'bg-container-subtlest': 'var(--color-bg-container-subtlest)',
          'bg-container-inverse': 'var(--color-bg-container-inverse)',
          'bg-elevated': 'var(--color-bg-elevated)',
          'bg-mask': 'var(--color-bg-mask)',
          'bg-interactive': 'var(--color-bg-interactive)',
          'bg-interactive-hover': 'var(--color-bg-interactive-hover)',
          'bg-interactive-selected': 'var(--color-bg-interactive-selected)',
          'bg-interactive-selected-hover':
            'var(--color-bg-interactive-selected-hover)',
          'bg-brand': 'var(--color-bg-brand)',
          'bg-brand-hover': 'var(--color-bg-brand-hover)',
          'bg-brand-active': 'var(--color-bg-brand-active)',
          'bg-brand-selected': 'var(--color-bg-brand-selected)',
          'bg-brand-subtle': 'var(--color-bg-brand-subtle)',
          'bg-brand-subtlest': 'var(--color-bg-brand-subtlest)',
          'bg-danger': 'var(--color-bg-danger)',
          'bg-danger-hover': 'var(--color-bg-danger-hover)',
          'bg-danger-active': 'var(--color-bg-danger-active)',
          'bg-danger-selected': 'var(--color-bg-danger-selected)',
          'bg-danger-subtle': 'var(--color-bg-danger-subtle)',
          'bg-danger-subtlest': 'var(--color-bg-danger-subtlest)',
          'bg-warning': 'var(--color-bg-warning)',
          'bg-warning-hover': 'var(--color-bg-warning-hover)',
          'bg-warning-active': 'var(--color-bg-warning-active)',
          'bg-warning-selected': 'var(--color-bg-warning-selected)',
          'bg-warning-subtle': 'var(--color-bg-warning-subtle)',
          'bg-warning-subtlest': 'var(--color-bg-warning-subtlest)',
          'bg-success': 'var(--color-bg-success)',
          'bg-success-hover': 'var(--color-bg-success-hover)',
          'bg-success-active': 'var(--color-bg-success-active)',
          'bg-success-selected': 'var(--color-bg-success-selected)',
          'bg-success-subtle': 'var(--color-bg-success-subtle)',
          'bg-success-subtlest': 'var(--color-bg-success-subtlest)',
          'bg-info': 'var(--color-bg-info)',
          'bg-info-hover': 'var(--color-bg-info-hover)',
          'bg-info-active': 'var(--color-bg-info-active)',
          'bg-info-selected': 'var(--color-bg-info-selected)',
          'bg-info-subtle': 'var(--color-bg-info-subtle)',
          'bg-info-subtlest': 'var(--color-bg-info-subtlest)',
          'bg-discovery': 'var(--color-bg-discovery)',
          'bg-discovery-hover': 'var(--color-bg-discovery-hover)',
          'bg-discovery-active': 'var(--color-bg-discovery-active)',
          'bg-discovery-selected': 'var(--color-bg-discovery-selected)',
          'bg-discovery-subtle': 'var(--color-bg-discovery-subtle)',
          'bg-discovery-subtlest': 'var(--color-bg-discovery-subtlest)',
          text: 'var(--color-text)',
          'text-description': 'var(--color-text-description)',
          'text-placeholder': 'var(--color-text-placeholder)',
          'text-inverse': 'var(--color-text-inverse)',
          'text-brand': 'var(--color-text-brand)',
          'text-brand-hover': 'var(--color-text-brand-hover)',
          'text-brand-active': 'var(--color-text-brand-active)',
          'text-brand-strong': 'var(--color-text-brand-strong)',
          'text-brand-inverse': 'var(--color-text-brand-inverse)',
          'text-danger': 'var(--color-text-danger)',
          'text-danger-hover': 'var(--color-text-danger-hover)',
          'text-danger-active': 'var(--color-text-danger-active)',
          'text-danger-strong': 'var(--color-text-danger-strong)',
          'text-danger-inverse': 'var(--color-text-danger-inverse)',
          'text-warning': 'var(--color-text-warning)',
          'text-warning-hover': 'var(--color-text-warning-hover)',
          'text-warning-active': 'var(--color-text-warning-active)',
          'text-warning-strong': 'var(--color-text-warning-strong)',
          'text-warning-inverse': 'var(--color-text-warning-inverse)',
          'text-success': 'var(--color-text-success)',
          'text-success-hover': 'var(--color-text-success-hover)',
          'text-success-active': 'var(--color-text-success-active)',
          'text-success-strong': 'var(--color-text-success-strong)',
          'text-success-inverse': 'var(--color-text-success-inverse)',
          'text-info': 'var(--color-text-info)',
          'text-info-hover': 'var(--color-text-info-hover)',
          'text-info-active': 'var(--color-text-info-active)',
          'text-info-strong': 'var(--color-text-info-strong)',
          'text-info-inverse': 'var(--color-text-info-inverse)',
          'text-discovery': 'var(--color-text-discovery)',
          'text-discovery-hover': 'var(--color-text-discovery-hover)',
          'text-discovery-active': 'var(--color-text-discovery-active)',
          'text-discovery-strong': 'var(--color-text-discovery-strong)',
          'text-discovery-inverse': 'var(--color-text-discovery-inverse)',
          'border-primary': 'var(--color-border-primary)',
          'border-primary-hover': 'var(--color-border-primary-hover)',
          'border-secondary': 'var(--color-border-secondary)',
          'border-brand': 'var(--color-border-brand)',
          'border-brand-hover': 'var(--color-border-brand-hover)',
          'border-brand-active': 'var(--color-border-brand-active)',
          'border-brand-subtle': 'var(--color-border-brand-subtle)',
          'border-brand-subtlest': 'var(--color-border-brand-subtlest)',
          'border-danger': 'var(--color-border-danger)',
          'border-danger-hover': 'var(--color-border-danger-hover)',
          'border-danger-active': 'var(--color-border-danger-active)',
          'border-danger-subtle': 'var(--color-border-danger-subtle)',
          'border-danger-subtlest': 'var(--color-border-danger-subtlest)',
          'border-warning': 'var(--color-border-warning)',
          'border-warning-hover': 'var(--color-border-warning-hover)',
          'border-warning-active': 'var(--color-border-warning-active)',
          'border-warning-subtle': 'var(--color-border-warning-subtle)',
          'border-warning-subtlest': 'var(--color-border-warning-subtlest)',
          'border-success': 'var(--color-border-success)',
          'border-success-hover': 'var(--color-border-success-hover)',
          'border-success-active': 'var(--color-border-success-active)',
          'border-success-subtle': 'var(--color-border-success-subtle)',
          'border-success-subtlest': 'var(--color-border-success-subtlest)',
          'border-info': 'var(--color-border-info)',
          'border-info-hover': 'var(--color-border-info-hover)',
          'border-info-active': 'var(--color-border-info-active)',
          'border-info-subtle': 'var(--color-border-info-subtle)',
          'border-info-subtlest': 'var(--color-border-info-subtlest)',
          'border-discovery': 'var(--color-border-discovery)',
          'border-discovery-hover': 'var(--color-border-discovery-hover)',
          'border-discovery-active': 'var(--color-border-discovery-active)',
          'border-discovery-subtle': 'var(--color-border-discovery-subtle)',
          'border-discovery-subtlest': 'var(--color-border-discovery-subtlest)',
          icon: 'var(--color-icon)',
          'icon-hover': 'var(--color-icon-hover)',
          'icon-active': 'var(--color-icon-active)',
          'icon-inverse': 'var(--color-icon-inverse)',
          'icon-brand': 'var(--color-icon-brand)',
          'icon-brand-hover': 'var(--color-icon-brand-hover)',
          'icon-brand-active': 'var(--color-icon-brand-active)',
          'icon-brand-strong': 'var(--color-icon-brand-strong)',
          'icon-brand-inverse': 'var(--color-icon-brand-inverse)',
          'icon-danger': 'var(--color-icon-danger)',
          'icon-danger-hover': 'var(--color-icon-danger-hover)',
          'icon-danger-active': 'var(--color-icon-danger-active)',
          'icon-danger-strong': 'var(--color-icon-danger-strong)',
          'icon-danger-inverse': 'var(--color-icon-danger-inverse)',
          'icon-warning': 'var(--color-icon-warning)',
          'icon-warning-hover': 'var(--color-icon-warning-hover)',
          'icon-warning-active': 'var(--color-icon-warning-active)',
          'icon-warning-strong': 'var(--color-icon-warning-strong)',
          'icon-warning-inverse': 'var(--color-icon-warning-inverse)',
          'icon-success': 'var(--color-icon-success)',
          'icon-success-hover': 'var(--color-icon-success-hover)',
          'icon-success-active': 'var(--color-icon-success-active)',
          'icon-success-strong': 'var(--color-icon-success-strong)',
          'icon-success-inverse': 'var(--color-icon-success-inverse)',
          'icon-info': 'var(--color-icon-info)',
          'icon-info-hover': 'var(--color-icon-info-hover)',
          'icon-info-active': 'var(--color-icon-info-active)',
          'icon-info-strong': 'var(--color-icon-info-strong)',
          'icon-info-inverse': 'var(--color-icon-info-inverse)',
          'icon-discovery': 'var(--color-icon-discovery)',
          'icon-discovery-hover': 'var(--color-icon-discovery-hover)',
          'icon-discovery-active': 'var(--color-icon-discovery-active)',
          'icon-discovery-strong': 'var(--color-icon-discovery-strong)',
          'icon-discovery-inverse': 'var(--color-icon-discovery-inverse)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      spacing: {
        0: 'var(--space-0)',
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        9: 'var(--scale-9)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        16: 'var(--space-16)',
        20: 'var(--space-20)',
        24: 'var(--space-24)',
        28: 'var(--space-28)',
        32: 'var(--space-32)',
        36: 'var(--space-36)',
        40: 'var(--space-40)',
        px: '1px',
        0.5: '2px',
        1.5: '6px',
        2.5: '10px',
        3.5: '14px',
      },
      width: {
        0: 'var(--size-width-0)',
        2: 'var(--size-width-2)',
        4: 'var(--size-width-4)',
        6: 'var(--size-width-6)',
        8: 'var(--size-width-8)',
        9: 'var(--size-width-9)',
        10: 'var(--size-width-10)',
        12: 'var(--size-width-12)',
        16: 'var(--size-width-16)',
        full: '100%',
        screen: '100vw',
        max: 'max-content',
        auto: 'auto',
      },
      height: {
        0: 'var(--size-height-0)',
        2: 'var(--size-height-2)',
        4: 'var(--size-height-4)',
        6: 'var(--size-height-6)',
        8: 'var(--size-height-8)',
        9: 'var(--size-height-9)',
        10: 'var(--size-height-10)',
        12: 'var(--size-height-12)',
        16: 'var(--size-height-16)',
        full: '100%',
        screen: '100vh',
        max: 'max-content',
        auto: 'auto',
      },
      minHeight: {
        2: 'var(--scale-2)',
      },
      maxHeight: {
        96: 'var(--scale-96)',
      },
      borderRadius: {
        'radius-none': 'var(--border-radius-none)',
        'radius-sm': 'var(--border-radius-sm)',
        radius: 'var(--border-radius)',
        'radius-lg': 'var(--border-radius-lg)',
        'radius-full': 'var(--border-radius-full)',
      },
      borderWidth: {
        0: 'var(--border-width-0)',
        DEFAULT: 'var(--border-width-1)',
        2: 'var(--border-width-2)',
        4: 'var(--border-width-4)',
      },
      opacity: {
        visible: 'var(--opacity-visible)',
        hover: 'var(--opacity-hover)',
        disabled: 'var(--opacity-disabled)',
        invisible: 'var(--opacity-invisible)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      transformOrigin: {
        'top-center': 'top center',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
