import styled, { css } from "styled-components";

type BoxProps = {
    width: string;
}
export const Wrapper = styled.div<BoxProps>`
    width: ${(p: BoxProps) => p.width};
    background: #2D6DE9;
    border-radius: 16px;
    padding: 18px;
    margin: 10px;
`