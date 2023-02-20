import { Input, Button } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";

import { addNote, editNote, notesSelectors, setEditingNoteId, useAppDispatch, useAppSelector } from "../../store";

import { Inputs } from "./NoteInputs.types";

import styles from "./noteInputs.module.scss";

export const NoteInputs = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const notesList = useAppSelector(notesSelectors.list);
  const editingNoteId = useAppSelector(notesSelectors.editingNoteId);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { text, title } = data;

    if (editingNoteId !== null) {
      dispatch(editNote({ text, title, id: editingNoteId, priority: 1 }));
      dispatch(setEditingNoteId({ id: null }));
    } else {
      dispatch(addNote({ text, title, id: notesList.length + 1, priority: 0 }));
    };

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={styles.input}
        placeholder="Title"
        {...register("title", { required: true })}
      />
      <Input
        className={styles.input}
        placeholder="Text"
        {...register("text", { required: true })}
      />
      <Button type="submit">{editingNoteId !== null ? "Edit" : "Submit"}</Button>
    </form>
  );
};
