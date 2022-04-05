import React, { useState } from "react";
import { v4 as uuidGenerator } from "uuid";

import { useAppSelector, useAppDispatch } from "./redux.hooks";
import useCompressPhoto from "./useCompressPhoto.hook";

import { selectTeaGradesName } from "../redux/tea-library/teaLibrarySlice";
import { selectCurrentUser } from "../redux/user/userSlice";

import { addNewPost, addTeaDataToUserProfile } from "../redux/posts/postsSlice";

import { ITea } from "../ts/types";

type FormChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

const useAddTea = () => {
  const dispatch = useAppDispatch();

  const userName = useAppSelector(selectCurrentUser)?.displayName ?? "";
  const userId = useAppSelector(selectCurrentUser)?.id ?? "";
  const teaGradesName = useAppSelector(selectTeaGradesName);

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

  const handleChange = (e: FormChangeEvent): void => {
    const { name, value } = e.target;

    setTeaData({
      ...teaData,
      //if event happened on  would taste checkbox, then set value to opposite
      [name]: name === "wouldTaste" ? !teaData.wouldTaste : value,
    });
  };

  const handleStarRatingChange = (starRating: number | null) => {
    setTeaData({
      ...teaData,
      rating: starRating,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //generating unique id and add post id to uer profile
    const uuid: string = uuidGenerator();
    const data = {
      ...teaData,
      id: uuid,
      userId,
    };

    await dispatch(addNewPost({ data, teaPhoto }));
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
    teaData,
    teaGradesName,
    handleStarRatingChange,
  };
};

export default useAddTea;
