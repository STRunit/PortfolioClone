export const Profile = ({ imageSrc, styles }) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={"profile"} className={styles.image} />
      <div className={styles.background} />
    </div>
  );
};
