import mongoose from 'mongoose';
import { mongoDB } from './keys';

mongoose.connect(mongoDB.URI)
    .then(db => console.log('Database is connected'))
    .catch(err => console.log('An error has ocurred:', err));