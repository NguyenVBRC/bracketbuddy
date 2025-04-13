export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
  maxTeams: number;
  registeredTeams: number;
  schedule: Match[];
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  time: string;
}
