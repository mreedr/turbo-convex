"use client"

import { convexReact, convexApi } from '@repo/backend'
const { ConvexProvider, ConvexReactClient } = convexReact

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL ?? '')

export default function Home() {
  return (
    <ProvideConvex>
      <Tasks />
    </ProvideConvex>
  );
}

function ProvideConvex({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  )
}

function Tasks() {
  const tasks = convexReact.useQuery(convexApi.api.tasks.get)
  return (
    <div>
      <h1>Tasks</h1>
      {tasks?.map((task: any) => (
        <div key={task._id}>{task.text}</div>
      ))}
    </div>
  )
}