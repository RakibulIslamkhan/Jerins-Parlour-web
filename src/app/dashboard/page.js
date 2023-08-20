
import PrivateRoute from '@/auth/User'
import DashboardTwo from '@/components/DashboardTwo'
import React from 'react'

export default function page() {
  return (
    <PrivateRoute>
        <DashboardTwo/>
    </PrivateRoute>
  )
}
