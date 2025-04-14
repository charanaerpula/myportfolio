import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				md: '2rem'
			},
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				navy: {
					50: '#eef1ff',
					100: '#dce4ff',
					200: '#c0cbff',
					300: '#9aa7ff',
					400: '#7477fb',
					500: '#5b54f3',
					600: '#4c3ce6',
					700: '#402dcc',
					800: '#3527a5',
					900: '#2d2682',
					950: '#1c1650',
				},
				olive: {
					50: '#f8f9f1',
					100: '#eef0e1',
					200: '#dde2c3',
					300: '#c4ce96',
					400: '#aab86c',
					500: '#8c9c4a',
					600: '#6f7c39',
					700: '#56612f',
					800: '#464e29',
					900: '#3b4226',
					950: '#1f2312',
				},
				highlight: "#556B2F", // olive green
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				pulse: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fadeIn': 'fadeIn 0.5s ease-in-out',
				'slideUp': 'slideUp 0.5s ease-in-out',
				'pulse': 'pulse 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'shimmer': 'shimmer 2s infinite linear'
			},
			fontFamily: {
				sans: ['Trebuchet MS', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				luxury: ['Trebuchet MS', 'Playfair Display', 'serif'],
			},
			boxShadow: {
				'soft': '0 10px 30px rgba(0, 0, 0, 0.08)',
				'hover': '0 15px 35px rgba(0, 0, 0, 0.12)',
				'card': '0 5px 15px rgba(0, 0, 0, 0.06)',
				'button': '0 4px 10px rgba(85, 107, 47, 0.2)',
			},
			fontSize: {
				'2xs': '0.625rem', // 10px
				'xs': '0.75rem',   // 12px
				'sm': '0.875rem',  // 14px
				'base': '1rem',    // 16px
				'lg': '1.125rem',  // 18px
				'xl': '1.25rem',   // 20px
				'2xl': '1.5rem',   // 24px
				'3xl': '1.875rem', // 30px
				'4xl': '2.25rem',  // 36px
				'5xl': '3rem',     // 48px
				'6xl': '3.75rem',  // 60px',
			},
			spacing: {
				'xs': '0.25rem',   // 4px
				'sm': '0.5rem',    // 8px
				'md': '1rem',      // 16px
				'lg': '1.5rem',    // 24px
				'xl': '2rem',      // 32px
				'2xl': '2.5rem',   // 40px
				'3xl': '3rem',     // 48px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
