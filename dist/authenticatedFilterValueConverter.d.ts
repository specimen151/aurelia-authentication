export declare class AuthenticatedFilterValueConverter
{
  constructor(authService?: any);

  /**
   * route toView predictator on route.config.auth === (parameter || authService.isAuthenticated())
   * @param  {RouteConfig}  routes            the routes array to convert
   * @param  {[Boolean]}    [isAuthenticated] optional isAuthenticated value. default: this.authService.authenticated
   * @return {Boolean}      show/hide element
   */
  toView(routes: any, isAuthenticated?:boolean) : any;
}
