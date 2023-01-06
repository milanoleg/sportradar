import { setupServer } from "msw/node";

import matchEventsHandlers from "./matchEventsHandlers";

const handlers = [...matchEventsHandlers];

export const server = setupServer(...handlers);
