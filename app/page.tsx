import { events } from "@/lib/data";
import { EventCard } from "@/components/EventCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.eventsMain}>
      <div className={styles.eventsGrid}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
