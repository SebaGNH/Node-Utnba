import { connect } from 'mongoose';


const db_uri = process.env.db_uri;

const options = {
    maxPoolSize:100,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}


connect(db_uri, options);