import { useState } from 'react'
import { ThemeProvider } from 'react-bootstrap'
import style from './app.module.scss'
import Masonry from './components/masonry'
import Timeline from './components/timeline'
import '@fontsource-variable/roboto-condensed'

function App() {
  const [isRtl, setIsRtl] = useState(true)

  return (
    <ThemeProvider dir={isRtl ? 'rtl' : 'ltr'}>
      <div className={style.contentContainer}>
        <Timeline />
        <Masonry />
      </div>
    </ThemeProvider>
  )
}

export default App
