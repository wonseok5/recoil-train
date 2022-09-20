import { BaseAPI } from ".";

export interface User {
  id: number;
  name: string;
  team: string;
  position: string;
  emailAddress: string;
  phoneNumber: string;
  admissionDate: string;
  birthday: string;
  profileImage: string;
  createdAt: string;
  updatedAt: string;
}
interface GetAllUsersResponse {
  users: User[];
}
export class UsersAPIHandler extends BaseAPI {
  URL = "/users";

  getAllUsers() {
    return this.get<GetAllUsersResponse>({ endPoint: "/all" });
  }
}

export const UsersAPI = new UsersAPIHandler();
