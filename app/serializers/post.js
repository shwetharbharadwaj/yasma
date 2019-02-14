import DS from 'ember-data';
 export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType){
       
       payload = { posts: payload };

       console.log(payload);
     return  this._super(store, primaryModelClass, payload, id, requestType);
 
	}
});
// import DS from 'ember-data';

// export default DS.RESTSerializer.extend({
//     normalizeResponse(store,primaryModelClass,payload,id,requestType)
//     {
//         payload={posts:payload};
        
//         return this._super(store,primaryModelClass,payload,id,requestType);
//     },
//     normalizeSingleResponse(store,primaryModelClass,payload,id,requestType)
//     {
//     payload.posts.comment=payload.posts.postId;
//     return this._super(store,primaryModelClass,payload,id,requestType);

// },
// normalizeArrayResponse(store,primaryModelClass,payload,id,requestType)
// {
// payload.posts.forEach((photo)=>{
//     posts.comment=post.postId;

// });
// return this._super(store,primaryModelClass,payload,id,requestType);
// }
// });