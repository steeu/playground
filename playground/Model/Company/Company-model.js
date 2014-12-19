
model.Company = new DataClass('Companies');

model.Company.ID = new Attribute('storage', 'long', {
	primKey: true,
	autosequence: true,
	unique: true
});
model.Company.name = new Attribute('storage', 'string', {
	indexKind: 'keywords'
}
);
model.Company.streetNumber = new Attribute('storage', 'number');
model.Company.streetName = new Attribute('storage', 'string', {
	indexKind: 'keywords'
});
model.Company.zip = new Attribute('storage', 'string', {
	maxValue: 98000
});
model.Company.city = new Attribute('storage', 'string');
model.Company.email = new Attribute('storage', 'string');
model.Company.phone = new Attribute('storage', 'string', {
	maxLength: 14,
	defaultFormat: {
		presentation: 'text',
		format: '## ## ## ## ##'
	}
});
model.Company.fullAddress = new Attribute('calculated', 'string');

// relation
model.Company.employees = new Attribute('relatedEntities', 'Employees', 'company', {
	reversePath: true
});