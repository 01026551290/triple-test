import React, { useRef, useState } from 'react'
import * as Styled from './styled'
import Logo from '../../components/Logo/logo'
import Award from "../../components/Award/AwardContainers";
import Info from "../../components/Info/InfoContainers";
import useTimeOut from "../../hooks/useTimeOut";

const Metrics: React.FC = () => {

    const [opacityState, setOpacityState] = useState<boolean[]>([true, true, true,])
    const [isDone, setIsDone] = useState<boolean>(true)
    const Count = useRef<number>(-1)

    const handleOpacity = (): void => {
        if (Count.current >= 2) {
            setIsDone(false)
            return
        }
        Count.current += 1
        const tempState = [...opacityState]
        tempState[Count.current] = false
        setOpacityState(tempState)
    }

    useTimeOut(handleOpacity, isDone ? 100 : null)

    return (
        <Styled.countUpSection>
            <Logo opacityState={opacityState[0]}/>
            <Info opacityState={opacityState[1]}/>
            <Award opacityState={opacityState[2]}/>
        </Styled.countUpSection>
    )
}

export default Metrics;