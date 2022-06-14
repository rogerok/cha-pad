import React, {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";

import { nanoid } from "@reduxjs/toolkit"; //for generating unique id of post

import { useAppSelector, useAppDispatch } from "./redux.hooks";
import useCompressPhoto from "./useCompressPhoto.hook"; //for getting compressed photo from file input

import { selectTeaGradesName } from "../redux/tea-library/teaLibrarySlice";
import { selectCurrentUser } from "../redux/user/userSlice";

import {
  addNewPost,
  addTeaDataToUserProfile,
  selectPostsLoading,
} from "../redux/posts/postsSlice";

import { ITea, ITeaGrades } from "../ts/types";

type FormChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

interface IuseAddTea {
  handleChange: (e: FormChangeEvent) => void;
  handleFileInputChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleStarRatingChange: (starRating: number | null) => void;
  teaData: ITea;
  teaGradesName: ITeaGrades[];
  isLoading: boolean;
}

const useAddTea = (): IuseAddTea => {
  const dispatch = useAppDispatch();

  const userName = useAppSelector(selectCurrentUser)?.displayName ?? "";
  const userId = useAppSelector(selectCurrentUser)?.id ?? "";
  const teaGradesName = useAppSelector(selectTeaGradesName);
  const isLoading = useAppSelector(selectPostsLoading);

  const { teaPhoto, handleFileInputChange, handlePhotoSubmit } =
    useCompressPhoto();

  const [teaData, setTeaData] = useState<ITea>({
    addedBy: userName,
    teaName: "",
    teaAge: "",
    teaGrade: "",
    teaReview: "",
    wouldTaste: false,
    id: "",
    userId,
    rating: null,
  });

  const handleChange = useCallback((e: FormChangeEvent): void => {
    const { name, value } = e.target;

    setTeaData((teaData) => ({
      ...teaData,
      //if event happened on  would taste checkbox, then set value to opposite
      [name]: name === "wouldTaste" ? !teaData.wouldTaste : value,
    }));
  }, []);

  const handleStarRatingChange = useCallback((starRating: number | null) => {
    setTeaData((teaData) => ({
      ...teaData,
      rating: starRating,
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //generating unique id and add post id to uer profile
    const uuid: string = nanoid();
    const data = {
      ...teaData,
      id: uuid,
      userId,
    };

    //add post data to store
    await dispatch(addNewPost({ data, teaPhoto }));
    //add post data to user profile
    await dispatch(addTeaDataToUserProfile({ data, userId }));
    handlePhotoSubmit();

    setTeaData({
      addedBy: userName,
      teaName: "",
      teaAge: "",
      teaGrade: "",
      teaReview: "",
      wouldTaste: false,
      id: "",
      userId,
      rating: null,
    });
  };

  return {
    handleChange,
    handleFileInputChange,
    handleSubmit,
    handleStarRatingChange,
    teaData,
    teaGradesName,
    isLoading,
  };
};

export default useAddTea;
