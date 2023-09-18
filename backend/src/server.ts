import app from "./app";
import mongoose from "mongoose";
import env from "./util/validateEnv";

const PORT = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Mongoose connected");
        app.listen(PORT, () => {
            console.log("Server running on port " + PORT);
        });
    })
    .catch(console.error);

