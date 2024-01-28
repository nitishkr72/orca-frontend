import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

type PROJECT_DATA_TYPE = {
  name: string;
  description?: string;
  teams_id?: string[];
  date_of_creation: string;
  created_by: string;
};

function Component() {
  return (
    <Card className="w-[12rem] h-[12rem]">
      <div className="flex flex-col items-center justify-center gap-2 select-none">
        <span className="material-symbols-outlined text-8xl text-cyan-600 rounded-full bg-cyan-200">
          add
        </span>
        <h5 className="mb-1 text-xl font-medium text-cyan-600 dark:text-white">
          New Project
        </h5>
      </div>
    </Card>
  );
}

function CardComponent({ project }: { project: PROJECT_DATA_TYPE }) {
  return (
    <Card className="w-[12rem] h-[12rem]">
      <div className="flex flex-col items-center justify-center gap-2 select-none">
        <h5 className="mb-1 text-xl font-medium text-cyan-600 dark:text-white">
          {project.name}
        </h5>
      </div>
    </Card>
  );
}

async function getAllProject() {
  const res_body = await fetch("http://localhost:2000/project");
  const data = await res_body.json();

  return JSON.parse(data);
}

export default function Home() {
  const [projects, setProjects] = useState<PROJECT_DATA_TYPE[]>([]);

  async function getData() {
    const data: PROJECT_DATA_TYPE[] = await getAllProject();
    setProjects(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-2">
      <Component />
      <div className="flex flex-row">
        {projects.length === 0 ? (
          <div>Loading...</div>
        ) : (
          projects.map((item, idx) => {
            console.log(Array.isArray(projects));
            return <CardComponent project={item} key={idx} />;
          })
        )}
      </div>
    </div>
  );
}
