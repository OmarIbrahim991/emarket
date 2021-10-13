import { Container } from 'react-bootstrap'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({ rating }) => {
    return (
        <Container>
            {
                [1, 2, 3, 4, 5].map((r) => (
                    <span key={r}>
                        {
                            rating >= r ? 
                                <FaStar size={30} fill="gold" />
                            :
                                r-rating > 0 && r-rating < 1 ? <FaStarHalfAlt size={30} fill="gold" /> : <FaRegStar size={30} fill="gold" />
                        }
                    </span>
                ))
            }
        </Container>
    )
}

export default Rating
