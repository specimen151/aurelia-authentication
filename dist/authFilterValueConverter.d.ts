export declare class AuthFilterValueConverter
{
  constructor(authService?: any);

  /**
   * route toView predictator on route.config.auth === isAuthenticated
   * @param  {RouteConfig}  routes            the routes array to convert
   * @param  {Boolean}      isAuthenticated   authentication status
   * @return {Boolean}      show/hide element
   */
  toView(routes: any, isAuthenticated:boolean) : any;
}
