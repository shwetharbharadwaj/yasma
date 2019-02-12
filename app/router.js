import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post');

  this.route('model');
  this.route('album');
  // this.route('images');
  this.route('display');
  this.route('photo');
});

export default Router;
