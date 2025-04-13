"use client";

import { useParams } from "next/navigation";
import { Calendar, MapPin, Users } from "lucide-react";
import { events } from "@/lib/data";
import styles from "./styles.module.css";

export default function SpecificEvent() {
  const params = useParams<{ event: string }>();
  const event = events.find((e) => e.id === params.event);

  if (!event) {
    return <div className={styles.notFound}>Event not found</div>;
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={event.imageUrl}
            alt={event.title}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{event.title}</h1>

          <div className={styles.metaGroup}>
            <div className={styles.metaItem}>
              <Calendar className={styles.metaIcon} />
              <span>{formattedDate}</span>
            </div>
            <div className={styles.metaItem}>
              <MapPin className={styles.metaIcon} />
              <span>{event.location}</span>
            </div>
            <div className={styles.metaItem}>
              <Users className={styles.metaIcon} />
              <span>
                {event.registeredTeams} / {event.maxTeams} Teams
              </span>
            </div>
          </div>

          <p className={styles.description}>{event.description}</p>

          <div className={styles.scheduleWrapper}>
            <h2 className={styles.scheduleTitle}>Schedule</h2>
            {/* <div className={styles.scheduleList}>
              {event.schedule.map((match) => (
                <div key={match.id} className={styles.scheduleCard}>
                  <div className={styles.scheduleRow}>
                    <div className={styles.matchTeams}>
                      <span className={styles.matchTeam}>{match.team1}</span>
                      <span className={styles.vsText}>vs</span>
                      <span className={styles.matchTeam}>{match.team2}</span>
                    </div>
                    <div className={styles.matchTime}>{match.time}</div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {event.registeredTeams < event.maxTeams ? (
            <button className={styles.registerButton}>
              Register Your Team
            </button>
          ) : (
            <div className={styles.fullText}>Registration Full</div>
          )}
        </div>
      </div>
    </div>
  );
}
