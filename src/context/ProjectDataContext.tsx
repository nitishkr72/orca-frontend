import { createContext, useState } from "react";

export type ProjectDataContextType = {
  projectData: any[]; // Adjust the type based on your data
  setProjectData: React.Dispatch<React.SetStateAction<any[]>>;
};

export const ProjectContext = createContext<ProjectDataContextType | undefined>(
  undefined
);

export default function ProjectContextProvider({
  children,
}: {
  children: any;
}) {
  const [projectData, setProjectData] = useState<any[]>([]);

  return (
    <ProjectContext.Provider value={{ projectData, setProjectData }}>
      {children}
    </ProjectContext.Provider>
  );
}
