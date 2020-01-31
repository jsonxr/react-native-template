export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    foreground: string;
  };
  spacing: any;
  fonts: any;
  TextInput: {
    padding: number;
    margin: number;
    color: string;
    borderColor: string;
    backgroundColor: string;
  };
}

// eslint-disable-next-line no-undef
export default Theme;
