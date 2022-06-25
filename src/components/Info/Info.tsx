import React from 'react'
import * as Styled from './styled'
import Count from "../Count/Count";

interface Props {
    number: number
    firstText: string
    secondText: string
}

const Info = ({ number, firstText, secondText }: Props): JSX.Element => {
    return (
        <Styled.Info>
            <strong>
                <Count maxCount={number} duration={2000} />
                {firstText}
            </strong>
            {secondText}
        </Styled.Info>
    )
}

export default Info