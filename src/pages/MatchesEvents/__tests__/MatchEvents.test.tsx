import React from "react";
import { fireEvent, screen, within } from "@testing-library/react";
import { render } from "test/utils";

import MatchEvents from "../MatchEvents";

import { mockMatchPair } from "test/mocks/matchEvents";

const { homeTeam, awayTeam, score } = mockMatchPair;
const pairScore = `${score.home} : ${score.away}`;

describe("MatchEvents", () => {
  beforeEach(() => {
    render(<MatchEvents />);
  });

  test("Should display Matches board if some matches started", async () => {
    const boardTitle = await screen.findByText("Championship Matches Board");

    expect(boardTitle).toBeInTheDocument();
  });

  test("Should display proper third match pair data", async () => {
    const teamPairRow = await screen.findByTestId(homeTeam.teamNameShort);

    const homeTeamNameShort = within(teamPairRow).queryByText(
      homeTeam.teamNameShort
    );
    const matchPairScore = within(teamPairRow).queryByText(pairScore);
    const awayTeamNameShort = within(teamPairRow).queryByText(
      awayTeam.teamNameShort
    );

    expect(homeTeamNameShort).toBeInTheDocument();
    expect(matchPairScore).toBeInTheDocument();
    expect(awayTeamNameShort).toBeInTheDocument();
  });

  test("Should display full teams names on the Match Board", async () => {
    const teamPairRow = await screen.findByTestId(homeTeam.teamNameShort);

    const homeTeamNameShort = await within(teamPairRow).findByText(
      homeTeam.teamNameShort
    );

    fireEvent.click(homeTeamNameShort);

    const homeTeamNameFull = within(teamPairRow).queryByText(
      homeTeam.teamName
    );
    const awayTeamNameFull = within(teamPairRow).queryByText(
      awayTeam.teamName
    );

    expect(homeTeamNameFull).toBeInTheDocument();
    expect(awayTeamNameFull).toBeInTheDocument();
  });
});
