import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function CardComponent({
  team,
  onClick,
}: {
  team: string;
  onClick: (arg: string) => void;
}) {
  return (
    <Card className="w-[12rem] h-[12rem]" onClick={() => onClick("sjdskjdb")}>
      <div className="flex flex-col items-center justify-center gap-2 select-none">
        <h5 className="mb-1 text-xl font-medium text-cyan-600 dark:text-white">
          {team}
        </h5>
      </div>
    </Card>
  );
}

const teams = [
  "Ocslm",
  "kjfngkfd",
  "dkfgb",
  "kjdbf",
  "sjvf",
  "sjdfhb",
  "sbf",
  "wkje",
  "skb",
  "bjw",
];

export default function TeamViewComponent() {
  const navigate = useNavigate();

  function handleOnClickProjects(issue_id: string) {
    navigate(`/home/issue/${issue_id}`);
  }

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {teams.length === 0 ? (
        <div>Loading...</div>
      ) : (
        teams.map((item, idx) => {
          return (
            <CardComponent
              team={item}
              key={idx}
              onClick={handleOnClickProjects}
            />
          );
        })
      )}
    </div>
  );
}
