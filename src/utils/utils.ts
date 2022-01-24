import userSlice from "../redux/user/userSlice";
import teaLibrarySlice from "../redux/tea-library/teaLibrarySlice";

export const convertPathnameToCamelCase = (string: string): string => {
  const arrWithoutDash = string
    .toLowerCase()
    .split("-")
    .filter((item) => item.match(/[a-z]/i));
  const cameled = arrWithoutDash.map((word, index) => {
    if (index === 0) return word;
    if (word) return word[0].toUpperCase() + word.slice(1);
  });
  return cameled.join("");
};
