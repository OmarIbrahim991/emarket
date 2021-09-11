import { useEffect, useRef, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'

const LoadingBar = ({ loading }) => {
	const [progress, setProgress] = useState(0)
	const mounted = useRef(false)

	useEffect(() => {
		mounted.current = true
		Array.from(Array(5).keys()).forEach(val => setTimeout(() => mounted.current && setProgress(20*(val+1)), (val+1)*25))
		return () => mounted.current = false
	}, [])

	return (
		<ProgressBar variant="danger" now={progress} style={{ width: "100%", height: loading ? 4 : 0, }} />
	)
}

export default LoadingBar
