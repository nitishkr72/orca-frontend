import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});

  function handleFormData(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => {
      const { name, value } = e.target;
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <form className="flex w-[20rem] flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="johndoe@gmail.com"
            required
            onChange={handleFormData}
            name="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            onChange={handleFormData}
            name="password"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <span>
        Dont't have an account? <Link to={"/signup"}>Sign Up</Link>
      </span>
    </div>
  );
}
