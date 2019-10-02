'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Are you lost?' }
})
Route.group(()=>{
  
  Route.get('doding/paginate','DodingController.paginate')
  Route.get('dodingAll','DodingController.index')
  Route.get('doding/:id','DodingController.show')
}).prefix('api/v1')