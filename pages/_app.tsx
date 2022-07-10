import { ThemeProvider} from "styled-components"
import theme from "../styles/theme"
import StylesGlobal from "../styles/global"

function App ({Component, pageProps}: any){
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps}/>
      <StylesGlobal/>
    </ThemeProvider>
  )
}

export default App
