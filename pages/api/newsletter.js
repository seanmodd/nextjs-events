import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(400).send('Please enter a valid email address.');
      return;
    }

    const client = await MongoClient.connect(
      'mongodb+srv://seansean:2thepack@senpexcluster.dn1ks.mongodb.net/events?retryWrites=true&w=majority'
    );
    const db = client.db();
    await db.collection('newsletter').insertOne({ email: userEmail });
    client.close();
    res.status(200).send('OK');
  }
}
export default handler;
