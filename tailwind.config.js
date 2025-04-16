/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        // => @media (min-width: 450px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1700px',
      },
      colors: {
        'primary': '#756EF3',
        'l1' : '#EFF2F7',                     
        'g1' : '#848A94',
        'g2' : '#E9EEEA',
        'g3' : '#8E92BC',
        'g4' : '#D9D9D9',
        'g5' : '#666666',
        'g6' : '#8F8F8F',
        'b1' : '#1A1A1A',
        'green' : '#00632B',
        'l_green' : '#75C675',
        'red' : '#B01212',
        'yellow' : '#EFB008',
        's1' : '#474747',
        'l2' : '#D6D6D6'
      },
      fontSize:{
        '12' : ['12px','22px'],
        '14' : ['14px','20px'], 
        '16' : ['16px','26px'], 
        '18' : ['18px','24px'], 
        '20' : ['20px','28px'],
        '22' : ['22px','30px'],
        '24' : ['24px','32px'], 
        '28' : ['28px','36px'], 
        '30' : ['30px','40px'],
        '32' : ['32px','42px'],
        '34' : ['34px','44px'],
        '36' : ['36px','46px'],
        '44' : ['44px','54px'],
        '48' : ['48px','56px'],
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        'inter' : ['Inter','sans-serif']

      },
    },
  },
  plugins: [],
}