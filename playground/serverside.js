//'03.03.2011 - 05:00'.match(/([0-9]{1,2})[.,]([0-9]{1,2})[.,]([0-9]{1,4})[ -.,:]+([0-9]{1,2})[.,:]([0-9]{1,2})/);

//var emp = ds.Employee.find('ID > 0');
//emp.lastName = 'NEU';
//emp.save();

//ds.Revision.getEntityRevisions(emp);

var comp = ds.Company(1);
var emp = ds.Employee(2);
ds.Revision.getEntityRevisions(emp);
ds.Revision.getCollectionRevisions(comp.employees);
