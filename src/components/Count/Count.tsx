import { useState, useEffect } from 'react'

interface Props {
    maxCount: number
    duration: number
}

const Count = ({ maxCount, duration }: Props): JSX.Element => {

    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1);

    useEffect(() => {
        const stepTime = Math.floor(duration / maxCount * delay);
        setDelay(Math.pow((0.1 + count/maxCount ), 35));

        const intervalCount = setInterval(() => {
            if (count < maxCount) {
                setCount(count + 1);
            }
        }, stepTime);
        return () => clearInterval(intervalCount);
    }, [count])

    return <span>{count}</span>
}

export default Count