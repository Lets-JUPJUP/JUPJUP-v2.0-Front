import { useState } from "react";
import axios from "axios";
import { s3GetImageUrl } from "../api/s3PresignedUrl";

const useS3Image = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const uploadImage = async (images) => {
    //이미지 파일 배열을 받음
    setLoading(true);
    try {
      const urls = await s3GetImageUrl(images);

      return urls;
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { loading, error, uploadImage };
};

export default useS3Image;
