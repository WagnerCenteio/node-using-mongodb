import express from 'express';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';

const app = express();
const PORT = 4000;

const uri =
	'mongodb+srv://wac:1234@cluster0.7vepm.mongodb.net/productsdb?retryWrites=true&w=majority';

connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(`Store server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
