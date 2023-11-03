import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { HeartIcon as HeadtIconFilled } from "@heroicons/react/solid";
import Moment from "react-moment";
import { db } from "../firebase";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Post = ({ post }) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", post.id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db]
  );
  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  const likePost = async () => {
    if (session) {
      if (hasLiked) {
        await deleteDoc(doc(db, "posts", post.id, "likes", session?.user.uid));
      } else {
        await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid), {
          username: session.user.username,
        });
      }
    } else {
      signIn();
    }
  };
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-200">
      <img
        className="w-11 h-11 mr-4 rounded-full"
        src={post.data().userImage}
        alt="user-image"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold  text-[15px] sm:text-[16px] hover:underline">
              {post.data().name}
            </h4>
            <span className="text-sm sm:text-[15px]">
              @{post.data().username} -{" "}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
            </span>
          </div>

          <DotsHorizontalIcon className="h-10 w-10 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-400" />
        </div>

        <p className="text-gray-800  text-[15px] sm:text-[16px] mb-2">
          {post.data().text}
        </p>
        <img className=" rounded-2xl mr-2" src={post.data().image} alt="" />
        <div className="flex justify-between text-gray-500 p-2">
          <div className="flex items-center  select-none">
            <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          </div>

          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />

          <div className="flex items-center">
            {hasLiked ? (
              <HeadtIconFilled
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100"
              />
            ) : (
              <HeartIcon
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
              />
            )}

            {likes.length > 0 && (
              <span className={`${hasLiked && "text-red-600"} text-sm `}>
                {likes.length}
              </span>
            )}
          </div>

          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
};

export default Post;
