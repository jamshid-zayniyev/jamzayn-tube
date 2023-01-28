import { Button, Container, Stack } from '@mui/material'
import React from 'react'

const app = () => {
  return (
    <div>
        <Container maxWidth="sm">
        <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </Stack>
        </Container>

    </div>
  )
}

export default app