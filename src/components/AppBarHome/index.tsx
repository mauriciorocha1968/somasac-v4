import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import { LoginOutlined } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import LoadingButton from '@mui/lab/LoadingButton'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import logo from '../../assets/images/logo.png'
import backgroundImg from '../../assets/images/background01.png'

import {
  MessageContent,
  MessageBorder,
  ImageContent,
  CardContent
} from './styles'
import Footer from '../Footer'
import CardNews from '../Card'

import { newsMock } from '../../utils/mockNews'
import useScrollTrigger from '@mui/material/useScrollTrigger'

export default function ButtonAppBar() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const handleSendToLogin = () => {
    setLoading(true)
    router.push('/login')
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20
  })

  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          elevation={trigger ? 20 : 0}
          style={{
            background: '#fbfbfb',
            backgroundColor: trigger ? '#fbfbfb' : 'transparent',
            boxShadow: trigger
              ? '5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important'
              : undefined
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Image src={logo} alt="logo" height={25} width={130} />
            </Typography>
            <LoadingButton
              onClick={handleSendToLogin}
              endIcon={<LoginOutlined />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              style={{
                backgroundColor: '#415772',
                color: '#fff',
                opacity: 0.9
              }}
              size={'medium'}
            >
              Entrar
            </LoadingButton>
          </Toolbar>
        </AppBar>

        <ImageContent>
          <Image
            alt="background"
            src={backgroundImg}
            layout="fill"
            objectFit="scale-down"
            quality={100}
            priority
          />
        </ImageContent>

        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 1000 }}
          transition={{ type: 'spring', stiffness: 20 }}
        >
          <MessageContent>
            <Typography variant="h4">
              Não perca mais nenhuma venda por falta de atendimento
            </Typography>
            <MessageBorder />

            <Typography
              variant="h6"
              style={{ paddingTop: 20, fontWeight: 100 }}
            >
              Solução completa de relacionamento e vendas no WhatsApp e outras
              plataformas digitais.
            </Typography>
          </MessageContent>
        </motion.div>

        <motion.div
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0, 0.1, 0.9, 1] }}
        >
          <CardContent>
            {newsMock?.map(item => (
              <CardNews
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </CardContent>

          <CardContent>
            {newsMock?.map(item => (
              <CardNews
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </CardContent>

          <CardContent>
            {newsMock?.map(item => (
              <CardNews
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </CardContent>

          <CardContent>
            {newsMock?.map(item => (
              <CardNews
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </CardContent>

          <CardContent>
            {newsMock?.map(item => (
              <CardNews
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </CardContent>

          <CardContent>
            {newsMock?.map(item => (
              <CardNews
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </CardContent>

          <CardContent>
            {newsMock?.map(item => (
              <CardNews
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </CardContent>

          <CardContent>
            {newsMock?.map(item => (
              <CardNews
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </CardContent>
        </motion.div>
      </Box>

      <Footer />
    </>
  )
}
