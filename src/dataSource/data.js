// This is dummy data that I created

export const teams = [
  { id: 1, name: "Team A", goalsScored: 20, goalsConceded: 10, wins: 5 },
  { id: 2, name: "Team B", goalsScored: 15, goalsConceded: 12, wins: 3 },
];
export const players = [
  {
    id: 1,
    name: "Player 1",
    teamId: 1,
    goals: 10,
    assists: 5,
    defense: 8,
    position: "Goalkeeper",
  },
  {
    id: 2,
    name: "Player 2",
    teamId: 1,
    goals: 5,
    assists: 8,
    defense: 6,
    position: "Midfielder",
  },
  {
    id: 3,
    name: "Player 3",
    teamId: 1,
    goals: 10,
    assists: 5,
    defense: 8,
    position: "Defender",
  },
  {
    id: 4,
    name: "Player 1",
    teamId: 2,
    goals: 5,
    assists: 8,
    defense: 6,
    position: "Goalkeeper",
  },
  {
    id: 5,
    name: "Player 2",
    teamId: 2,
    goals: 10,
    assists: 5,
    defense: 8,
    position: "Midfielder",
  },
  {
    id: 6,
    name: "Player 3",
    teamId: 2,
    goals: 5,
    assists: 8,
    defense: 6,
    position: "Defender",
  },
];
export const grounds = [
  { id: 1, name: "Ground 1" },
  { id: 2, name: "Ground 2" },
];
export const matches = [
  {
    id: 1,
    homeTeam: "Team A",
    opponent: "Team B",
    startTime: "2023-07-05 18:00",
    date: "2023-07-10",
    endTime: "2023-07-05 19:30",
    ground: "Stadium X",
    progress: 50,
    expectedWin: "Team A",
  },
  {
    id: 2,
    homeTeam: "Team C",
    opponent: "Team D",
    date: "2023-07-12",
    startTime: "2023-08-05 1:00",
    endTime: "2023-08-05 9:30",
    ground: "Stadium Z",
    progress: 80,
    expectedWin: "Team C",
  },
];
export const statistics = [
  { matchId: 1, playerId: 1, goals: 2, assists: 1, defense: 5 },
  { matchId: 1, playerId: 2, goals: 1, assists: 2, defense: 3 },
];

export const score = [
  {
    id: 1,
    homeTeam: "Team A",
    opponent: "Team B",
    goalsSavedByGoalkeeper: 2,
    highestScorer: "Player W",
    mostAssists: "Player X",
    bestDefence: "Player Y",
  },
  {
    id: 2,
    homeTeam: "Team C",
    opponent: "Team D",
    goalsSavedByGoalkeeper: 2,
    highestScorer: "Player P",
    mostAssists: "Player Q",
    bestDefence: "Player R",
  },
];
