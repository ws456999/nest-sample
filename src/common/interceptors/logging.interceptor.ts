import { Interceptor, NestInterceptor, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import logUtil from '../utils/log.util'

@Interceptor()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    dataOrRequest,
    context: ExecutionContext,
    stream$: Observable<any>
  ): Observable<any> {
    // console.log('Before...')
    const now = Date.now()

    return stream$.do((v) => {
      const ms = Date.now() - now
      logUtil.logResponse(dataOrRequest, ms)
    }).catch((err, ...arg): any => {
      const ms = Date.now() - now
      logUtil.logError(dataOrRequest, err, ms)
      throw err
    })
  }
}

// try {
//   // 开始进入到下一个中间件
//   await next()

//   // 记录响应日志
//   logUtil.logResponse(ctx, ms)

// } catch (error) {
//   // 记录异常日志
//   logUtil.logError(ctx, error, ms)
// }
