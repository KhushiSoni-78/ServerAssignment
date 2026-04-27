function parseURL(urlString) {
  try {
    const url = new URL(urlString);
    return {
      protocol: url.protocol, 
      host: url.host,         
      hostname: url.hostname, 
      port: url.port,         
      pathname: url.pathname, 
      search: url.search,     
      hash: url.hash,         
      origin: url.origin,     
      params: Object.fromEntries(url.searchParams) // Converts query string to an object
    };
  } catch (error) {
    console.error("Invalid URL provided:", error.message);
    return null;
  }
}
const myUrl = "https://example.com:3000/products/shoes?color=blue&size=10#details";
console.log(parseURL(myUrl));