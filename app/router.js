import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', function() {
      this.route('comment' ,{ path:'post/:id' });
  });
  this.route('album', function() {
    this.route('photo' ,{ path:'photo/:id'});
    this.route('show',{ path:'/:id'});
  });
});
export default Router;
