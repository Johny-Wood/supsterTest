import { Input, Button } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";

import { addNote, editNote, notesSelectors, setEditingNoteIndex, useAppDispatch, useAppSelector } from "../../store";

import { Inputs } from "./NoteInputs.types";

import styles from "./noteInputs.module.scss";

export const NoteInputs = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const notesList = useAppSelector(notesSelectors.list);
  const editingNoteIndex = useAppSelector(notesSelectors.editingNoteIndex);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { text, title } = data;

    if (editingNoteIndex !== null) {
      dispatch(editNote({ text, title, index: editingNoteIndex }));
      dispatch(setEditingNoteIndex({ index: null }));
    } else {
      dispatch(addNote({ text, title }));
    };

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={styles.input}
        placeholder={editingNoteIndex !== null ? notesList[editingNoteIndex].title : "Title"}
        {...register("title", { required: true })}
      />
      <Input
        className={styles.input}
        placeholder={editingNoteIndex !== null ? notesList[editingNoteIndex].text : "Text"}
        {...register("text", { required: true })}
      />
      <Button type="submit">{editingNoteIndex !== null ? "Edit" : "Submit"}</Button>
    </form>
  );
};
