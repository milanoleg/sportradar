interface Event {
  eventId: number;
  eventTime: number;
  eventType: string;
  matchId: number;
  scoreAmount?: number;
  scoreTeam?: string;
}

interface Match {
  homeTeamId: number;
  awayTeamId: number;
  matchId: number;
  round: number;
  tournamentId: number;
}

interface Team {
  teamId: number;
  teamName: string;
  teamNameShort: string;
}
