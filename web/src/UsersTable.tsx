import { useState } from "react";
import { User } from "./domain";
import { Table, tableColumn, IconInfo, Modal, ReadOnlyField } from "./ui";

type Props = {
  users: User[];
};

export function UsersTable({ users }: Props) {
  const [focusedUser, setFocusedUser] = useState<User | null>(null);

  const columns = [
    tableColumn.text({
      accessor: "firstName",
      headerLabel: "First name",
    }),
    tableColumn.text({
      accessor: "lastName",
      headerLabel: "Last name",
    }),
    tableColumn.chip({
      accessor: "status",
      headerLabel: "Status",
    }),
    tableColumn.iconButton({
      accessor: "info",
      disableSortBy: true,
    }),
  ] as const;

  const data = users.map(
    (user) =>
      ({
        ...user,
        status: {
          label: user.status,
          color: user.status === "active" ? "green" : "red",
        },
        info: {
          label: "Info",
          onPress: () => setFocusedUser(user),
          icon: IconInfo,
        },
      } as const)
  );

  return (
    <>
      <Table columns={columns} data={data} />
      {focusedUser && (
        <Modal
          title={`${focusedUser.firstName} ${focusedUser.lastName}'s info`}
          onClose={() => setFocusedUser(null)}
        >
          <ReadOnlyField
            name="dob"
            label="Date of birth"
            value={new Date(focusedUser.dateOfBirth).toLocaleDateString()}
          />
        </Modal>
      )}
    </>
  );
}
