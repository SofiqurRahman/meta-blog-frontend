import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { ThemeContext } from './context/ThemeContext';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <BlogProvider>
          <Navbar />
          <main className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <Outlet />
          </main>
          <Footer />
        </BlogProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App