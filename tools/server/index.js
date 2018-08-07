'use strict'

const Hapi = require('hapi'),
  Server = new Hapi.Server(),
  Path = require('path'),
  Inert = require('inert'),
  Utils = require('./utils'),
  FileHandler = (request, reply) => {
    reply.file(Path.join(__dirname, '../../dist/index.html'))
  },
  Routes = {
    Base: [
      // /{files*}
      {
        method: 'GET',
        path: '/{files*}',
        handler: {
          directory: {
            path: '.',
            redirectToSlash: true,
            index: true
          }
        }
      }
    ],
    Static: [
      {
        method: 'GET',
        path: '/home'
      },
      {
        method: 'GET',
        path: '/shop'
      },
      {
        method: 'GET',
        path: '/shop/detail/{id}'
      },
      {
        method: 'GET',
        path: '/my-account'
      },
      {
        method: 'GET',
        path: '/my-shop'
      },
      {
        method: 'GET',
        path: '/checkout'
      },
      {
        method: 'GET',
        path: '/payment'
      },
      {
        method: 'GET',
        path: '/order/{id}'
      },
      {
        method: 'GET',
        path: '/mission'
      },
      {
        method: 'GET',
        path: '/mindless'
      },
      {
        method: 'GET',
        path: '/contact'
      },
      {
        method: 'GET',
        path: '/tos'
      }
    ]
  }

Server.connection({
    host: '0.0.0.0',
    port: process.env.PORT || 5000,
    state: { ignoreErrors: true },
    routes: {
        files: { relativeTo: Path.join(__dirname, '../../dist') },
        cors: {
          origin: ['*'],
          exposedHeaders: ['Authorization']
        }
    }
})

Server.register([Inert], (err) => {
  if (err) throw err

	Server.route(
    [].concat(
      Routes.Base,
      Routes.Static
      .map(r => {
        r.handler = FileHandler
        return r
      })
    ).map(r => {
      r.config = { auth: false }
      return r
    })
	)
})

Server.start((err) => {
    if (err) throw err
    Utils.MindCtrlIsRunning(Server.info.uri)

})
