import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4p0trh71cqb01xthubh9urw/master",
    cache: new InMemoryCache()
})