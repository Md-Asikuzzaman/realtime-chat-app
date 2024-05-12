import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Avatar from "react-avatar";

import moment from "moment";

interface Props {
  receiverId: string;
}

const ChatBoardHeader: NextPage<Props> = ({ receiverId }) => {
  const { data: user, isLoading } = useQuery<UserType>({
    queryKey: ["fetch_user"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/users/${receiverId}`, {
        baseURL: process.env.NEXTAUTH_URL,
      });
      return data.user;
    },
    enabled: receiverId ? true : false,
  });

  return (
    <div className="flex items-center gap-5 py-4 relative bg-white px-4">
      <Avatar name={user?.username} size="35" round={true} />
      <div className="flex-1 flex justify-between">
        <div>
          <h4 className="font-semibold">
            {isLoading && "Loading..."}
            {user?.username}
          </h4>
          <p className="text-xs">
            {user?.status === "online"
              ? "Active now"
              : `Active ${moment(user?.updatedAt).fromNow()}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBoardHeader;
