import React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

interface Props {
  id: number
  title: string
  description: string
  link?: string
}

const CardNews: React.FC<Props> = ({ id, title, description, link }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        opacity: 0.8,
        color: '#fc893f'
      }}
      key={id}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          disabled={!link}
          target="_blank"
          component="a"
          href={link}
        >
          Ver
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardNews
