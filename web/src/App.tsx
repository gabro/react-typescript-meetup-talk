import { Display } from "@buildo/bento-design-system";
import { Inset, Stack } from "./ui";
import { UsersTable } from "./UsersTable";
import "react-query";
import { useQuery } from "react-query";
import { getUsers } from "./api";

function App() {
  const { data: users } = useQuery("users", () => getUsers());

  return (
    <Stack space={0} dividers>
      <Inset space={24}>
        <Display size="medium">Users</Display>
      </Inset>
      <Inset space={24}>{users && <UsersTable users={users} />}</Inset>
    </Stack>
  );
}

export default App;
