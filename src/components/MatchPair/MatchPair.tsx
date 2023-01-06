import React, { useMemo, FC, ReactElement, useState, useEffect, useDeferredValue } from "react";
import { get } from "lodash";

import { MatchPairType } from "pages/MatchesEvents/types";
import { getTeamFlag } from "./helpers";

import styles from "./MatchPair.module.scss";

const {
  wrapper,
  home,
  scoreCount,
  counter,
  away,
  name,
  flagImage,
  homeFlag,
  awayFlag,
  flipX,
} = styles;

type MatchPairProps = {
  pair: MatchPairType;
  teamNameMode: string;
};

const MatchPair: FC<MatchPairProps> = (props): ReactElement => {
  const { pair, teamNameMode } = props;
  const { homeTeam, awayTeam, score } = pair;
  const currentScore = `${score.home} : ${score.away}`;
  const [savedScore, setSavedScore] = useState(currentScore);
  const deferredScore = useDeferredValue(savedScore);

  useEffect(() => {
    if (currentScore !== savedScore) {
      setSavedScore(currentScore);
    }
  }, [currentScore, savedScore]);

  const homeTeamFlag = useMemo(
    () => getTeamFlag(homeTeam.teamNameShort),
    [homeTeam.teamNameShort]
  );
  const awayTeamFlag = useMemo(
    () => getTeamFlag(awayTeam.teamNameShort),
    [awayTeam.teamNameShort]
  );
  const homeTeamName = get(homeTeam, `${teamNameMode}`);
  const awayTeamName = get(awayTeam, `${teamNameMode}`);

  return (
    <div className={wrapper}>
      <div className={home}>
        <div className={name}>{homeTeamName}</div>
        <div className={homeFlag}>
          <img src={homeTeamFlag} alt={homeTeamName} className={flagImage} />
        </div>
      </div>
      <div className={`${scoreCount} ${deferredScore !== savedScore ? "" : flipX}`}>
        <span className={counter}>
          {currentScore}
        </span>
      </div>
      <div className={away}>
        <div className={awayFlag}>
          <img src={awayTeamFlag} alt={awayTeamName} className={flagImage} />
        </div>
        <div className={name}>{awayTeamName}</div>
      </div>
    </div>
  );
};

export default MatchPair;
