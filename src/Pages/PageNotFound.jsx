import styles from "../CSS/404.module.css"; // Importation du CSS module

const NotFoundPage = () => {
    return (
        <div className={styles.errorPage}>
            <div className={styles.moon}></div>
            <div className={`${styles.moon__crater} ${styles.moon__crater1}`}></div>
            <div className={`${styles.moon__crater} ${styles.moon__crater2}`}></div>
            <div className={`${styles.moon__crater} ${styles.moon__crater3}`}></div>

            <div className={`${styles.star} ${styles.star1}`}></div>
            <div className={`${styles.star} ${styles.star2}`}></div>
            <div className={`${styles.star} ${styles.star3}`}></div>
            <div className={`${styles.star} ${styles.star4}`}></div>
            <div className={`${styles.star} ${styles.star5}`}></div>

            <div className={styles.error}>
                <div className={styles.error__title}>404</div>
                <div className={styles.error__subtitle}>Hmmm...</div>
                <div className={styles.error__description}>
                    It looks like one of the developers fell asleep
                </div>
            </div>
        </div >
    );
};

export default NotFoundPage;
