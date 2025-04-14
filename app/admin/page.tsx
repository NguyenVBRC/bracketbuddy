"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { Category, TournamentDay } from "@/lib/types";
import GoBack from "@/components/GoBack";
import styles from "./styles.module.css";

export default function AdminDashboard() {
  const [days, setDays] = useState<TournamentDay[]>([
    {
      date: "",
      categories: [],
    },
  ]);

  const addDay = () => {
    setDays([...days, { date: "", categories: [] }]);
  };

  const removeDay = (dayIndex: number) => {
    setDays(days.filter((_, index) => index !== dayIndex));
  };

  const addCategory = (dayIndex: number) => {
    const newDays = [...days];
    newDays[dayIndex].categories.push({
      id: `category-${Date.now()}`,
      name: "",
      maxTeams: 0,
      registeredTeams: 0,
      startTime: "",
    });
    setDays(newDays);
  };

  const removeCategory = (dayIndex: number, categoryIndex: number) => {
    const newDays = [...days];
    newDays[dayIndex].categories.splice(categoryIndex, 1);
    setDays(newDays);
  };

  const updateDay = (index: number, field: keyof TournamentDay, value: any) => {
    const newDays = [...days];
    newDays[index] = { ...newDays[index], [field]: value };
    setDays(newDays);
  };

  const updateCategory = (
    dayIndex: number,
    categoryIndex: number,
    field: keyof Category,
    value: any
  ) => {
    const newDays = [...days];
    newDays[dayIndex].categories[categoryIndex] = {
      ...newDays[dayIndex].categories[categoryIndex],
      [field]: value,
    };
    setDays(newDays);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const tournament = {
      id: `tournament-${Date.now()}`,
      title: formData.get("title"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      location: formData.get("location"),
      imageUrl: formData.get("imageUrl"),
      description: formData.get("description"),
      days: days,
    };

    console.log("New Tournament:", tournament);
    alert("Tournament created! Check console for details.");
  };

  return (
    <div className={styles.container}>
      <GoBack />

      <div className={styles.card}>
        <h1 className={styles.heading}>Create New Tournament</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.gridTwoColumn}>
            <div>
              <label className={styles.label}>Tournament Title</label>
              <input
                type="text"
                name="title"
                required
                className={styles.input}
                placeholder="Summer Championship Series"
              />
            </div>

            <div>
              <label className={styles.label}>Location</label>
              <input
                type="text"
                name="location"
                required
                className={styles.input}
                placeholder="Phoenix Arena, Arizona"
              />
            </div>
          </div>

          <div className={styles.gridTwoColumn}>
            <div>
              <label className={styles.label}>Start Date</label>
              <input
                type="date"
                name="startDate"
                required
                className={styles.input}
              />
            </div>

            <div>
              <label className={styles.label}>End Date</label>
              <input
                type="date"
                name="endDate"
                required
                className={styles.input}
              />
            </div>
          </div>

          <div>
            <label className={styles.label}>Tournament Image URL</label>
            <input
              type="url"
              name="imageUrl"
              required
              className={styles.input}
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          <div>
            <label className={styles.label}>Description</label>
            <textarea
              name="description"
              required
              rows={3}
              className={styles.textarea}
              placeholder="Describe your tournament..."
            />
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Tournament Days</h2>
              <button
                type="button"
                onClick={addDay}
                className={styles.addButton}
              >
                <Plus className={styles.icon} />
                Add Day
              </button>
            </div>

            {days.map((day, dayIndex) => (
              <div key={dayIndex} className={styles.dayCard}>
                <div className={styles.dayHeader}>
                  <h3 className={styles.dayTitle}>Day {dayIndex + 1}</h3>
                  {dayIndex > 0 && (
                    <button
                      type="button"
                      onClick={() => removeDay(dayIndex)}
                      className={styles.removeButton}
                    >
                      <X className={styles.icon} />
                    </button>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Date</label>
                  <input
                    type="date"
                    value={day.date}
                    onChange={(e) =>
                      updateDay(dayIndex, "date", e.target.value)
                    }
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.categoriesSection}>
                  <div className={styles.sectionHeader}>
                    <h4 className={styles.subheading}>Categories</h4>
                    <button
                      type="button"
                      onClick={() => addCategory(dayIndex)}
                      className={styles.addButton}
                    >
                      <Plus className={styles.icon} />
                      Add Category
                    </button>
                  </div>

                  {day.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className={styles.categoryCard}>
                      <div className={styles.dayHeader}>
                        <h5 className={styles.categoryTitle}>
                          Category {categoryIndex + 1}
                        </h5>
                        <button
                          type="button"
                          onClick={() =>
                            removeCategory(dayIndex, categoryIndex)
                          }
                          className={styles.removeButton}
                        >
                          <X className={styles.icon} />
                        </button>
                      </div>

                      <div className={styles.gridTwoColumn}>
                        <input
                          type="text"
                          value={category.name}
                          onChange={(e) =>
                            updateCategory(
                              dayIndex,
                              categoryIndex,
                              "name",
                              e.target.value
                            )
                          }
                          placeholder="Category Name"
                          required
                          className={styles.input}
                        />

                        <input
                          type="time"
                          value={category.startTime}
                          onChange={(e) =>
                            updateCategory(
                              dayIndex,
                              categoryIndex,
                              "startTime",
                              e.target.value
                            )
                          }
                          required
                          className={styles.input}
                        />

                        <input
                          type="number"
                          value={category.maxTeams || ""}
                          onChange={(e) =>
                            updateCategory(
                              dayIndex,
                              categoryIndex,
                              "maxTeams",
                              parseInt(e.target.value)
                            )
                          }
                          placeholder="Max Teams"
                          required
                          min="0"
                          className={styles.input}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.formFooter}>
            <button type="submit" className={styles.submitButton}>
              Create Tournament
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
