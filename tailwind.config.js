
module.exports = {
  mode: 'jit', // Enable Just-In-Time mode for faster builds
  content: [
    './dist/**/*.html', // Include all HTML files in the dist folder
    './dist/**/*.js',   // Include all JS files in the dist folder
    './src/**/*.html',
  './src/**/*.js',
  ],
  theme: {
    screens: {
      'md': '768px', // Medium devices (tablets)
      'lg': '1024px', // Large devices (desktops)
      'xl': '1280px', // Extra large devices
    },
    extend: {
      backgroundImage: {
        'mobile': "url('images/background-mobile.png')",

        'desktop': "url('images/background-desktop.png')",
      },
    },
  },
  plugins: [],
};
    
  
