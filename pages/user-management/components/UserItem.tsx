import Image from "next/image";
import React, { FC } from "react";
import { User } from "../../../apis/users";
import cn from "classnames";
interface Props {
  user: User;
}
const UserItem: FC<Props> = ({ user }) => {
  return (
    <div className={cn(" flex bg-slate-100 px-4 py-2 rounded-md")}>
      <div className={cn("border-2 w-20 h-20 relative rounded-full")}>
        <Image
          src={user.profileImage}
          objectFit="cover"
          layout="fill"
          alt="profileImage"
          className="rounded-full"
        />
      </div>
      <div className={cn("border-2 flex flex-col ml-2 flex-1")}>
        <div>이름 : {user.name}</div>
        <div>소속 : {user.team}</div>
        <div>직책 : {user.position}</div>
      </div>
    </div>
  );
};

export default UserItem;
