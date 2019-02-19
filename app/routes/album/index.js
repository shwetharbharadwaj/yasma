import Route from '@ember/routing/route';
  export default Route.extend({
     model:function(){
       return this.store.findAll('album'); 
    },
    actions:{
          redirect(album){
           this.get('router').transitionTo('album.photo', album.id);
        }
    },
});

