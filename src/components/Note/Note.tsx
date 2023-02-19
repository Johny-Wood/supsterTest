import { FC } from "react";
import { ActionIcon, Badge, Card, Group, Text } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";


import { Props } from "./Note.types";
import { notesSelectors, setEditingNoteIndex, useAppDispatch, useAppSelector } from "../../store";

export const Note: FC<Props> = ({ text, count, title }) => {
  const editingNoteIndex = useAppSelector(notesSelectors.editingNoteIndex);

  const dispatch = useAppDispatch();

  const onEdit = () => {
    if (editingNoteIndex !== null) {
      dispatch(setEditingNoteIndex({ index: null }));
    } else {
      dispatch(setEditingNoteIndex({ index: count - 1 }));
    };
  };

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Group>
          <ActionIcon variant="transparent" onClick={onEdit}>
            <IconEdit color="blue" />
          </ActionIcon>
          <Badge color="pink" variant="light">
            {count}
          </Badge>
        </Group>
      </Group>
      <Text size="sm" color="dimmed">
        {text}
      </Text>
    </Card>
  );
};
