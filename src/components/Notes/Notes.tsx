import { notesSelectors, useAppSelector } from "../../store";

import { Note } from "../Note";

import styles from "./notes.module.scss";

export const Notes = () => {
  const notesList = useAppSelector(notesSelectors.list);

  return (
    <div className={styles.notes}>
      {notesList.map((item, index) => {
        return (
          <Note
            key={index}
            title={item.title}
            text={item.text}
            count={index + 1}
          />
        );
      })}
    </div>
  );
};
