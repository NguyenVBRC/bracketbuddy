import { Event } from "./types";
import endofsummer from "./endofsummer.png";
import rockoween from "./rockoween.png";
import turkeytrot from "./turkeytrot.png";

export const events: Event[] = [
  {
    id: "1",
    title: "End of Summer",
    date: "2025-09-28",
    location: "MOSH Performance Center",
    imageUrl: endofsummer,
    description:
      "This tournament series will include two different events. Saturday morning will be reverse quads (pure) and Saturday evening will be men's and women's triples. Each event will consist of pool play followed by a single elimination tournament.",
    maxTeams: 16,
    registeredTeams: 14,
    schedule: [],
    formats: ["COED Quads", "Pure Reverse", "Triples"],
  },
  {
    id: "2",
    title: "Rock O' Ween",
    date: "2025-10-11",
    location: "MOSH Performance Center",
    imageUrl: rockoween,
    description:
      "This tournament series will include four different events over the course of three days and will include something for everyone! The Friday evening events will include coed quads or reverse quads (pure), Saturday will be king / queen 4's (high / low), and Sunday will be men's and women's triples.",
    maxTeams: 12,
    registeredTeams: 8,
    schedule: [],
    formats: ["COED Quads", "Pure Reverse", "Triples"],
  },
  {
    id: "3",
    title: "Turkey Trot",
    date: "2025-11-15",
    location: "MOSH Performance Center",
    imageUrl: turkeytrot,
    description:
      "This tournament series will include three different events over the course of two days. The Friday evening events will include coed quads or reverse quads (power) and Saturday evening will be men's and women's triples.",
    maxTeams: 12,
    registeredTeams: 8,
    schedule: [],
    formats: ["COED Quads", "Pure Reverse", "Triples"],
  },
];
