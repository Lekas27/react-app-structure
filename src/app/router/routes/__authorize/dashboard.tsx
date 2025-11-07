import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/__authorize/dashboard')({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: '/public/login' })
    }
  },
  component: () => <div>📊 Dashboard - Authorized Only</div>,
})