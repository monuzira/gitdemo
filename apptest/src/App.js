import './App.css';
import {HeaderStyled} from '../src/Styled/Header.Styled'
import { ThemeProvider } from 'styled-components';
import Global from './Styled/Global';

const theme={
  colors:
  {
      header:"green",
      body:"blue"

  }

}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <Global />
    <HeaderStyled>
      Test
    </HeaderStyled>
    </>
    </ThemeProvider>
  );
}

export default App;
