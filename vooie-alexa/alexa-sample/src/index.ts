import express from 'express';
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import { SKILL_BUILDER } from './skillBuilder';

import { LaunchRequestHandler } from './handlers/launch';
import { SessionEndedHandler } from './handlers/sessionEnded';

console.log(new LaunchRequestHandler());
console.log(new SessionEndedHandler());

const port = 3000
const app = express();

const skill = SKILL_BUILDER.create();
const adapter = new ExpressAdapter(skill, false, false);

app.get('/', (_, res) => {
    res.send('Vooie skill framework');
  });
app.post('/skill', adapter.getRequestHandlers());
app.listen(port, () => {
    console.log(`Vooie running on port ${port}`);
});