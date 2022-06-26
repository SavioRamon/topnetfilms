import "styled-components";
import { ColorTypes } from "./colors";
import { ThemePropsTypes } from "./index";

declare module "styled-components" {
    export interface DefaultTheme extends ThemePropsTypes, ColorTypes  { }
}