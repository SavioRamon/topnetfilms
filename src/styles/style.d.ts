import "styled-components";
import {ThemePropsTypes} from "./index";

declare module "styled-components" {
    export interface DefaultTheme extends ThemePropsTypes { }
}