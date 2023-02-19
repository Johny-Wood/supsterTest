import { FC } from "react";
import { Badge, Card, Group, Text } from "@mantine/core";

import { Props } from "./Note.types";

export const Note: FC<Props> = ({ text, count, title }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          {count}
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">
        {text}
      </Text>
    </Card>
  );
};
