import { Event } from "./types";
import endofsummer from "./endofsummer.png";
import rockoween from "./rockoween.png";
import turkeytrot from "./turkeytrot.png";

export const events: Event[] = [
  {
    id: "1",
    title: "End of Summer",
    startDate: "2024-06-14",
    endDate: "2024-06-16",
    location: "MOSH Performance Center",
    imageUrl: endofsummer,
    description:
      "This tournament series will include two different events. Saturday morning will be reverse quads (pure) and Saturday evening will be men's and women's triples. Each event will consist of pool play followed by a single elimination tournament.",
    days: [
      {
        date: "2024-06-14",
        categories: [
          {
            id: "friday-coed",
            name: "Friday Coed 4s",
            maxTeams: 24,
            registeredTeams: 18,
            startTime: "14:00",
          },
        ],
      },
      {
        date: "2024-06-15",
        categories: [
          {
            id: "saturday-triples",
            name: "Competitive Triples",
            maxTeams: 32,
            registeredTeams: 28,
            startTime: "09:00",
          },
          {
            id: "saturday-doubles",
            name: "Doubles",
            maxTeams: 24,
            registeredTeams: 20,
            startTime: "14:00",
          },
        ],
      },
      {
        date: "2024-06-16",
        categories: [
          {
            id: "sunday-reverse",
            name: "Reverse Quads",
            maxTeams: 16,
            registeredTeams: 10,
            startTime: "10:00",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Rock O' Ween",
    startDate: "2024-06-14",
    endDate: "2024-06-16",
    location: "MOSH Performance Center",
    imageUrl: rockoween,
    description:
      "This tournament series will include four different events over the course of three days and will include something for everyone! The Friday evening events will include coed quads or reverse quads (pure), Saturday will be king / queen 4's (high / low), and Sunday will be men's and women's triples.",
    days: [
      {
        date: "2024-06-14",
        categories: [
          {
            id: "friday-coed",
            name: "Friday Coed 4s",
            maxTeams: 24,
            registeredTeams: 18,

            startTime: "14:00",
          },
        ],
      },
      {
        date: "2024-06-15",
        categories: [
          {
            id: "saturday-triples",
            name: "Competitive Triples",
            maxTeams: 32,
            registeredTeams: 28,
            startTime: "09:00",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Turkey Trot",
    startDate: "2024-06-14",
    endDate: "2024-06-16",
    location: "MOSH Performance Center",
    imageUrl: turkeytrot,
    description:
      "This tournament series will include three different events over the course of two days. The Friday evening events will include coed quads or reverse quads (power) and Saturday evening will be men's and women's triples.",
    days: [
      {
        date: "2024-06-15",
        categories: [
          {
            id: "saturday-triples",
            name: "Competitive Triples",
            maxTeams: 32,
            registeredTeams: 28,
            startTime: "09:00",
          },
        ],
      },
    ],
  },
];
