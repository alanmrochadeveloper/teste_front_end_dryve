import React from 'react'
import Dashboard from '../Dashboard'

interface DashboardWrapperProps {
  children: any
}
const DashboardWrapper: React.FC<DashboardWrapperProps> = ({
  children,
}: DashboardWrapperProps) => {
  return (
    <>
      <Dashboard>{children}</Dashboard>
    </>
  )
}
export default DashboardWrapper
