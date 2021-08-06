import * as contentful from 'contentful'

const { REACT_APP_ACCESS_TOKEN, REACT_APP_SPACE_ID } = process.env;

const client = contentful.createClient({
  accessToken: REACT_APP_ACCESS_TOKEN,
  space: REACT_APP_SPACE_ID 
})

const getBlogPosts = () => client.getEntries({
    content_type: 'post'
}).then(response => response.items);

const getSinglePost = (slug) => client.getEntries({
  'fields.slug': slug,
  content_type: 'post'
}).then(response => response.items);

export { getBlogPosts, getSinglePost };