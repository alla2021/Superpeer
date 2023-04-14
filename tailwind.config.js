/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      width: {
        'logo': '343px',
        'logo-small':'170px',
        'phone':'270px',
        'computer':'879px',
      },
      height: {
        'logo': '115px',
        'logo-small':'57px',
        'phone':'530px',
        'computer':'548px',
      },
      fontSize: {
        '55': '55px',
        '22': '22px',
      },
      gradientColorStops: {
        'custom-purple': '#F0ECFF',
        'custom-yellow':'FFF9E8',
      },
      boxShadow: {
        '2px_2px_rgba(81,81,81,1)': '2px 2px rgba(81, 81, 81, 1)',
      },
      maxWidth: {
        '322': '322px',
      },
      padding: {
        '17': '17px',
        '90': '90px',
      },
      margin: {
        '45': '45px',
      },
    },
  },
  plugins: [],
}

