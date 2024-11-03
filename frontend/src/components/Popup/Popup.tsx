import styles from "./Popup.module.scss";

const Popup = ({
  title,
  children,
  setPopupStatus,
}: {
  title: string;
  children: React.ReactNode;
  setPopupStatus: (status: boolean) => void;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_bg}>
        <div className={styles.content}>
          <div className={styles.top}>
            <span>{title}</span>
            <button
              className={styles.close_button}
              onClick={() => setPopupStatus(false)}
            >
              <img src="/icons/cross.png" alt="" width={24} height={24} />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
