"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react";
import { events } from "@/lib/data";
import { TournamentDay } from "@/lib/types";
import styles from "./styles.module.css";

export default function SpecificEvent() {
  const params = useParams<{ event: string }>();
  const event = events.find((e) => e.id === params.event);
  const [selectedDate, setSelectedDate] = useState<string | null>(
    event?.days[0]?.date || null
  );

  if (!event) {
    return <div className={styles.notFound}>Event not found</div>;
  }

  const selectedDay =
    event.days.find((day) => day.date === selectedDate) || event.days[0];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.arrowContainer}>
        <ArrowLeft />
        <p>Go Back</p>
      </Link>
      <div className={styles.card}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <img
            src={event.imageUrl.src}
            alt={event.title}
            className={styles.image}
          />
        </div>

        {/* Details */}
        <div className={styles.content}>
          <h1 className={styles.title}>{event.title}</h1>

          <div className={styles.metaGroup}>
            {/* Date */}
            <div className={styles.metaItem}>
              <Calendar className={styles.metaIcon} />
              <span>{formatDate(event.startDate)}</span>
            </div>
            {/* Location */}
            <div className={styles.metaItem}>
              <MapPin className={styles.metaIcon} />
              <span>{event.location}</span>
            </div>
          </div>

          <div className={styles.tournamentWrapper}>
            <div className={styles.dateSelector}>
              {event.days.map((day: TournamentDay) => (
                <button
                  key={day.date}
                  onClick={() => setSelectedDate(day.date)}
                  className={
                    selectedDate === day.date
                      ? styles.activeDateButton
                      : styles.dateButton
                  }
                >
                  {formatDate(day.date)}
                </button>
              ))}
            </div>

            <h2 className={styles.sectionTitle}>
              Events for {formatDate(selectedDay.date)}
            </h2>

            <div className={styles.categoryGrid}>
              {selectedDay.categories.map((category) => (
                <div key={category.id} className={styles.categoryCard}>
                  <div className={styles.categoryContent}>
                    <div>
                      <h3 className={styles.categoryName}>{category.name}</h3>
                      <p className={styles.categoryDescription}>
                        {category.description}
                      </p>
                      <div className={styles.categoryTime}>
                        <Clock className={styles.clockIcon} />
                        <span>Starts at {category.startTime}</span>
                      </div>
                    </div>
                    <div className={styles.categoryActions}>
                      <div className={styles.teamStatus}>
                        {category.registeredTeams} / {category.maxTeams} Teams
                        Registered
                      </div>
                      {category.registeredTeams < category.maxTeams ? (
                        <button
                          className={styles.signUpButton}
                          onClick={() =>
                            alert(`Signing up for ${category.name}`)
                          }
                        >
                          Sign Up
                        </button>
                      ) : (
                        <span className={styles.categoryFull}>
                          Category Full
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
