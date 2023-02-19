import { Container } from "@mantine/core";

import { NoteInputs } from "../NoteInputs";
import { Notes } from "../Notes";

import styles from "./app.module.scss";

export const App = () => {
  return (
    <Container className={styles.container}>
      <NoteInputs />
      <Notes />
    </Container>
  );
};
