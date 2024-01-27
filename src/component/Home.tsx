import { Button, Card } from "flowbite-react";
import { useEffect } from "react";

function Component() {
  return (
    <Card className="max-w-xs">
      <div className="flex flex-col items-center pb-10 select-none">
        <div className="rounded-full p-3 text-9xl text-cyan-600">+</div>
        <h5 className="mb-1 text-xl font-medium text-cyan-600 dark:text-white">
          New Project
        </h5>
      </div>
    </Card>
  );
}

async function getAllProject() {
  const res_body = await fetch("http://localhost:2000/project", {
    headers: {
      accept: "application/json",
    },
    method: "GET",
  });

  console.log(JSON.parse(""));
}

export default function Home() {
  return (
    <div>
      <Component />
      <Button
        onClick={() => {
          getAllProject();
        }}
      >
        Click me
      </Button>
    </div>
  );
}
