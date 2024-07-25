import React from "react"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

const RootLayout = () => {
  const headerHeight = 64
  return (
    <Box display="flex">
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: `${headerHeight}px` }}
        overflow="auto"
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default RootLayout
