import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchAddedPostsByUsers } from "../redux/tea-library/teaLibrarySlice";
import { fetchUserPosts } from "./../redux/user/userSlice";

const useGetReducerAndSelector = (teaGrade: string, path: string) => {
  const [data, setData] = useState({
    wouldTaste: false,
  });

  useEffect(() => {
    if (path.includes("would-taste-tea"))
      setData({ ...data, wouldTaste: true });
  }, []);

  /*    */
  const dispatcher = path.includes("would-taste-tea" || "tasted-tea");
  console.log(dispatcher, data, path);
};

export default useGetReducerAndSelector;
