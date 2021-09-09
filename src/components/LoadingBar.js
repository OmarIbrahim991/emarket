import { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'

const LoadingBar = (props) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        Array.from(Array(5).keys()).forEach(val => setTimeout(() => setProgress(20*(val+1)), (val+1)*30))
    }, [])

    return (
        <ProgressBar variant="danger" now={progress} style={{ width: "100%", height: 3, }} {...props} />
    )
}

export default LoadingBar
