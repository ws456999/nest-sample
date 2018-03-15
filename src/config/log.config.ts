// const path = require('path')
import * as path from 'path'

// 日志根目录
const baseLogPath = path.resolve(__dirname, '../../logs')

// 错误日志输出完整路径
// const errorLogPath = path.resolve(__dirname, '../../logs/error/error')

// 响应日志输出完整路径
// let responseLogPath = path.resolve(__dirname, '../../logs/response/response')

// 错误日志目录
const errorPath = '/error'
// 错误日志文件名
const errorFileName = 'error'
// 错误日志输出完整路径
const errorLogPath = baseLogPath + errorPath + '/' + errorFileName

// 响应日志目录
const responsePath = '/response'
// 响应日志文件名
const responseFileName = 'response'
// 响应日志输出完整路径
const responseLogPath = baseLogPath + responsePath + '/' + responseFileName

export default {
  appenders: {
    // 错误日志
    error: {
      category: 'errorLogger', // logger名称
      type: 'dateFile', // 日志类型
      filename: errorLogPath, // 日志输出位置
      alwaysIncludePattern: true, // 是否总是有后缀名
      pattern: '-yyyy-MM-dd.log', // 后缀，每小时创建一个新的日志文件
      path: errorPath // 这个字段好像没什么用，logs文件夹如果不存在的话，也会自动创建一个的
    },
    // 响应日志
    response: {
      category: 'resLogger',
      type: 'dateFile',
      filename: responseLogPath,
      alwaysIncludePattern: true,
      pattern: '-yyyy-MM-dd.log',
      path: responsePath
    }
  },
  categories: {
    default: { appenders: ['error', 'response'], level: 'debug' }
  }
}
