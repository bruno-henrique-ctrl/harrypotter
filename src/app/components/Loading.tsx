import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <p>Carregando personagens...</p>
    </div>
  );
};

export default Loading;
