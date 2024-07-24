import { Dashboard } from '@/pages/Dashboard'
import { Login } from '@/pages/Login'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: Dashboard,
})

