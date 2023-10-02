import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepostiory: IGetUsersRepository) {}

  async handle() {
    try {
      const users = await this.getUsersRepostiory.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something want wrong.",
      };
    }
  }
}