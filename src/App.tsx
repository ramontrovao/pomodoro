import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button variant="primary" />
      <Button variant="secoundary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
};
