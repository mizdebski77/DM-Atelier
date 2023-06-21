import { DefaultTheme as StyledDefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme extends StyledDefaultTheme {
        color: {
            mainColor: string;
            secondColor: string;
        }
        breakPoint: {

        };
    }
}