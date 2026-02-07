import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// import { convexReact } from '@repo/backend'
// const { ConvexProvider, ConvexReactClient } = convexReact

// const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ConvexProvider client={convex}> */}
      <App />
    {/* </ConvexProvider> */}
  </StrictMode>,
);
// const root = createRoot(document.getElementById('root')!)

// async function bootstrap() {
//   root.render(
//     <StrictMode>
//       <ConvexProvider client={convex}>
//         <App />
//       </ConvexProvider>
//     </StrictMode>,
//   )
// }

// bootstrap()
