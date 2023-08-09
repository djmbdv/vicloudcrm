import Button from "@components/Button";
import TextField from "@components/TextField";
import { useNotification } from "@providers/NotificationProvider";
import trpc from "@utils/trpc";
import { Form, Formik } from "formik";
import type { FC } from "react";
import React from "react";

const StoreForm: FC = (): JSX.Element => {
  const utils = trpc.useContext();
  const { addNotification } = useNotification();
  const storeMutation = trpc.stores.add.useMutation({
    onMutate: () => utils.stores.invalidate(),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }): Promise<void> => {
        try {
          const { id } = await storeMutation.mutateAsync(values);
          addNotification({ message: `added store Id: ${id}` });
          resetForm();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(JSON.stringify(error));
        }
        setSubmitting(false);
      }}
    >
      <Form>
        <h3 className="font-bold text-sm">Add a new Store</h3>
        <TextField name="name" id="name" label="Name" />
        <TextField name="description" id="description" label="Description" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default StoreForm;
