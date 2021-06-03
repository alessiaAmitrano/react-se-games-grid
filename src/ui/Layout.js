import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <header className={styles.header}>
        <h2>GAMEDB</h2>
      </header>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
