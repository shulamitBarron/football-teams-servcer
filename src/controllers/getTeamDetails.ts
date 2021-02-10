import {
    MongoClient,
    MongoError,
} from 'mongodb';
import {mongoDBUrl} from '../db/db';

export const getTeamDetails = (req: any, res: any) => {
    const id = req.params.id;

    const client = new MongoClient(mongoDBUrl, {useNewUrlParser: true});
    client.connect((err: MongoError) => {
        if (err) throw err;

        const collection = client.db('football-teams').collection('team-details');
        collection.find({id}).toArray((error: MongoError, result: any) => {
            client.close();
            res.send(result[0]);
        });
    });
};

export default getTeamDetails;
