import { useEffect, useState } from "react";
import { Button, Pagination } from "@mantine/core";
import { notesSelectors, useAppSelector } from "../../store";

import { Note } from "../Note";

import styles from "./notes.module.scss";
import { Props } from "../Note/Note.types";

export const Notes = () => {
  const notesList = useAppSelector(notesSelectors.list);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentNotes, setCurrentNotes] = useState<Props[]>([]);
  const [sortedNotes, setSortedNotes] = useState<Props[]>([]);
  const [priority, setPriority] = useState<0 | 1>(0);

  const notesPerPage = 9;
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;

  useEffect(() => {
    const compare = (priority: 0 | 1) => {
      if (priority === 0) {
        return [...notesList].sort((a, b) => a.priority > b.priority ? 1 : -1);
      } else {
        return [...notesList].sort((a, b) => a.priority < b.priority ? 1 : -1);
      }
    };

    setSortedNotes(compare(priority));

    const notes = [...sortedNotes].slice(indexOfFirstNote, indexOfLastNote);

    setCurrentNotes(notes);
  }, [notesList, priority, sortedNotes]);


  const onChangeSortPriority = () => {
    const p = priority === 0 ? 1 : 0;
    setPriority(p);
  };

  return (
    <div className={styles.notes}>
      <Button onClick={onChangeSortPriority} >
        Sort by priority: {priority}
      </Button>
      <div className={styles.list}>
        {currentNotes.map((item, index) => {
          return (
            <Note
              key={index}
              title={item.title}
              text={item.text}
              id={item.id}
              priority={item.priority}
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
