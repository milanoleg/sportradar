import { rest } from "msw";

import { mockMatchesEvents } from "../mocks/matchEvents";
import { LIVE_SCORE_URL } from "constants/service";

const handlers = [
  rest.get(LIVE_SCORE_URL, (req, res, ctx) => {
    return res(ctx.json(mockMatchesEvents));
  }),
];

export default handlers;
