import common from '../../../common';
export default Ember.Route.extend({
    model: function(params) {
        var id = params.id;
        if (!id) {
            common.tips.error("错误，id不存在");
        }
        
        var columnDefer = Ember.RSVP.defer();
        this.store.findRecord('column',id,{reload:true}).then(function(res){
          columnDefer.resolve(res);
        },function(error){
            var msg=error.msg || "错误！";
            common.tips.error(msg);
        })



    }
})
