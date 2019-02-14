import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', function() {
      this.route('comment' ,{ path: '/:post_id/comment' });
  });
  this.route('album', function() {
    this.route('photo' ,{ path: '/:album_id/photo'});
    this.route('show',{ path: '/:album_id/photo_id/show'});
  });


  this.route('show');
});
export default Router;
