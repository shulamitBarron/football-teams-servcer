import {
    MongoClient,
    MongoError,
} from 'mongodb';
import {mongoDBUrl} from '../db/db';

export const getTeamsData = (req: any, res: any) => {
    const client = new MongoClient(mongoDBUrl, {useNewUrlParser: true});
    client.connect((err: MongoError) => {
        if (err) throw err;

        const collection = client.db('football-teams').collection('teams');
        collection.find().toArray((error: MongoError, result: any) => {
            client.close();
            res.send(result);
        });
    });
};

export default getTeamsData;
