model.Company.fullAddress.onGet = function() {
	return this.streetName + ' ' + this.streetNumber + ', ' + this.zip + ' ' + this.city;
};

model.Company.fullAddress.onSet = function(value) {
	var inputArr = value.split(',');
	
	this.streetName = inputArr[0]; 
	this.streetNumber = inputArr[1]; 
	this.zip = inputArr[2]; 
	this.city = inputArr[3]; 
};

model.Company.fullAddress.onSort = function(value) {
	if (value) {
		return 'streetName';
	} else {
		return 'streetName desc';
	}
};

model.Company.fullAddress.onQuery = function(operator, value) {
	if (value == null) {
		if (operator == "==" || operator == "===")
			result = "fulladdress is null";
		else
			result = "fulladdress is not null";
	
	} else {
		var result = null;
		
		switch (operator) {
			case '=':
			case '==':
				result = 'streetName == ' + value;
				break;
			case '%%':
				result = 'streetName %% ' + value;
				break;
		};
	}
	return result;
};