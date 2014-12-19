
model.Employee = new DataClass('Employees');
model.Employee.ID = new Attribute('storage', 'long', {
	primKey: true,
	autosequence: true,
	unique: true
});
model.Employee.lastName = new Attribute('storage', 'string');
model.Employee.firstName = new Attribute('storage', 'string');
model.Employee.comment = new Attribute('storage', 'string');
model.Employee.dateOfBirth = new Attribute('storage', 'date', {
	simpleDate: true
});
model.Employee.email = new Attribute('storage', 'string');
model.Employee.phone = new Attribute('storage', 'string');
model.Employee.age = new Attribute('calculated', 'number');
model.Employee.createDate = new Attribute('storage', 'date', {
	simpleDate: false
});
model.Employee.modifiedDate = new Attribute('storage', 'date', {
	simpleDate: false
});

// relation
model.Employee.company = new Attribute('relatedEntity', 'Company', 'Company', {
	reversePath: true
});