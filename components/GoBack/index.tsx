import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./styles.module.css";

export default function GoBack() {
  return (
    <Link href="/" className={styles.arrowContainer}>
      <ArrowLeft />
      <p>Go Back</p>
    </Link>
  );
}
