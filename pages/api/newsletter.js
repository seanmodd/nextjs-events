function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(400).send('Please enter a valid email address.');
      return;
    }
    console.log(userEmail);
    res.status(200).send('OK');
  }
}
export default handler;
