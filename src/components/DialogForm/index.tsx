import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface Props {
  isOpen: boolean
  handleOpen: (boolean) => void
}

const DialogForm: React.FC<Props> = props => {
  const [open, setOpen] = React.useState(props.isOpen)

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => props.handleOpen(open), [open])

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: '#fc893f' }}>Recuperar senha</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Informe o email para a recuperação de senha.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="E-mail"
            type="email"
            fullWidth
            variant="standard"
            style={{ color: '#415772' }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} style={{ color: '#415772' }}>
            Cancelar
          </Button>
          <Button onClick={handleClose} style={{ color: '#415772' }}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogForm
