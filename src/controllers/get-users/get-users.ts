import { User } from "../../models/user";
import { errorRequest, successfullyRequest } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepostiory: IGetUsersRepository) {}

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      const users = await this.getUsersRepostiory.getUsers();

      return successfullyRequest<User[]>(users);
    } catch (error) {
      return errorRequest()
    }
  }
}
