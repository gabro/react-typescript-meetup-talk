import * as t from "io-ts";

export const User = t.type({
  firstName: t.string,
  lastName: t.string,
  dateOfBirth: t.string,
  status: t.keyof({
    active: null,
    inactive: null,
    invited: null,
  }),
});
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type User = t.TypeOf<typeof User>;
