import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

console.log(process.env.SANITY_TOKEN);
export const client = sanityClient({
    projectId:process.env.REACT_APP_SANITY_ID,
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor=(source) => builder.image(source);