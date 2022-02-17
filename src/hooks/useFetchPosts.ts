import React from "react";
import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./redux.hooks";
import { ROUTES } from "../routes/routes";
import { fetchAddedPostsByUsers } from "../redux/tea-library/teaLibrarySlice";
import { firestore } from "../firebase/firebase.utils";

export const useFetchPosts = (teaGrade: string) => {};
