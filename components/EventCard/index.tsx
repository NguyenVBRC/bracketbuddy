import { Calendar, MapPin } from "lucide-react";
import { Event } from "@/lib/types";
import Link from "next/link";
import styles from "@/components/EventCard/styles.module.css";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/events/${event.id}`}>
      <div className={styles.eventCard}>
        {/* Image Container */}
        <div className={styles.eventCardImageContainer}>
          <img
            src={event.imageUrl}
            alt={event.title}
            className={styles.eventCardImage}
          />
        </div>

        {/* Details */}
        <div className={styles.eventCardContent}>
          <h3 className={styles.eventCardTitle}>{event.title}</h3>

          {/* Date */}
          <div className={styles.eventCardInfo}>
            <Calendar className={styles.eventCardIcon} />
            <span>{formattedDate}</span>
          </div>

          {/* Location */}
          <div className={styles.eventCardInfo}>
            <MapPin className={styles.eventCardIcon} />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
