import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

import styles from './themetoggle.module.css'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setIcon(theme == "dark" ? '☀️' : '🌙');
  }, [theme]);

  return (
    <button className={styles.toggle_button} type="buton" onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
      <span>{icon}</span>
    </button>
  )
}

export default ThemeChanger;