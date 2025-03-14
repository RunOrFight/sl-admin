"use client";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser, User, UserSchema } from "@/entities/user";
import { TEXT } from "@/shared/model";
import { FormItemProps, useAppForm } from "@/shared/lib";

const FORM_CONFIG = {
  resolver: zodResolver(UserSchema),
  defaultValues: {
    username: "",
  },
};

const renderFormItemUsername: FormItemProps<User>["render"] = ({ field }) => (
  <FormItem>
    <FormLabel>{TEXT.username}</FormLabel>
    <FormControl>
      <Input placeholder={TEXT.placeholder} {...field} />
    </FormControl>
    <FormDescription>{TEXT.usernameDescription}</FormDescription>
    <FormMessage />
  </FormItem>
);

type CreateUserFormProps = {
  onCreateSuccess?: VoidFunction;
};

export const CreateUserForm = ({ onCreateSuccess }: CreateUserFormProps) => {
  const form = useAppForm<User>(FORM_CONFIG);

  const handleSubmit = (user: User) => {
    try {
      createUser(user);
      onCreateSuccess?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={"space-y-8"}>
        <FormField
          control={form.control}
          name={"username"}
          render={renderFormItemUsername}
        />
        <Button type={"submit"} className={"hover:cursor-pointer"}>
          {TEXT.submit}
        </Button>
      </form>
    </Form>
  );
};
