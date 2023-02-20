import { FC } from "react";
import { ActionIcon, Badge, Card, Flex, Group, HoverCard, Text } from "@mantine/core";
import { IconDots, IconEdit, IconExclamationCircle, IconX } from "@tabler/icons-react";


import { Props } from "./Note.types";
import { deleteNote, notesSelectors, setEditingNoteId, setPriority, useAppDispatch, useAppSelector } from "../../store";

export const Note: FC<Props> = ({ text, title, id, priority }) => {
  const editingNoteId = useAppSelector(notesSelectors.editingNoteId);

  const dispatch = useAppDispatch();

  const onEdit = () => {
    if (editingNoteId !== null) {
      dispatch(setEditingNoteId({ id: null }));
    } else {
      dispatch(setEditingNoteId({ id: id }));
    };
  };

  const onDelete = () => {
    dispatch(deleteNote({ id }));
  };

  const onChangePriority = () => {
    const p = priority === 0 ? 1 : 0;
    dispatch(setPriority({ id, priority: p }))
  };

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Group>
          <ActionIcon variant="transparent" onClick={onChangePriority}>
            <IconExclamationCircle color={priority === 1 ? "red" : "gray"} />
          </ActionIcon>
          <Badge color="pink" variant="light">
            {id}
          </Badge>
          <HoverCard shadow="md">
            <HoverCard.Target>
              <ActionIcon variant="transparent">
                <IconDots color="#228be6" />
              </ActionIcon>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Flex gap="md" justify="center">
                <ActionIcon variant="transparent" onClick={onDelete}>
                  <IconX />
                </ActionIcon>
                <ActionIcon variant="transparent" onClick={onEdit}>
                  <IconEdit color="#228be6" />
                </ActionIcon>
              </Flex>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </Group>
      <Text size="sm" color="dimmed">
        {text}
      </Text>
    </Card>
  );
};
