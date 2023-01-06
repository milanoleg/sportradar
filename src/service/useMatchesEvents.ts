import { useQuery } from "react-query";

import httpClient from "./api/httpClient";
import { LIVE_SCORE_URL } from "constants/service";
import { keysToCamel } from "utils/convert";

const REFETCH_INTERVAL = 2000;

export type MatchesEvents = {
  events: Event[];
  matches: Match[];
  phase: string;
  teams: Team[];
};

const getMatchesEvents = async (): Promise<MatchesEvents> => {
  const response = await httpClient.get(LIVE_SCORE_URL);

  return keysToCamel(response.data);
};

const useMatchesEvents = (refetchInterval: number = REFETCH_INTERVAL) => {
  const query = useQuery<MatchesEvents>(
    "matchesEvents",
    () => getMatchesEvents(),
    {
      refetchInterval,
    }
  );

  return {
    ...query,
    matchesEvents: query.data || ({} as MatchesEvents),
    isMatchesEventsLoading: query.isLoading,
  };
};

export default useMatchesEvents;
