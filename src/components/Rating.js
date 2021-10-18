import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({ rating, inputVal, setInputVal, interactive=false }) => {
    const [active, setActive] = useState(0)
    const starProps = { size: 30, fill: "gold" }

    if (interactive) {
        return (
            <Container onMouseLeave={() => setActive(inputVal)}>
                {
                    [1, 2, 3, 4, 5].map((r) => (
                        <span key={r} className="clickable" onMouseOver={() => setActive(r)} onClick={() => setInputVal(r)}>
                            {active >= r || (inputVal >= r && active >= inputVal) ? <FaStar {...starProps} /> : <FaRegStar {...starProps} />}
                        </span>
                    ))
                }
            </Container>
        )
    }
    return (
        <Container>
            {
                [1, 2, 3, 4, 5].map((r) => (
                    <span key={r}>
                        {
                            rating >= r ?
                                <FaStar {...starProps} />
                            :
                                r-rating < 1 ? <FaStarHalfAlt {...starProps} /> : <FaRegStar {...starProps} />
                        }
                    </span>
                ))
            }
        </Container>
    )
}

export default Rating
