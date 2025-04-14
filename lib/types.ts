export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: any;
  description: string;
  maxTeams: number;
  registeredTeams: number;
  schedule: Match[];
  formats: string[];
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  time: string;
}
