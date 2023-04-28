import * as s from "./style";


const Box = ({children, width}: { children: any, width: string }) => {
    return (
        <s.Wrapper width={width}>{children}</s.Wrapper>
    )
}
export default Box;