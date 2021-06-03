import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
