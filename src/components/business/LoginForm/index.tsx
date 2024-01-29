import React from "react";
import { TLogin } from "@/src/types/auth";
import { useRouter } from "next/router";
import { useAuth } from "@/src/hooks/useAuth";
import * as Yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput, Button } from "@/src/components/common";

interface IProps {
  onFormSubmit: () => void;
}

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required("Password is required!"),
});

const LoginForm = ({ onFormSubmit }: IProps) => {
  const { login } = useAuth();
  const router = useRouter();
  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const {
    register,
    reset,
    formState: { errors, isValid },
  } = formMethods;

  const onSubmit = async (values: TLogin) => {
    try {
      const res = await login(values);
      if (res?.success) {
        onFormSubmit();
        router.push("/");
      }
    } catch (error) {}
  };

  return (
    <section>
      <h3 className="text-center text-xl font-medium">Login</h3>
      <h4 className="text-lg text-center my-4">Welcome to Pinterest</h4>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 md:mb-4"
        >
          <TextInput
            name="username"
            id="username"
            type="text"
            placeholder="Enter username"
            register={register}
            errors={errors}
            className={{ input: "border-2" }}
            tabIndex={1}
          />
          <TextInput
            name="password"
            id="password"
            type="text"
            placeholder="Enter password"
            register={register}
            errors={errors}
            className={{ input: "border-2" }}
            tabIndex={2}
          />
          <Button
            label="Login"
            type="submit"
            className="px-2 mt-2 h-12 flex-1"
            tabIndex={3}
          />
        </form>
      </FormProvider>
    </section>
  );
};

export default LoginForm;
