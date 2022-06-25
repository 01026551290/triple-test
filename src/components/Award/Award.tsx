import React from 'react'
import * as Styled from './styled'

interface Props {
    imageUrl: string
    title: string
    content: string
}

const Award = ({ imageUrl, title, content }: Props): JSX.Element => {
    return (
        <Styled.Award imageUrl={imageUrl}>
            {title}
            <br />
            {content}
        </Styled.Award>
    )
}

export default Award