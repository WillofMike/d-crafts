import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'

const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://api-uswest.graphcms.com/v1/cjjuzla4806ku01ck1muh0mdd/master',
  }),
  cache: new InMemoryCache(),
})

export default client
