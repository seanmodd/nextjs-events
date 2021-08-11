import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const { eventId } = req.query;

  const client = await MongoClient.connect(
    'mongodb+srv://seansean:2thepack@senpexcluster.dn1ks.mongodb.net/events?retryWrites=true&w=majority'
  );

  if (req.method === 'POST') {
    // add server-side validation
    const { email, name, text } = req.body;
    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      return res.status(400).json({
        error: 'Invalid request',
      });
    }

    const newComment = {
      // id: new Date().getTime(),
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection('comments').insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

    res.status(200).json({
      comment: newComment,
    });
  }

  if (req.method === 'GET') {
    // const dummyList = [
    //   { id: 'c1', name: 'Sean', text: 'Hello, this is my first comment' },
    //   { id: 'c2', name: 'Max', text: 'Second comment here!' },
    // ];
    const db = client.db();
    const documents = await db
      .collection('comments')
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }
  client.close();
}

export default handler;
