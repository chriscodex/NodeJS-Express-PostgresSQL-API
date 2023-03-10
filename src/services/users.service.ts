import faker from 'faker';
import { sequelize } from '../libs/sequelize';
import boom from '@hapi/boom';
import {Model} from 'sequelize';
import { createUser, updateUser, getUser } from '../schemas/user.schema';

export class UsersService {
  users: any[] = []
  constructor(){
    this.generate()
  }

  private generate() {
    const size = 10
    for (let i = 0; i < size; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number(80)
      })
    }
  }

  public async create(data: createUser) {
    return new Promise(async (resolve, reject)=>{
      try {
        const newUser = await sequelize.models.User.create(data as any)
        resolve(newUser)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async findOne(id: string) {
    return new Promise<Model<any, any> | null>(async (resolve, reject)=>{
      try {
        const user = await sequelize.models.User.findByPk(id)
        if (!user) {
          throw boom.notFound('user not found')
        }
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async find() {
    return new Promise(async (resolve, reject) => {
      try {
        /* Query consult */
        // const query = 'SELECT * FROM tasks';
        // const rta = await pool.query(query)
        /* Consulta usando ORM */
        const rta = await sequelize.models.User.findAll({
          include: ['customer']
        })
        resolve(rta)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async update(id: string, changes: updateUser) {
    return new Promise(async (resolve, reject)=>{
      try {
        const user = await this.findOne(id)
        const rta = await user?.update(changes)
        resolve(rta)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async delete(id: string) {
    return new Promise(async (resolve, reject)=>{
      try {
        const user = await this.findOne(id)
        await user?.destroy();
        resolve(id)
      } catch (error) {
        reject(error)
      }
    })
  }
}
