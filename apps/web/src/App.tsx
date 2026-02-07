import './App.css'

// import { convexApi, convexReact } from '@repo/backend'

function App() {
  // const tasks = convexReact.useQuery(convexApi.api.tasks.get)

  return (
    <div>
      <h1 className="text-2xl font-bold" style={{ color: "black" }}>tasks from the convex database</h1>
      {/* <ul>
        {tasks?.map((task: any) => (
          <li key={task._id}>{task.text}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default App
