import { Trophy } from "lucide-react";
import styles from "@/components/NavigationBar/styles.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.navContainer}>
      <Trophy />
      <h1>Bracket Buddy</h1>
    </nav>
  );
};

export default NavigationBar;
