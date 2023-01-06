import React, { FC, ReactElement, useState } from "react";

import MatchPair from "components/MatchPair/MatchPair";
import useMatchesEvents from "service/useMatchesEvents";
import useGetMatchPairData from "hooks/useGetMatchPairData";
import Spinner from "components/Spinner/Spinner";

import styles from "./MatchEvents.module.scss";

const { wrapper, title, tableWrapper, matchesTable } = styles;

const MatchEvents: FC = (): ReactElement => {
  const [nameMode, setNameMode] = useState<string>("teamNameShort");
  const { matchesEvents, isMatchesEventsLoading } =
    useMatchesEvents();
  const { matchPairs } = useGetMatchPairData(matchesEvents);

  const setDisplayMode = () =>
    setNameMode((prevMode) =>
      prevMode === "teamName" ? "teamNameShort" : "teamName"
    );

  return (
    <div className={wrapper}>
      {isMatchesEventsLoading ? (
        <Spinner />
      ) : (
        <div className={tableWrapper}>
          <div className={title}>Championship Matches Board</div>
          <div className={matchesTable}>
            {matchPairs.map((pair) => (
              <div
                data-testid={pair.homeTeam.teamNameShort}
                key={pair.homeTeam.teamId}
                onClick={setDisplayMode}
              >
                <MatchPair
                  pair={pair}
                  teamNameMode={nameMode}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchEvents;
