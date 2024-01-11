// src/entry-client.tsx

import ReactDOM from 'react-dom/client'

import { StartClient } from '@tanstack/react-router-server/client'
import { createRouter } from './routers/createRouter.tsx'

const router = createRouter()
router.hydrate()

ReactDOM.hydrateRoot(document, <StartClient router={router} />)