import { renderHook } from "@testing-library/react";

import { MatchesEvents } from "service/useMatchesEvents";
import { mockMatchesEvents, mockMatchPair } from "test/mocks/matchEvents";
import useGetMatchPairData from "../useGetMatchPairData";

const { homeTeam, awayTeam, score } = mockMatchPair;

describe("useGetMatchPairData", () => {
  test("Should calculate and return proper result for the matches pairs", () => {
    const { result, rerender } = renderHook(
      ({ matchesEvents }: { matchesEvents: MatchesEvents }) =>
        useGetMatchPairData(matchesEvents),
      {
        initialProps: { matchesEvents: {} as MatchesEvents }
      }
    );

    expect(result.current.matchPairs).toHaveLength(0);

    rerender({ matchesEvents: mockMatchesEvents });

    const thirdMatchPair = result.current.matchPairs[2];
    const { homeTeam: pairHomeTeam, awayTeam: pairAwayTeam, score: pairScore } = thirdMatchPair;
    const { home, away } = pairScore;

    expect(result.current.matchPairs).toHaveLength(8);

    expect(pairHomeTeam.teamNameShort).toBe(homeTeam.teamNameShort);
    expect(pairAwayTeam.teamNameShort).toBe(awayTeam.teamNameShort);
    expect(home).toBe(score.home);
    expect(away).toBe(score.away);
  });
});
