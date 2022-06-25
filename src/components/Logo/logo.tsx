import React from 'react'
import { LOGO_BENCHMARK} from "../../assets/Data";
import * as Styled from './styled'

interface Props {
    opacityState: boolean
}

const Logo = ({ opacityState }: Props): JSX.Element => {
    return (
        <Styled.LogoContent opacityState={opacityState}>
            {LOGO_BENCHMARK.BENCHMARK}
        </Styled.LogoContent>
    )
}

export default Logo