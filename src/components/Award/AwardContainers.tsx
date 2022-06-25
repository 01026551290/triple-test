import React from 'react'
import Award from './Award'
import * as Styled from './styled'
import { AWARD_ITEMS, AwardType} from "../../assets/Data";

interface Props {
    opacityState: boolean
}

const AwardContainer = ({ opacityState }: Props): JSX.Element => {
    return (
        <Styled.Container opacityState={opacityState}>
            {AWARD_ITEMS.map((data: AwardType, index: number) => (
                <Award
                    key={index}
                    imageUrl={data.IMAGE_URL}
                    title={data.TITLE}
                    content={data.CONTENT}
                />
            ))}
        </Styled.Container>
    )
}

export default AwardContainer