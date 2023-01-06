import { keysToCamel } from "utils/convert";
import { MatchesEvents } from "service/useMatchesEvents";
import { MatchPairType } from "pages/MatchesEvents/types";

export const mockMatchesEvents: MatchesEvents = keysToCamel({
  phase: "match",
  teams: [
    {
      team_id: 8982001,
      team_name: "VL Lisbon",
      team_name_short: "LIS",
    },
    {
      team_id: 8982002,
      team_name: "VL London",
      team_name_short: "LON",
    },
    {
      team_id: 8982003,
      team_name: "VL Athens",
      team_name_short: "ATH",
    },
    {
      team_id: 8982004,
      team_name: "VL Vienna",
      team_name_short: "VIE",
    },
    {
      team_id: 8982005,
      team_name: "VL Moscow",
      team_name_short: "MOS",
    },
    {
      team_id: 8982006,
      team_name: "VL Zagreb",
      team_name_short: "ZAG",
    },
    {
      team_id: 8982007,
      team_name: "VL Amsterdam",
      team_name_short: "AMS",
    },
    {
      team_id: 8982008,
      team_name: "VL Berlin",
      team_name_short: "BER",
    },
    {
      team_id: 8982009,
      team_name: "VL Copenhagen",
      team_name_short: "COP",
    },
    {
      team_id: 8982010,
      team_name: "VL Madrid",
      team_name_short: "MAD",
    },
    {
      team_id: 8982011,
      team_name: "VL Ankara",
      team_name_short: "ANK",
    },
    {
      team_id: 8982012,
      team_name: "VL Paris",
      team_name_short: "PAR",
    },
    {
      team_id: 8982013,
      team_name: "VL Rome",
      team_name_short: "ROM",
    },
    {
      team_id: 8982014,
      team_name: "VL Kiev",
      team_name_short: "KIE",
    },
    {
      team_id: 8982015,
      team_name: "VL Prague",
      team_name_short: "PRA",
    },
    {
      team_id: 8982016,
      team_name: "VL Bern",
      team_name_short: "BRN",
    },
  ],
  matches: [
    {
      match_id: 216910224,
      tournament_id: 1526832,
      round: 2,
      home_team_id: 8982002,
      away_team_id: 8982011,
    },
    {
      match_id: 216910226,
      tournament_id: 1526832,
      round: 2,
      home_team_id: 8982006,
      away_team_id: 8982013,
    },
    {
      match_id: 216910228,
      tournament_id: 1526832,
      round: 2,
      home_team_id: 8982014,
      away_team_id: 8982009,
    },
    {
      match_id: 216910230,
      tournament_id: 1526832,
      round: 2,
      home_team_id: 8982016,
      away_team_id: 8982003,
    },
    {
      match_id: 216910232,
      tournament_id: 1526832,
      round: 2,
      home_team_id: 8982007,
      away_team_id: 8982015,
    },
    {
      match_id: 216910234,
      tournament_id: 1526832,
      round: 2,
      home_team_id: 8982012,
      away_team_id: 8982008,
    },
    {
      match_id: 216910236,
      tournament_id: 1526832,
      round: 2,
      home_team_id: 8982001,
      away_team_id: 8982005,
    },
    {
      match_id: 216910238,
      tournament_id: 1526832,
      round: 2,
      home_team_id: 8982004,
      away_team_id: 8982010,
    },
  ],
  events: [
    {
      event_id: 1,
      event_type: "match_start",
      event_time: 0,
      match_id: 216910224,
    },
    {
      event_id: 2,
      event_type: "match_start",
      event_time: 0,
      match_id: 216910226,
    },
    {
      event_id: 3,
      event_type: "match_start",
      event_time: 0,
      match_id: 216910228,
    },
    {
      event_id: 4,
      event_type: "match_start",
      event_time: 0,
      match_id: 216910230,
    },
    {
      event_id: 5,
      event_type: "match_start",
      event_time: 0,
      match_id: 216910232,
    },
    {
      event_id: 6,
      event_type: "match_start",
      event_time: 0,
      match_id: 216910234,
    },
    {
      event_id: 7,
      event_type: "match_start",
      event_time: 0,
      match_id: 216910236,
    },
    {
      event_id: 8,
      event_type: "match_start",
      event_time: 0,
      match_id: 216910238,
    },
    {
      event_id: 12,
      event_type: "goal",
      event_time: 6,
      match_id: 216910224,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 15,
      event_type: "goal",
      event_time: 41,
      match_id: 216910232,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 20,
      event_type: "goal",
      event_time: 8,
      match_id: 216910230,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 22,
      event_type: "goal",
      event_time: 18,
      match_id: 216910228,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 24,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 216910228,
    },
    {
      event_id: 25,
      event_type: "goal",
      event_time: 26,
      match_id: 216910238,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 26,
      event_type: "goal",
      event_time: 43,
      match_id: 216910232,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 27,
      event_type: "goal",
      event_time: 30,
      match_id: 216910236,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 28,
      event_type: "goal",
      event_time: 45,
      match_id: 216910226,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 29,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 216910226,
    },
    {
      event_id: 30,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 216910230,
    },
    {
      event_id: 31,
      event_type: "goal",
      event_time: 36,
      match_id: 216910238,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 32,
      event_type: "goal",
      event_time: 57,
      match_id: 216910228,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 33,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 216910234,
    },
  ],
});

export const matchPair = mockMatchesEvents.matches[2];
const teams = mockMatchesEvents.teams;

const homeTeam = teams.find((team) => team.teamId === matchPair.homeTeamId);
const awayTeam = teams.find((team) => team.teamId === matchPair.awayTeamId);

export const mockMatchPair: MatchPairType = {
  homeTeam: homeTeam!,
  awayTeam: awayTeam!,
  score: {
    home: 2,
    away: 0,
  }
};