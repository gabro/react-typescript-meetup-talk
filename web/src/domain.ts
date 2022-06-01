export type User = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  status: UserStatus;
};

type UserStatus = "active" | "inactive";
