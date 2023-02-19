import { useState } from "react";
import { Pagination } from "@mantine/core";
import { notesSelectors, useAppSelector } from "../../store";

import { Note } from "../Note";

import styles from "./notes.module.scss";

export const Notes = () => {
  const notesList = useAppSelector(notesSelectors.list);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const notesPerPage = 9;
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;

  const currentNotes = notesList.slice(indexOfFirstNote, indexOfLastNote);


  return (
    <div className={styles.notes}>
      <div className={styles.list}>
        {currentNotes.map((item, index) => {
          return (
            <Note
              key={index}
              title={item.title}
              text={item.text}
              id={item.id}
            />
          );
        })}
      </div>

      <Pagination
        total={Math.ceil(notesList.length / notesPerPage)}
        page={currentPage}
        onChange={setCurrentPage}
        radius="xl"
      />
    </div>
  );
};
