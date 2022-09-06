import styles from "../styles/NavToggle.module.css";
import { MenuRing, Hamburger } from "./svg-icon";

interface NavToggleProps {
  toggled: boolean;
  onToggle: () => any;
  className?: string;
}

const NavToggle: React.FC<NavToggleProps> = ({
  toggled,
  onToggle,
  className,
}) => (
  <div
    className={`${styles.container} ${toggled ? styles.container_active : ""} ${
      className ?? ""
    }`}
    onClick={onToggle}
  >
    <MenuRing className={styles.ring} />
    <Hamburger className={styles.hamburger} />
  </div>
);

export default NavToggle;
