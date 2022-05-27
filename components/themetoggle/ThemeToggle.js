import { useTheme } from 'next-themes'
import { Button } from 'react-bootstrap';

import styles from './themetoggle.module.css'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button className={styles.toggle_button} type="buton" onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ?

        (
          <span>☀️</span>
        ) :
        (
          <span>🌙</span>
        )
      }
    </button>
  )
}

export default ThemeChanger;