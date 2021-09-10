import { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'

const LoadingBar = ({ loading }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        Array.from(Array(5).keys()).forEach(val => setTimeout(() => setProgress(20*(val+1)), (val+1)*25))
    }, [])

    return (
        <>
            {loading && <ProgressBar variant="danger" now={progress} style={{ width: "100%", height: 3, }} />}
        </>
    )
}

export default LoadingBar
