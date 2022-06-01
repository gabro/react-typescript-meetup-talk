import { User } from "./domain";
import * as t from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";
import { isLeft } from "fp-ts/Either";

export function getUsers(): Promise<User[]> {
  return fetch("http://localhost:8080/users")
    .then((r) => r.json())
    .then(validateUsers);
}

function validateUsers(users: unknown): User[] {
  const result = t.array(User).decode(users);
  if (isLeft(result)) {
    throw new Error(PathReporter.report(result).join("\n"));
  }
  return result.right;
}
