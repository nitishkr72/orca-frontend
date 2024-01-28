import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
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
            <Label htmlFor="emp_name" value="Full Name" />
          </div>
          <TextInput
            id="emp_name"
            type="text"
            placeholder="Full Name"
            required
            name="name"
            onChange={handleFormData}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone_no1" value="Phone Number" />
          </div>
          <TextInput
            id="phone_no1"
            type="text"
            placeholder="Phone Number"
            required
            name="phone_no"
            onChange={handleFormData}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="johndoe@gmail.com"
            required
            name="email"
            onChange={handleFormData}
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
            name="password"
            onChange={handleFormData}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <span>
        Already have account? <Link to={"/signin"}>Sign In</Link>
      </span>
    </div>
  );
}
