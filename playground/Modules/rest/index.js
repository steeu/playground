
/**
 * load dependencies (modules)
 */
 
var curlModule = require('curl');


/**
 * restful services
 *
 * @return {Object} result
 */
 
var REST = function(options) {
	try {
	    var options = options || {};
	    
	    // settings
	    this.proxy    = options.proxy || null;
	    this.port     = options.port || 8080;
	    this.user     = options.user || null;
	    this.password = options.password || null;
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
}


/**
 * connect to JSON RESTful service
 *
 * @return {Object} result
 */

REST.prototype.JSON = function(url, data) {
	try {
        var curl,
        	command = url,
        	result = {success: 0, error: '', result: null},
        	resultStr,
        	resultJSON;
		
		// add data
		if (data) {
			command = '--data ' + data + ' ' + command;
		}
		// add user
		if (this.user) {
			command = '--proxy-user ' + this.user + ':' + this.password + ' ' + command;
		}
		// add proxy
		if (this.proxy) {
			command = '--proxy ' + this.proxy + ':' + this.port + ' ' + command;
		}
		// command
		result.command = 'curl ' + command;
		// execute
        curl = curlModule.curl(command);
        // validate result
        if (curl.console && curl.console.stdIn && curl.console.stdOut) {
        	// validate stdOut
        	if (curl.console.stdOut.length > 0) {
        		resultStr = curl.console.stdOut.toString('utf-8');
        	}
        	// parse json string
	        try {
				// parse result
				result.result = JSON.parse(resultStr);
				result.success = 1;	
			} catch (e) {
				result.error = e.message;
				result.result = curl.console.stdOut;
				
				return result;
			}
        } else if (curl.console && curl.console.stdErr) {
        	result.error = 'curl execution failed';
        	result.result = curl;
        	
        	return result;
        }

		return result;
	} catch (e) {
		WAKTOOLS.log(e);
		return e;		
	}
};

exports.REST = REST;
