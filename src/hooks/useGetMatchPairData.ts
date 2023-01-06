import { useMemo } from "react";

import { MatchesEvents } from "service/useMatchesEvents";
import { MatchPairType } from "pages/MatchesEvents/types";
import { TeamType, EventType } from "constants/general";

const useGetMatchPairData = (
  matchesEvents: MatchesEvents
): {
  matchPairs: MatchPairType[];
} => {
  const { events = [], matches = [], teams = [] } = matchesEvents;

  const teamsMap = useMemo(
    () => new Map(teams.map((team) => [team.teamId, team])),
    [teams]
  );

  const eventsByMatchId = events.reduce((map, event) => {
    if (map[event.matchId]) {
      map[event.matchId].push(event);
    } else {
      map[event.matchId] = [event];
    }

    return map;
  }, {} as any);

  const matchPairs = matches.map((match) => {
    const { homeTeamId, awayTeamId, matchId } = match;
    const score = {
      home: 0,
      away: 0,
    };

    const matchEvents = eventsByMatchId[matchId] || [];

    matchEvents.forEach((event: Event) => {
      const { eventType, scoreTeam, scoreAmount } = event;

      if (eventType !== EventType.goal) {
        return;
      }

      if (scoreTeam === TeamType.home) {
        score.home += scoreAmount!;
      }

      if (scoreTeam === TeamType.away) {
        score.away += scoreAmount!;
      }
    });

    return {
      homeTeam: teamsMap.get(homeTeamId)!,
      awayTeam: teamsMap.get(awayTeamId)!,
      score,
    };
  });

  return {
    matchPairs,
  };
};

export default useGetMatchPairData;
