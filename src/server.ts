//define routes here
import { app } from "./app.js";
import { env } from "./config/env.js"; 
import { connectDB } from "./config/database.js";

const bootstrap = async () => {
    await connectDB();
    app.listen(env.port, () => {
        console.log(`Server is running on port ${env.port}`);
    });
}

bootstrap();