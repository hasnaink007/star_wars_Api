module.exports = {


  /**************************************************************************
   *                                                                         *
   * Tell Sails what database(s) it should use in production.                *
   *                                                                         *
   * (https://sailsjs.com/config/datastores)                                 *
   *                                                                         *
   **************************************************************************/
  datastores: {

    /***************************************************************************
     *                                                                          *
     * Configure your default production database.                              *
     *                                                                          *
     * 1. Choose an adapter:                                                    *
     *    https://sailsjs.com/plugins/databases                                 *
     *                                                                          *
     * 2. Install it as a dependency of your Sails app.                         *
     *    (For example:  npm install sails-mysql --save)                        *
     *                                                                          *
     * 3. Then set it here (`adapter`), along with a connection URL (`url`)     *
     *    and any other, adapter-specific customizations.                       *
     *    (See https://sailsjs.com/config/datastores for help.)                 *
     *                                                                          *
     ***************************************************************************/
    default: {
      adapter: 'sails-postgresql',
      host: process.env.DATABASE_HOST,
      user: process.env.DATABSE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    },

  },



  models: {

    /***************************************************************************
     *                                                                          *
     * To help avoid accidents, Sails automatically sets the automigration      *
     * strategy to "safe" when your app lifts in production mode.               *
     * (This is just here as a reminder.)                                       *
     *                                                                          *
     * More info:                                                               *
     * https://sailsjs.com/docs/concepts/models-and-orm/model-settings#?migrate *
     *                                                                          *
     ***************************************************************************/
    migrate: 'alter',

    /***************************************************************************
     *                                                                          *
     * If, in production, this app has access to physical-layer CASCADE         *
     * constraints (e.g. PostgreSQL or MySQL), then set those up in the         *
     * database and uncomment this to disable Waterline's `cascadeOnDestroy`    *
     * polyfill.  (Otherwise, if you are using a databse like Mongo, you might  *
     * choose to keep this enabled.)                                            *
     *                                                                          *
     ***************************************************************************/
    // cascadeOnDestroy: false,

  },



  /**************************************************************************
   *                                                                         *
   * Always disable "shortcut" blueprint routes.                             *
   *                                                                         *
   * > You'll also want to disable any other blueprint routes if you are not *
   * > actually using them (e.g. "actions" and "rest") -- but you can do     *
   * > that in `config/blueprints.js`, since you'll want to disable them in  *
   * > all environments (not just in production.)                            *
   *                                                                         *
   ***************************************************************************/
  blueprints: {
    shortcuts: false,
  },



  /***************************************************************************
   *                                                                          *
   * Configure your security settings for production.                         *
   *                                                                          *
   * IMPORTANT:                                                               *
   * If web browsers will be communicating with your app, be sure that        *
   * you have CSRF protection enabled.  To do that, set `csrf: true` over     *
   * in the `config/security.js` file (not here), so that CSRF app can be     *
   * tested with CSRF protection turned on in development mode too.           *
   *                                                                          *
   ***************************************************************************/
  security: {

    /***************************************************************************
     *                                                                          *
     * If this app has CORS enabled (see `config/security.js`) with the         *
     * `allowCredentials` setting enabled, then you should uncomment the        *
     * `allowOrigins` whitelist below.  This sets which "origins" are allowed   *
     * to send cross-domain (CORS) requests to your Sails app.                  *
     *                                                                          *
     * > Replace "https://example.com" with the URL of your production server.  *
     * > Be sure to use the right protocol!  ("http://" vs. "https://")         *
     *                                                                          *
     ***************************************************************************/
    cors: {
      // allowOrigins: [
      //   'https://example.com',
      // ]
    },

  },



  /***************************************************************************
   *                                                                          *
   * Configure how your app handles sessions in production.                   *
   *                                                                          *
   * (https://sailsjs.com/config/session)                                     *
   *                                                                          *
   * > If you have disabled the "session" hook, then you can safely remove    *
   * > this section from your `config/env/production.js` file.                *
   *                                                                          *
   ***************************************************************************/
  session: {

    /***************************************************************************
     *                                                                          *
     * Production session store configuration.                                  *
     *                                                                          *
     * Uncomment the following lines to finish setting up a package called      *
     * "@sailshq/connect-redis" that will use Redis to handle session data.     *
     * This makes your app more scalable by allowing you to share sessions      *
     * across a cluster of multiple Sails/Node.js servers and/or processes.     *
     * (See http://bit.ly/redis-session-config for more info.)                  *
     *                                                                          *
     * > While @sailshq/connect-redis is a popular choice for Sails apps, many  *
     * > other compatible packages (like "connect-mongo") are available on NPM. *
     * > (For a full list, see https://sailsjs.com/plugins/sessions)            *
     *                                                                          *
     ***************************************************************************/
    // adapter: '@sailshq/connect-redis',
    // url: 'redis://user:password@localhost:6379/dbname',
    //--------------------------------------------------------------------------
    // /\   OR, to avoid checking it in to version control, you might opt to
    // ||   set sensitive credentials like this using an environment variable.
    //
    // For example:
    // ```
    // sails_session__url=redis://admin:myc00lpAssw2D@bigsquid.redistogo.com:9562/sessions
    // ```
    //
    //--------------------------------------------------------------------------



    /***************************************************************************
     *                                                                          *
     * Production configuration for the session ID cookie.                      *
     *                                                                          *
     * Tell browsers (or other user agents) to ensure that session ID cookies   *
     * are always transmitted via HTTPS, and that they expire 24 hours after    *
     * they are set.                                                            *
     *                                                                          *
     * Note that with `secure: true` set, session cookies will _not_ be         *
     * transmitted over unsecured (HTTP) connections. Also, for apps behind     *
     * proxies (like Heroku), the `trustProxy` setting under `http` must be     *
     * configured in order for `secure: true` to work.                          *
     *                                                                          *
     * > While you might want to increase or decrease the `maxAge` or provide   *
     * > other options, you should always set `secure: true` in production      *
     * > if the app is being served over HTTPS.                                 *
     *                                                                          *
     * Read more:                                                               *
     * https://sailsjs.com/config/session#?the-session-id-cookie                *
     *                                                                          *
     ***************************************************************************/
    cookie: {
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,  // 24 hours
    },

  },



  /**************************************************************************
   *                                                                          *
   * Set up Socket.io for your production environment.                        *
   *                                                                          *
   * (https://sailsjs.com/config/sockets)                                     *
   *                                                                          *
   * > If you have disabled the "sockets" hook, then you can safely remove    *
   * > this section from your `config/env/production.js` file.                *
   *                                                                          *
   ***************************************************************************/
  sockets: {

    /***************************************************************************
     *                                                                          *
     * Uncomment the `onlyAllowOrigins` whitelist below to configure which      *
     * "origins" are allowed to open socket connections to your Sails app.      *
     *                                                                          *
     * > Replace "https://example.com" etc. with the URL(s) of your app.        *
     * > Be sure to use the right protocol!  ("http://" vs. "https://")         *
     *                                                                          *
     ***************************************************************************/
    // onlyAllowOrigins: [
    //   'https://example.com',
    //   'https://staging.example.com',
    // ],


    /***************************************************************************
     *                                                                          *
     * If you are deploying a cluster of multiple servers and/or processes,     *
     * then uncomment the following lines.  This tells Socket.io about a Redis  *
     * server it can use to help it deliver broadcasted socket messages.        *
     *                                                                          *
     * > Be sure a compatible version of @sailshq/socket.io-redis is installed! *
     * > (See https://sailsjs.com/config/sockets for the latest version info)   *
     *                                                                          *
     * (https://sailsjs.com/docs/concepts/deployment/scaling)                   *
     *                                                                          *
     ***************************************************************************/
    // adapter: '@sailshq/socket.io-redis',
    // url: 'redis://user:password@bigsquid.redistogo.com:9562/dbname',
    //--------------------------------------------------------------------------
    // /\   OR, to avoid checking it in to version control, you might opt to
    // ||   set sensitive credentials like this using an environment variable.
    //
    // For example:
    // ```
    // sails_sockets__url=redis://admin:myc00lpAssw2D@bigsquid.redistogo.com:9562/
    // ```
    //--------------------------------------------------------------------------

  },



  /**************************************************************************
   *                                                                         *
   * Set the production log level.                                           *
   *                                                                         *
   * (https://sailsjs.com/config/log)                                        *
   *                                                                         *
   ***************************************************************************/
  log: {
    level: 'debug'
  },



  http: {

    /***************************************************************************
     *                                                                          *
     * The number of milliseconds to cache static assets in production.         *
     * (the "max-age" to include in the "Cache-Control" response header)        *
     *                                                                          *
     ***************************************************************************/
    cache: 365.25 * 24 * 60 * 60 * 1000, // One year

    /***************************************************************************
     *                                                                          *
     * Proxy settings                                                           *
     *                                                                          *
     * If your app will be deployed behind a proxy/load balancer - for example, *
     * on a PaaS like Heroku - then uncomment the `trustProxy` setting below.   *
     * This tells Sails/Express how to interpret X-Forwarded headers.           *
     *                                                                          *
     * This setting is especially important if you are using secure cookies     *
     * (see the `cookies: secure` setting under `session` above) or if your app *
     * relies on knowing the original IP address that a request came from.      *
     *                                                                          *
     * (https://sailsjs.com/config/http)                                        *
     *                                                                          *
     ***************************************************************************/
    trustProxy: true,

  },

  custom: {
    baseUrl: 'https://example.com',
    internalEmailAddress: 'support@example.com',

  },



};
