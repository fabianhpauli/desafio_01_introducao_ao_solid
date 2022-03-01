import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const userIsAdmin = this.usersRepository.findById(user_id).admin;
        if (!userIsAdmin) {
            throw new Error("Only admin users are allowed to list");
        }
        return this.usersRepository.list();
    }
}

export { ListAllUsersUseCase };
