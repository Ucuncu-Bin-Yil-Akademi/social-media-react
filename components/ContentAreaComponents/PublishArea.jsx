import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

export default function PublishArea() {
  return (
    <>
      <div className="border-2 rounded-lg">
        <div className="p-3">
          <input
            type="text"
            placeholder="What are you publish?"
            className="w-full py-3 px-2"
          />
        </div>

        <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between p-3 items-center border-t-2">
          <div className="flex gap-5">
            <ControlPointOutlinedIcon
              style={{
                color: "#B0B0B0",
                fontSize: "1.7rem",
              }}
            />
            <PhotoOutlinedIcon
              style={{
                color: "#B0B0B0",
                fontSize: "1.7rem",
              }}
            />
            <VideocamOutlinedIcon
              style={{
                color: "#B0B0B0",
                fontSize: "1.7rem",
              }}
            />
            <InsertLinkOutlinedIcon
              style={{
                color: "#B0B0B0",
                fontSize: "1.7rem",
              }}
            />
          </div>

          <div>
            <button className="border-2 px-4 py-1 rounded-full mr-3">
              Draft
            </button>
            <button className="bg-rose-500 px-4 py-1 rounded-full text-white">
              Post Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
