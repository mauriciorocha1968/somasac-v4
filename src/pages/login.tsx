import React, { useCallback, useContext, useState } from 'react'

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  Box
} from '@mui/material'
import {
  Visibility,
  VisibilityOff,
  LoginOutlined,
  ArrowCircleLeftOutlined
} from '@mui/icons-material'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSnackbar } from 'notistack'
import LoadingButton from '@mui/lab/LoadingButton'

import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import getValidationErrors from '../utils/getValidationErrors'

import { AuthContext } from '../contexts/AuthContext'

import {
  Content,
  FormContent,
  ButtonContent,
  ImageContent,
  ImageLogoContent
} from '../styles/pages/Login'

import logo from '../assets/images/logo.png'
import backgroundImg from '../assets/images/background-login.png'
import Footer from '../components/Footer'
import DialogForm from '../components/DialogForm'
import { useRouter } from 'next/router'

interface State {
  Senha: string
  showPassword: boolean
}

interface ISignInFormData {
  Email: string
  Senha: string
}

export default function Login() {
  const [values, setValues] = React.useState<State>({
    Senha: '',
    showPassword: false
  })
  const { register, handleSubmit } = useForm()

  const { signIn } = useContext(AuthContext)

  const { enqueueSnackbar } = useSnackbar()

  const [loading, setLoading] = useState(false)

  const [openDialog, setOpenDialog] = useState(false)

  const router = useRouter()

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleSignIn = useCallback(
    async (data: ISignInFormData) => {
      const { Email, Senha } = data

      try {
        const schema = Yup.object().shape({
          Email: Yup.string()
            .required('Informe seu e-mail')
            .email('Informe um e-mail válido'),
          Senha: Yup.string().required('Informe sua Senha')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        setLoading(true)

        await signIn({ email: Email, password: Senha })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          Object.entries(errors).map(([key, value]) => {
            enqueueSnackbar(`${key}: ${value}`, {
              variant: 'error',
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
              }
            })
          })

          setLoading(false)
        } else {
          enqueueSnackbar(
            'Erro ao efetuar login! Usuário ou senha inválido(s).',
            {
              variant: 'error',
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
              }
            }
          )

          setLoading(false)
        }
      }
    },
    [signIn]
  )

  const handleOpenDialogForm = openDialog => {
    setOpenDialog(openDialog)
  }

  return (
    <>
      <Box>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 1000 }}
          transition={{ type: 'spring', stiffness: 20 }}
        >
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

          <ImageLogoContent>
            <IconButton onClick={() => router.push('/')}>
              <ArrowCircleLeftOutlined />
            </IconButton>

            <Image src={logo} alt="logo" height={25} width={130} />
          </ImageLogoContent>
        </motion.div>

        <Content>
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: -400 }}
            transition={{ type: 'spring', stiffness: 20 }}
            style={{ overflow: 'hidden' }}
          >
            <FormContent onSubmit={handleSubmit(handleSignIn)}>
              <FormControl
                variant="outlined"
                fullWidth
                style={{ paddingBottom: 20 }}
              >
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <OutlinedInput
                  id="email"
                  {...register('Email')}
                  name="Email"
                  type="email"
                  label="E-mail"
                  fullWidth
                />
              </FormControl>

              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Senha
                </InputLabel>
                <OutlinedInput
                  name="Senha"
                  {...register('Senha')}
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.Senha}
                  onChange={handleChange('Senha')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Ver senha"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  fullWidth
                />
              </FormControl>

              <ButtonContent
                style={{
                  paddingTop: 20,
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexDirection: 'row'
                }}
              >
                <Typography
                  variant="caption"
                  style={{
                    fontWeight: 300,
                    cursor: 'pointer',
                    color: '#415772'
                  }}
                  onClick={() => handleOpenDialogForm(!openDialog)}
                >
                  Esqueci minha senha
                </Typography>

                <LoadingButton
                  type="submit"
                  onClick={handleSubmit(handleSignIn)}
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
                  Login
                </LoadingButton>
              </ButtonContent>
            </FormContent>
          </motion.div>

          {openDialog && (
            <DialogForm
              isOpen={openDialog}
              handleOpen={() => handleOpenDialogForm(openDialog)}
            />
          )}
        </Content>

        <Footer />
      </Box>
    </>
  )
}
