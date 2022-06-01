import { User } from "./domain";

export function getUsers(): Promise<User[]> {
  return fetch("http://localhost:8080/users-new").then((r) => r.json());
}
