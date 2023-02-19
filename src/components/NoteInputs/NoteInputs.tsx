import { Input, Button } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";

import { addNote, useAppDispatch } from "../../store";

import { Inputs } from "./NoteInputs.types";

import styles from "./noteInputs.module.scss";

export const NoteInputs = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { text, title } = data;
    dispatch(addNote({ text, title }));
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
      <Button type="submit">Submit</Button>
    </form>
  );
};
