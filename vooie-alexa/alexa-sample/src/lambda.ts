import { SKILL_BUILDER } from './skillBuilder';

import { LaunchRequestHandler } from './handlers/launch';
import { SessionEndedHandler } from './handlers/sessionEnded';

console.log(new LaunchRequestHandler());
console.log(new SessionEndedHandler());

const handler = SKILL_BUILDER.lambda();

export {
    handler
}