/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      keyframes: {
        "fade-in-right": {
          "0%": {
            "opacity": "0",
            "transform": "translateX(-20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateX(0)"
          }
        },
        "fade-in": {
          "0%": {
            "opacity": "0"
          },
          "100%": {
            "opacity": "1"
          }
        },
        "fade-in-down": {
          "0%": {
            "opacity": "0",
            "transform": "translateY(-20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        },
        "fade-in-up": {
          "0%": {
            "opacity": "0",
            "transform": "translateY(20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        },
        "fade-in-left": {
          "0%": {
            "opacity": "0",
            "transform": "translateX(20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateX(0)"
          }
        },
        "slide-in-left": {
          "0%": {
            "transform": "translateX(-20px)"
          },
          "100%": {
            "transform": "translateX(0)"
          }
        },
        "fade-out": {
          "0%": {
            "opacity": "1"
          },
          "100%": {
            "opacity": "0"
          }
        },
        "tada": {
          "0%": {
            "transform": "scale(1)"
          },
          "10%": {
            "transform": "scale(0.9) rotate(-3deg)"
          },
          "20%": {
            "transform": "scale(0.9) rotate(-3deg)"
          },
          "30%": {
            "transform": "scale(1.1) rotate(3deg)"
          },
          "40%": {
            "transform": "scale(1.1) rotate(-3deg)"
          },
          "50%": {
            "transform": "scale(1.1) rotate(3deg)"
          },
          "60%": {
            "transform": "scale(1.1) rotate(-3deg)"
          },
          "70%": {
            "transform": "scale(1.1) rotate(3deg)"
          },
          "80%": {
            "transform": "scale(1.1) rotate(-3deg)"
          },
          "90%": {
            "transform": "scale(1.1) rotate(3deg)"
          },
          "100%": {
            "transform": "scale(1) rotate(0)"
          }
        },
        "slide-in-right": {
          "0%": {
            "transform": "translateX(20px)"
          },
          "100%": {
            "transform": "translateX(0)"
          }
        },
        "slide-in-top": {
          "0%": {
            "transform": "translateY(-60px)"
          },
          "100%": {
            "transform": "translateY(0)"
          }
        },
        "slide-in-bottom": {
          "0%": {
            "transform": "translateY(60px)"
          },
          "100%": {
            "transform": "translateY(0)"
          }
        }
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-in",
        "fade-out": "fade-out 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-in-out",
        "fade-in-left": "fade-in-left 0.6s ease-in-out",
        "fade-in-down": "fade-in-down 0.6s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-in-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "slide-in-top": "slide-in-top 0.6s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.6s ease-out",
        "tada": "tada 1s ease-in-out"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};
