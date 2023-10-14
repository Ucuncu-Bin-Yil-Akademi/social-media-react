import Avatar from "@mui/material/Avatar";

export default function PopularProfileCard() {
  const userData = [
    {
      avatar: "https://mui.com/static/images/avatar/1.jpg",
      fullname: "Canberk Beren",
      followerCount: "101.2K",
    },
    {
      avatar: "https://mui.com/static/images/avatar/2.jpg",
      fullname: "John Doe",
      followerCount: "93.5K",
    },
    {
      avatar: "https://mui.com/static/images/avatar/3.jpg",
      fullname: "David Gilmour",
      followerCount: "45.1K",
    },
    {
      avatar: "https://mui.com/static/images/avatar/4.jpg",
      fullname: "Mehmet Yılmaz",
      followerCount: "259.9K",
    },
    {
      avatar: "https://mui.com/static/images/avatar/5.jpg",
      fullname: "Jane Doe",
      followerCount: "92.5K",
    },
  ];

  return (
    <>
      {userData.map((user) => {
        return (
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar alt="Remy Sharp" src={user.avatar} />
                <div>
                  <span className="text-lg font-semibold">{user.fullname}</span>
                  <div className="flex gap-1 text-gray-400">
                    <span>{user.followerCount} Followers</span>
                  </div>
                </div>
              </div>

              <div className="text-gray-400">
                <button className="bg-rose-500 text-white rounded-full px-3 py-1">
                  Follow
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
