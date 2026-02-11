import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const ToggleHeart = () => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div>
            <h2>Toggle Heart</h2>
            <button onClick={handleLike}>
                {
                    isLiked ? (
                        <FaHeart className='red-heart' />
                    ) : (
                        <FaRegHeart />
                    )
                }
            </button>
        </div>
    )
}
