import { Display } from "@buildo/bento-design-system";
import { Banner, InlineLoader, Inset, Stack } from "./ui";
import { UsersTable } from "./UsersTable";
import "react-query";
import { useQuery } from "react-query";
import { getUsers } from "./api";
import { match } from "ts-pattern";

function App() {
  const usersQuery = useQuery("users", () => getUsers());

  return (
    <Stack space={0} dividers>
      <Inset space={24}>
        <Display size="medium">Users</Display>
      </Inset>
      <Inset space={24}>
        {match(usersQuery)
          .with({ status: "error" }, () => (
            <Banner
              kind="negative"
              title={"Error while loading users"}
              action={{
                label: "Retry",
                onPress: () => usersQuery.refetch(),
              }}
            />
          ))
          .with({ status: "loading" }, { status: "idle" }, () => (
            <InlineLoader message="Loading users..." />
          ))
          .with({ status: "success" }, ({ data }) => <UsersTable users={data} />)
          .exhaustive()}
      </Inset>
    </Stack>
  );
}

export default App;
