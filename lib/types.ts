export interface Event {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  imageUrl: any;
  description: string;
  days: TournamentDay[];
}

export interface TournamentDay {
  date: string;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  maxTeams: number;
  registeredTeams: number;
  startTime: string;
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  time: string;
}
