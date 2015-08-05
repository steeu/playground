
/**
 * http request handler
 */

// redirect to https handler
//addHttpRequestHandler('^/', 'HttpRequestHandler/redirect.js', 'redirectToHttps');
// download handler
addHttpRequestHandler('^/download/', 'HttpRequestHandler/download.js', 'download');


/**
 * remove temporary content at startup
 */
 
Folder(ds.getDataFolder().path + 'tmp/').removeContent();