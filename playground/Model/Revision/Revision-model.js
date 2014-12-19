
/**
 * revisions
 */
 
model.Revision = new DataClass('Revisions');
model.Revision.ID = new Attribute('storage', 'long', {
	primKey: true,
	autosequence: true,
	unique: true
});
model.Revision.className = new Attribute('storage', 'string');
model.Revision.entityKey = new Attribute('storage', 'string');
model.Revision.changes = new Attribute('storage', 'string');
model.Employee.createDate = new Attribute('storage', 'date', {
	simpleDate: false
});