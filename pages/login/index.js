import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function LoginPage() {
  return (
    <div className="bg-orange-200 h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 p-5 rounded-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-500">
          Login your account
        </h2>
        <p className="text-center text-gray-500">
          Let's login your account and be socialized!
        </p>
        <div className="flex flex-col justify-center gap-5 mt-10">
          <TextField
            id="outlined-basic"
            label="Enter your e-mail"
            type="email"
            variant="outlined"
            sx={{
              width: "100%",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Enter your password"
            type="password"
            variant="outlined"
            sx={{
              width: "100%",
            }}
          />
          <a href="#" className="text-end text-blue-500">
            Forgot your password?
          </a>
          <Button
            variant="contained"
            className="bg-gray-800 py-3 text-lg mt-10"
            sx={{
              "&:hover": {
                backgroundColor: "#2A3442",
              },
            }}
          >
            Login Your Account
          </Button>
        </div>
      </div>
    </div>
  );
}
