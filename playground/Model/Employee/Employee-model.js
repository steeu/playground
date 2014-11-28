
model.Employee = new DataClass('Applicants');
model.Employee.ID = new Attribute('storage', 'string', {
	primKey: true,
	autosequence: true,
	unique: true
});
model.Employee.lastName = new Attribute('storage', 'string');
model.Employee.firstName = new Attribute('storage', 'string');
model.Employee.comment = new Attribute('storage', 'string');
model.Employee.dateOfBirth = new Attribute('storage', 'date', {
	simpleDate: false
});
model.Employee.email = new Attribute('storage', 'string');
model.Employee.phone = new Attribute('storage', 'string');
model.Employee.age = new Attribute('calculated', 'number');