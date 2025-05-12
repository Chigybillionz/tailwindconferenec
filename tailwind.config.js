module.exports = {
  mode: 'jit', // Enable Just-In-Time mode for faster builds
  content: [
    './dist/**/*.html', // Include all HTML files in the dist folder
    './dist/**/*.js',   // Include all JS files in the dist folder
  ],
    theme: {
        screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        
        },
                backgroundImage: {
                  // 'mobile': "url('images/background-mobile.png')",
                  'mobile': "bg-gradient-to-b from-[#1E1E2F] to-[#1E1E2F]",
                  'desktop': "url('images/background-desktop.png')",
                },
              },
        }
      
    
  
