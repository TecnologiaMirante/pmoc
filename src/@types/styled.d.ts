import 'styled-components';
import { defalutTheme } from '../styles/themes/default';

type ThemeType = typeof defalutTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}