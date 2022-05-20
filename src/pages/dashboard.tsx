import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import AppBarMenu from '../components/AppBar'
import { getAPIClient } from '../services/axios'

const Dashboard: React.FC = () => {
  return <AppBarMenu />
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const apiClient = getAPIClient(ctx)
  const { ['somaSac.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  // await apiClient.get('/user')

  return {
    props: {}
  }
}

export default Dashboard
