import cors from 'cors';
import express from 'express';
import getTeamDetails from './controllers/getTeamDetails';
import getTeamsData from './controllers/getTeams';

const PORT = 8080;
const app: express.Application = express();

app.use(cors());

app.get('/teams', getTeamsData);
app.get('/teams/:id', getTeamDetails);

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`App is listening on port ${PORT}!`);
});