import DS from 'ember-data';
export default DS.Model.extend({
	title:DS.attr(),
	update_time:DS.attr(),
	create_time:DS.attr(),
  column_id:DS.attr(),
	// column_id:DS.belongsTo("column"),
	click:DS.attr(),
	flag:DS.attr(),
	status:DS.attr(),
  keyword:DS.attr(),
  description:DS.attr(),
  body:DS.attr()
})