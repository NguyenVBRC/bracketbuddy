import { Event } from "./types";

export const events: Event[] = [
  {
    id: "1",
    title: "Summer Championship Series",
    date: "2024-06-15",
    location: "Phoenix Arena, Arizona",
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
    description:
      "Annual summer championship featuring top teams from across the region.",
    maxTeams: 16,
    registeredTeams: 14,
    schedule: [
      {
        id: "1",
        team1: "Phoenix Flames",
        team2: "Desert Storm",
        time: "14:30",
      },
      {
        id: "2",
        team1: "Thunder Squad",
        team2: "Valley Vikings",
        time: "15:45",
      },
      {
        id: "3",
        team1: "Mountain Lions",
        team2: "River Rapids",
        time: "17:00",
      },
    ],
  },
  {
    id: "2",
    title: "Spring Invitational",
    date: "2024-04-20",
    location: "Central Stadium, Texas",
    imageUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000",
    description: "Elite invitation-only tournament featuring the best teams.",
    maxTeams: 12,
    registeredTeams: 8,
    schedule: [
      { id: "1", team1: "Star Strikers", team2: "Golden Goals", time: "13:00" },
      { id: "2", team1: "Royal Raiders", team2: "Elite Eagles", time: "14:15" },
    ],
  },
];
