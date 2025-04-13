import Link from "next/link";
import { Trophy } from "lucide-react";
import styles from "@/components/NavigationBar/styles.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.navContainer}>
      <Link href="/">
        <Trophy />
        <h1>Bracket Buddy</h1>
      </Link>
    </nav>
  );
};

export default NavigationBar;
