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
			padding: '2rem',
			screens: {
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'vintage-parchment': 'hsl(var(--vintage-parchment))',
				'vintage-ink': 'hsl(var(--vintage-ink))',
				'vintage-sepia': 'hsl(var(--vintage-sepia))',
				'vintage-gold': 'hsl(var(--vintage-gold))',
				'vintage-brass': 'hsl(var(--vintage-brass))',
				'vintage-burgundy': 'hsl(var(--vintage-burgundy))',
				'vintage-amber': 'hsl(var(--vintage-amber))',
				'vintage-leather': 'hsl(var(--vintage-leather))',
				'vintage-smoke': 'hsl(var(--vintage-smoke))'
			},
			backgroundImage: {
				'gradient-vintage': 'var(--gradient-vintage)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-mystery': 'var(--gradient-mystery)'
			},
			fontFamily: {
				'serif': ['Crimson Text', 'serif'],
				'display': ['Cinzel', 'serif']
			},
			boxShadow: {
				'vintage': 'var(--shadow-vintage)',
				'golden': 'var(--shadow-golden)',
				'deep': 'var(--shadow-deep)'
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
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'vintage-appear': {
					'0%': { opacity: '0', transform: 'scale(0.95) rotateX(10deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotateX(0deg)' }
				},
				'typewriter': {
					'0%': { width: '0ch' },
					'100%': { width: '100%' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) scale(1.1)' },
					'50%': { transform: 'translateY(-15px) scale(1.1)' }
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'float-delayed-2': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-25px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'vintage-appear': 'vintage-appear 1s ease-out',
				'typewriter': 'typewriter 3s steps(40) infinite alternate',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 4s ease-in-out infinite 1s',
				'float-delayed-2': 'float-delayed-2 5s ease-in-out infinite 2s'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
