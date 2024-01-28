import { Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectDataContext";

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

function CardComponent({
  project,
  onClick,
}: {
  project: PROJECT_DATA_TYPE;
  onClick: (arg: string) => void;
}) {
  return (
    <Card className="w-[12rem] h-[12rem]" onClick={() => onClick("sjdskjdb")}>
      <div className="flex flex-col items-center justify-center gap-2 select-none">
        <h5 className="mb-1 text-xl font-medium text-cyan-600 dark:text-white">
          {project.name}
        </h5>
      </div>
    </Card>
  );
}

// async function getAllProject() {
//   const res_body = await fetch("http://localhost:2000/project");
//   const data = await res_body.json();

//   return JSON.parse(data);
// }

function getMockResponse(): PROJECT_DATA_TYPE[] {
  return [
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
    {
      name: "Orca",
      description: "Frontend Porject",
      // teams_id: ["string"],
      date_of_creation: "2022-04-30",
      created_by: "763d52874391nuhrf2hc28y4rj",
    },
  ];
}

export default function Home() {
  const [projects, setProjects] = useState<PROJECT_DATA_TYPE[]>([]);
  const navigate = useNavigate();

  const context = useContext(ProjectContext);

  async function getData() {
    const data: PROJECT_DATA_TYPE[] = getMockResponse();
    setProjects(data);
    context?.setProjectData(
      data.map((item) => {
        return item.name;
      })
    );
  }

  useEffect(() => {
    getData();
  }, []);

  function handleOnClickProjects(team_id: string) {
    navigate(`/home/team/${team_id}`);
  }

  return (
    <div className="flex flex-row flex-wrap gap-2">
      <Component />
      {projects.length === 0 ? (
        <div>Loading...</div>
      ) : (
        projects.map((item, idx) => {
          return (
            <CardComponent
              project={item}
              key={idx}
              onClick={handleOnClickProjects}
            />
          );
        })
      )}
    </div>
  );
}
