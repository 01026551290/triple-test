import {useEffect, useRef} from "react";

type TimerHandler = () => void

type DelayType = number | null

const useTimeOut = (callback: TimerHandler, delay: DelayType) => {
    const savedCallback = useRef<TimerHandler>()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        let timer: NodeJS.Timeout

        const executeCallback = () => {
            savedCallback.current!()

            if (delay !== null) {
                timer = setTimeout(executeCallback, delay)
            }
        }

        if (delay !== null) {
            timer = setTimeout(executeCallback, delay)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [delay])
}

export default useTimeOut