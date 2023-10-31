import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { useSession, signOut } from "next-auth/react";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Input = () => {
  const { data: session } = useSession();
  const [input, setinput] = useState("");
  const [selectedFile, setselectedFile] = useState(null);
  const filepickerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendPost = async () => {
    setIsLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      text: input,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
      name: session.user.name,
      username: session.user.username,
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      });
    }

    setinput("");
    setselectedFile(null);
    setIsLoading(false);
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setselectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
          <img
            onClick={signOut}
            className="w-11 h-11 rounded-full hover:brightness-95 cursor-pointer"
            src={session.user.image}
            alt="user-image"
          />
          <div className="w-full divide-y divide-gray-200">
            <div className="">
              <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wider min-h-[50px] text-gray-700"
                rows="2"
                placeholder="What' s happening?"
                value={input}
                onChange={(e) => setinput(e.target.value)}
              ></textarea>
            </div>
            {selectedFile && (
              <div className="relative">
                <XIcon
                  className="h-7 text-white cursor-pointer absolute shadow-md shadow-white rounded-full"
                  onClick={() => setselectedFile(null)}
                />
                <img
                  src={selectedFile}
                  className={`${isLoading && "animate-pulse"}`}
                />
              </div>
            )}

            <div className="flex items-center justify-between pt-2.5 ">
              {!isLoading && (
                <>
                  <div className="flex ">
                    <div
                      className=""
                      onClick={() => filepickerRef.current.click()}
                    >
                      <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                      <input
                        type="file"
                        hidden
                        ref={filepickerRef}
                        onChange={addImageToPost}
                      />
                    </div>
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                  </div>

                  <button
                    onClick={sendPost}
                    disabled={!input.trim()}
                    className="px-4 py-1.5 shadow-md rounded-full bg-blue-400 hover:brightness-95  text-white font-bold disabled:opacity-50"
                  >
                    Tweet
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
