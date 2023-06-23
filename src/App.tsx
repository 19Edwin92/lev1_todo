import React from 'react'
import Button from './components/atoms/Button'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App:React.FC = () =>  {
  return (
    <ThemeProvider theme={theme}>
      <Button btnText='버튼'/>
      <br/><br/>
      <Button btnText='버튼' fc={theme.colors.white} bg={theme.colors.green} size="large"/>
      <br/><br/>
      <Button btnText='버튼' fc={theme.colors.white} bg={theme.colors.green} size="medium"/>
      <br/><br/>
      <Button btnText='버튼' fc={theme.colors.white} bg={theme.colors.green} size="small"/>
      <br/><br/>
      <Button btnText='버튼' fc={theme.colors.white} bg={theme.colors.red} size="large"/>
      <br/><br/>
      <Button btnText='버튼' fc={theme.colors.white} bg={theme.colors.red} size="medium"/>
      <br/><br/>
      <Button btnText='버튼' fc={theme.colors.white} bg={theme.colors.red}/>
      <br/><br/>
      <Button btnText='버튼' border={theme.colors.green}/>
      <br/><br/>
      <Button btnText='버튼' border={theme.colors.red}/>
    </ThemeProvider>
  )
}

export default App