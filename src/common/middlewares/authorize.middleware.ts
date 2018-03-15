import * as passport from 'passport'
// import { Middleware, NestMiddleware, Next } from '@nestjs/common'
import {
  Middleware,
  NestMiddleware,
  UnauthorizedException
} from '@nestjs/common'

import {
  ExtractJwt,
  StrategyOptions,
  Strategy as JwtStrategy
} from 'passport-jwt'

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('x-auth'),
  secretOrKey: 'secret'
}

passport.use(
  new JwtStrategy(opts, (jwtpayload, done) => {
    console.log('passport.use!')
    done(null, jwtpayload)
  })
)

@Middleware()
export class AuthorizeMiddleware implements NestMiddleware {
  public resolve() {
    return async (req, res, next) => {
      return await passport.authenticate(
        'jwt',
        { session: false },
        (err, user, info) => {
          let message
          if (err) {
            next(new UnauthorizedException(err))
          } else if (typeof info !== 'undefined') {
            switch (info.message) {
              case 'No auth token':
              case 'invalid signature':
              case 'jwt malformed':
                message = 'You must provide a valid authenticated access token'
                break
              case 'jwt expired':
                message = 'Your session has expired. Please log in again'
                break
            }
            next(new UnauthorizedException(message))
          } else {
            req.user = user
            next()
          }
        }
      )(req, res, next)
    }
  }

  // public resolve(): (req, res, next) => void {
  //   console.log('passport.authenticate')
  //   return passport.authenticate('jwt', { assignProperty: 'token' }, (err, user, info) => {

  //   })
  // }
}
