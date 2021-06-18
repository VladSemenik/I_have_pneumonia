import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import { ImageViewer } from './modules/imageViewer';
import { ThemeProvider } from './modules/theme'
import Header from './components/Header'
import Banner from './components/Banner'
import Parallax from './components/Parallax'
import Parallax_back from './assets/images/parallax_back.webp'
import Section from './components/Section';
import { colors } from './modules/theme'

const useStyles = makeStyles({
  parallaxImage: {
    paddingTop: 100,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  viewerContent: {
    height: 700,
    width: '100%',
  }
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider>
      <Parallax back={<img className={classes.parallaxImage} src={Parallax_back} alt="neurons"/>}>
        <div className="App">
          <Header />
          <Banner />
          <Section
            title={'Are we getting started?'}
            backgroudColor={colors.whiteBG}
          >
            <div className={classes.viewerContent}>
              <ImageViewer />
            </div>
          </Section>
        </div>
      </Parallax>
    </ThemeProvider>
  );
}

export default App;
