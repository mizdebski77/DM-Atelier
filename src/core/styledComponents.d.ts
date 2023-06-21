import { DefaultTheme as StyledDefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme extends StyledDefaultTheme {
        color: {
            fontColor: string;
            borderColor: string;
        }
        breakPoint: {
            mobileMax: number;
            firstBreakPoint: number;
            secondBreakPoint: number;
        };
    }
}