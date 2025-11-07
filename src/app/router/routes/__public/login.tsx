import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__public/login')({
  component: () => <div>🔐 Login Page - Public Access</div>,
})