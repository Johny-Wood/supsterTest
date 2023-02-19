import { FC } from "react";
import { ActionIcon, Badge, Card, Group, Text } from "@mantine/core";
import { IconEdit, IconX } from "@tabler/icons-react";


import { Props } from "./Note.types";
import { deleteNote, notesSelectors, setEditingNoteId, useAppDispatch, useAppSelector } from "../../store";

export const Note: FC<Props> = ({ text, title, id }) => {
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

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Group>
          <ActionIcon variant="transparent" onClick={onDelete}>
            <IconX />
          </ActionIcon>
          <ActionIcon variant="transparent" onClick={onEdit}>
            <IconEdit color="blue" />
          </ActionIcon>
          <Badge color="pink" variant="light">
            {id}
          </Badge>
        </Group>
      </Group>
      <Text size="sm" color="dimmed">
        {text}
      </Text>
    </Card>
  );
};
