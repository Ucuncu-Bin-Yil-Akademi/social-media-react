import axios from "axios";

export default function Header({ userData, currentUser, getUserData }) {
  const followUser = async () => {
    const followApi = "http://localhost:3000/users/follow/" + userData._id;

    const response = await axios.post(
      followApi,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user_token"),
        },
      }
    );

    if (response.status === 200) {
      getUserData();
    }
  };

  return (
    <>
      <div className="">
        <div className="relative">
          <img
            src="https://picsum.photos/1200/250"
            className="rounded-b-xl w-full"
          />
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "10%",
            }}
          >
            <img src="https://picsum.photos/250/250" className="rounded-full" />
          </div>
          <div className="flex justify-around items-center w-full p-10 pl-32">
            <div>
              <h2 className="text-3xl text-purple-700 font-bold">
                @{userData.username}
              </h2>
              <h4 className="text-purple-700">UI/UX Designer</h4>
            </div>
            <div>
              {userData.userFollowers.includes(currentUser._id) ? (
                <button
                  className="bg-gray-500 text-white px-5 py-3 rounded-full"
                  onClick={() => {
                    followUser();
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="bg-purple-700 text-white px-5 py-3 rounded-full"
                  onClick={() => {
                    followUser();
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
