// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index.route");
const PORT = process.env.PORT || 3000;
const app = express();
var session = require("express-session");
var DynamoDBStore = require("connect-dynamodb")({ session: session });

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN_URL,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    store: new DynamoDBStore({
      table: "sessions",
      hashKey: "id",
      specialKeys: [
        {
          name: "userId", // The session key
          type: "S", // The DyanamoDB attribute type
        },
      ],
    }),
    secret: "askdnasdjnasjd",
    resave: false,
    saveUninitialized: false,
    cookie: {
      name: "qid",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : undefined,
      domain:
        process.env.NODE_ENV === "production"
          ? "creamyy.mrmbiuzz.link"
          : "localhost",
    },
  })
);
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
