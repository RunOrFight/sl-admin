import { type User } from "@/entities/user";
import { BASE_API } from "../../../shared/api";

export function createUser(user: User) {
  BASE_API.save(user);
}
