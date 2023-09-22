import mongoose from 'mongoose';
import app from './app.ts';
import env from './util/validateEnv.ts';

const { PORT } = env;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(console.error);
