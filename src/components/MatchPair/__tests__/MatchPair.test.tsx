import React from "react";
import { screen, render } from "@testing-library/react";

import MatchPair from "../MatchPair";
import { mockMatchPair } from "test/mocks/matchEvents";

const { homeTeam, awayTeam, score } = mockMatchPair;
const { home, away } = score;

describe("MatchPair", () => {
  test("Should display short teams names", async () => {
    render(<MatchPair pair={mockMatchPair} teamNameMode="teamNameShort" />);

    const homeTeamNameShort = screen.queryByText(homeTeam.teamNameShort);
    const awayTeamNameShort = screen.queryByText(awayTeam.teamNameShort);
    const score = screen.queryByText(`${home} : ${away}`);

    expect(homeTeamNameShort).toBeInTheDocument();
    expect(awayTeamNameShort).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });

  test("Should display full teams names", async () => {
    render(<MatchPair pair={mockMatchPair} teamNameMode="teamName" />);

    const homeTeamName = screen.queryByText(homeTeam.teamName);
    const awayTeamName = screen.queryByText(awayTeam.teamName);
    const score = screen.queryByText(`${home} : ${away}`);

    expect(homeTeamName).toBeInTheDocument();
    expect(awayTeamName).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });
});