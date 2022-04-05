import React, { ChangeEventHandler, useState } from "react";
import Compressor from "compressorjs";

interface CompressedPhoto {
  teaPhoto: { image: File | null };
  handleFileInputChange: ChangeEventHandler<HTMLInputElement>;
  handlePhotoSubmit: Function;
}
interface IPhoto {
  image: File | null;
}

const useCompressPhoto = (): CompressedPhoto => {
  const [teaPhoto, setTeaPhoto] = useState<IPhoto>({
    image: null,
  });

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const photo = e.target.files as FileList;
    if (!photo[0]) return;
    console.log(photo[0]);
    if (photo[0].size < 500000) setTeaPhoto({ image: photo[0] });
    if (photo[0].size > 500000)
      await new Compressor(photo[0], {
        quality: 0.6,
        success: (result) => {
          console.log(result);
          setTeaPhoto({ image: result as File });
        },
        error: (error) => console.log(error.message),
      });
  };

  const handlePhotoSubmit = () => setTeaPhoto({ image: null });

  return { teaPhoto, handleFileInputChange, handlePhotoSubmit };
};
export default useCompressPhoto;
