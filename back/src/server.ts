import app from "./app";
import "dotenv/config";
import AppDataSource from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected.");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`App is running on https://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));
