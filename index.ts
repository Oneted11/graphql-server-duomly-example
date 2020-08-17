import * as express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import resolvers from "./resolvers";
var app = express();
console.log("shema=>",schema)

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
