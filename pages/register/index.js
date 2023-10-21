import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function RegisterPage() {
  /*   
const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState(""); 
*/

  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  return (
    <div className="bg-orange-200 h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 p-5 rounded-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-500">
          Create a new account
        </h2>
        <p className="text-center text-gray-500">
          Let's create your account and be socialized!
        </p>
        <div className="flex flex-col justify-center gap-5 mt-10">
          <div className="flex gap-5">
            <TextField
              id="outlined-basic"
              label="Name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              type="text"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Surname"
              value={form.surname}
              onChange={(event) =>
                setForm({ ...form, surname: event.target.value })
              }
              // let form = {name: "John", surname: "Doe", age: 25};
              // form = { ...form, name: "Steve" };

              type="text"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            />
          </div>

          <div className="flex gap-5">
            <TextField
              id="outlined-basic"
              value={form.username}
              onChange={(event) =>
                setForm({ ...form, username: event.target.value })
              }
              label="Enter your username"
              type="text"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            />
            <TextField
              id="outlined-basic"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              label="Enter your e-mail"
              type="email"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            />
          </div>

          <TextField
            id="outlined-basic"
            label="Enter your password"
            type="password"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
            variant="outlined"
            sx={{
              width: "100%",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Re-type your password"
            type="password"
            variant="outlined"
            value={form.password2}
            onChange={(event) =>
              setForm({ ...form, password2: event.target.value })
            }
            sx={{
              width: "100%",
            }}
          />

          <Button
            variant="contained"
            className="bg-gray-800 py-3 text-lg mt-10"
            sx={{
              "&:hover": {
                backgroundColor: "#2A3442",
              },
            }}
          >
            Create a New Account
          </Button>
        </div>
      </div>
    </div>
  );
}
