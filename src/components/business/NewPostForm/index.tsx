import React, { useEffect } from "react";
import * as Yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TextInput,
  Button,
  TextArea,
  ImageAttachment,
  TagListInput,
} from "@/src/components/common";

import { IPost } from "@/src/types/post";
import { ApiInstance } from "@/src/utils/api";
import { usePostStore } from "@/src/store/usePostStore";
import { useDraftPostTool } from "@/src/store/useDraftPostTool";
import { AddNewPostFormType } from "@/src/types/post";

const validationSchema = Yup.object({
  title: Yup.string(),
  description: Yup.string(),
  image: Yup.mixed().test("file", "You need to provide a file", (value) => {
    console.log("file value: ", value);
    if (value) {
      return true;
    }
    return false;
  }),
  publishDate: Yup.string(),
  tags: Yup.array(),
});

const NewPostForm: React.FC = () => {
  const { addPost } = usePostStore();
  const { addDraftPost, draftPosts } = useDraftPostTool();
  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const {
    register,
    reset,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = formMethods;

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data: AddNewPostFormType) => {
    const { title, description, image, publishDate, tags } = data;

    try {
      const base64String = await convertFileToBase64(image);

      const payload: any = {
        title,
        description,
        image: base64String,
        publishDate: new Date(),
        tags,
      };
      const res = await ApiInstance("POST", "/api/posts/post", payload);

      addPost(res.data);
      reset();
    } catch (error) {}
  };

  const imageInput = watch("image");
  useEffect(() => {
    const isInDraftList = draftPosts.findIndex(
      (dPost: IPost) => dPost.image.name === imageInput?.name
    );
    if (isInDraftList === -1 && imageInput) {
      const newPost: IPost = getValues();
      addDraftPost({
        ...newPost,
        tags: [],
        image: imageInput,
        id: draftPosts.length.toString(),
      } as IPost);
    }
  }, [imageInput]);

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="flex flex-col gap-x-1 gap-y-2 md:mb-4 max-w-screen-sm mx-auto"
      >
        <div className="flex justify-end items-center md:py-4 md:px-4 py-2 px-1">
          <div className="flex justify-end items-center gap-x-2">
            <Button onClick={() => reset()} className="text-sm md:text-base">
              Cancel
            </Button>
            <Button className="text-sm md:text-base" type="submit">
              Publish
            </Button>
          </div>
        </div>
        <ImageAttachment
          name="image"
          id="image"
          errors={errors}
          register={register}
          className={{ container: "w-full mx-auto mt-4" }}
          tabIndex={1}
        />
        <TextInput
          name="title"
          id="title"
          type="text"
          label="Title"
          placeholder="Title"
          register={register}
          errors={errors}
          className={{ input: "border-2" }}
          tabIndex={2}
        />
        <TextArea
          label="Description"
          name="description"
          id="description"
          type="text"
          placeholder="Description"
          register={register}
          errors={errors}
          className={{ input: "border-2" }}
          tabIndex={3}
        />
        <TagListInput
          name="tags"
          id="tags"
          label="Tags"
          register={register}
          errors={errors}
          setValue={setValue}
          tabIndex={4}
        />
      </form>
    </FormProvider>
  );
};
export default NewPostForm;
