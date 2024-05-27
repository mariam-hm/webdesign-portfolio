const contentful = require("contentful");

// Create a client instance with your Contentful space and access token
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});

/**
 * Fetch a page by its ID from Contentful
 * @param {string} pageId - The ID of the page to fetch
 * @returns {Promise<Object>} - The fetched page data
 */
const fetchPage = async (slug: string) => {
  try {
    const response = await client.getEntries({
      content_type: "page",
      "fields.slug[match]": slug,
    });
    console.log(response);
    return response.fields;
  } catch (error) {
    console.error(`Failed to fetch page with ID ${slug}:`, error);
    // TODO Implement redirect
    throw error;
  }
};

module.exports = {
  fetchPage,
};
