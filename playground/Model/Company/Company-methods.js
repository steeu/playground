model.Company.entityMethods.exportJSON = function() {
	var exportArr = [];
	
	this.tests.forEach(function(item){
		exportArr.push({
			id: item.ID,
			startingDate: item.startingDate,
			endDate: item.endDate,
			applicant: {
				familyName: item.applicant.familyName,
				firstName: item.applicant.firstName,
				email: item.applicant.email
			}
		});
	});
	
	var exportStr = JSON.stringify(exportArr);
	var exportFile = File(ds.getModelFolder().path + this.name + '.json');
	
	var stream = TextStream(exportFile, "overwrite");  // open the stream in write mode
    stream.write(exportStr); // append the message to the end of stream
    stream.close(); // do not forget to close the stream
};
model.Company.entityMethods.exportJSON.scope = 'public';