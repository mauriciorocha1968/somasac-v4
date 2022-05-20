import React from 'react'
import { getYear } from 'date-fns'
import { Box } from '@mui/material'
import { FooterLoginText, FooterLogin } from './styles'

const Footer = ({ empresa }) => {
  const year = getYear(new Date())
  return (
    <FooterLogin>
      <FooterLoginText style={{ color: '#415772' }}>
        <Box component="div" display="inline">
          Copyright 2020 ~ {year} © {empresa}
        </Box>
      </FooterLoginText>
    </FooterLogin>
  )
}

export default Footer
