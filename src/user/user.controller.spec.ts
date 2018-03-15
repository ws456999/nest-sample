import { Test } from '@nestjs/testing'
import {TestingModule} from '@nestjs/testing/testing-module'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { UserSchema } from './schemas/user.schema'
import { UserModule } from './user.module'

describe('user controller', () => {
  let userController: UserController
  let userService: UserService

  beforeEach(async done => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      components: [UserService],
      imports: [
        {
          provide: 'UserSchemaModel',
          useValue: {}
        }
      ]
    }).compile()

    userService = module.get<UserService>(UserService)
    userController = module.get<UserController>(UserController)
  })

  describe('findAll', () => {
    it('should return an array of user', async () => {
      expect(userService).toBeDefined()
      expect(userController).toBeDefined()
      // const result = []
      // jest.spyOn(userService, 'findAll').mockImplementation(() => result)

      // expect(userController.findAll()).toBe([])
      })
  })
})
