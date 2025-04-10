import {httpsCallable} from "@firebase/functions";
import {functions} from "@/app/firebase/firebase";

const generateUploadUrl = httpsCallable(functions, 'generateUploadUrl');
const getVideosFunction = httpsCallable(functions, 'getVideos');

export interface Video {
  id?: string,
  uid?: string,
  filename?: string,
  status?: 'processing' | 'processed',
  title?: string,
  description?: string
}

export async function uploadVideo(file: File) {
  const response = await generateUploadUrl({
    fileExtension: file.name.split('.').pop()
  });

  // Upload the file
  // @ts-expect-error ewre
  const uploadResult = await fetch(response?.data?.url, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type
    }
  });
  return uploadResult;
}

export async  function getVideos() {
  const response = await getVideosFunction();
  return response.data as Video[];
}