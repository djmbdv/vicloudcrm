import Button from "@components/Button";
import type { SelectFieldOption } from "@components/SelectField";
import SelectField from "@components/SelectField";
import TextAreaField from "@components/TextAreaField";
import TextField from "@components/TextField";
import { addItemInput } from "@inputs/items";
import { useNotification } from "@providers/NotificationProvider";
import trpc from "@utils/trpc";
import { Form, Formik } from "formik";
import type { FC } from "react";
import React from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

const ItemForm: FC = (): JSX.Element => {
  const utils = trpc.useContext();
  const { addNotification } = useNotification();
  const itemMutation = trpc.items.add.useMutation({
    onSuccess: async ({ id }) => {
      await utils.items.invalidate();
      addNotification({ message: `Added item id: ${id}` });
    },
  });
  const storesQuery = trpc.stores.all.useQuery();

  const storeOptions: SelectFieldOption[] =
    storesQuery?.data?.map((store) => ({
      text: store.name,
      value: store.id,
    })) ?? [];
  return (
    <Formik
      initialValues={{
        name: "",
        price: 0,
        storeId: storeOptions[0]?.value ?? "",
        description: "",
      }}
      validationSchema={toFormikValidationSchema(addItemInput)}
      onSubmit={async (values, { setSubmitting, resetForm }): Promise<void> => {
        try {
          await itemMutation.mutateAsync(values);
          resetForm();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(JSON.stringify(error));
        }
        setSubmitting(false);
      }}
    >
      <Form>
        <TextField name="name" id="name" label="Name" />
        <TextField type="number" name="price" id="price" label="Price" />
        <SelectField
          label="Store"
          options={storeOptions}
          name="storeId"
          id="store"
        />
        <TextAreaField
          name="description"
          id="description"
          label="Description"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default ItemForm;
