import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setIcon(theme == "dark" ? '☀️' : '🌙');
  }, [theme]);

  return (
    <button className={`text-2xl hover:animate-spin`} type='button' onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
      <span>{icon}</span>
    </button>
  )
}

export default ThemeToggle;