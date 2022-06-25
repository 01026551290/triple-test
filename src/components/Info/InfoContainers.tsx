import React from 'react'
import * as Styled from './styled'
import {METRIC_ITEMS, Metric} from "../../assets/Data";
import Info from '../Info/Info'

interface Props {
    opacityState: boolean
}

const InfoContainers = ({ opacityState }: Props): JSX.Element => {
    return (
        <Styled.Container opacityState={opacityState}>
            {METRIC_ITEMS.map((data: Metric, index: number) => (
                <Info
                    key={index.toString()}
                    number={data.NUMBER}
                    firstText={data.FIRST_TEXT}
                    secondText={data.SECOND_TRAVEL}
                />
            ))}
        </Styled.Container>
    )
}

export default InfoContainers