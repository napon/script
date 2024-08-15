import Link from "next/link"

import { DeleteProjectButton } from "@/components/Dashboard/DeleteProjectButton"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectList({ projects }: { projects: Project[] | null }) {
  return (
    <div>
      {projects?.map(project => (
        <Card key={project.id} className="flex flex-row items-center justify-between">
          <Link href="/project">
            <CardHeader className="items-center">
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
          </Link>
          <DeleteProjectButton projectId={project.id} />
        </Card>
      ))}
    </div>
  )
}
