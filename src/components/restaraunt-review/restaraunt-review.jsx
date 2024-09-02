import styles from "./restataunt-review.module.css"

export const Reviews = ({ reviews }) => {
    return (
        <div className={styles.rrew}>
            {reviews?.map((review) => (
                <li key={review.id}>
                   <strong>{review.user}</strong>: {review.text} (Rate: {review.rating})
                </li>
            ))}
        </div>
    );
};

