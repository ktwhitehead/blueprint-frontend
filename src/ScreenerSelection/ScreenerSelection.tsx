import React, { useState } from 'react'
import { useFetch } from '../hooks'
import Screener from '../Screener'
import { Menu, MenuItem } from '../components'
import { HeaderText } from '../Screener/Screener.styled'
import { v4 as uuidv4 } from 'uuid'

const url = `${import.meta.env.VITE_BLUEPRINT_API_URL}/screeners`

interface Screeners {
  id: number
  disorder: string
  short_name: string
  full_name: string
  created_at: string
  updated_at: string | null
}

const ScreenerSelection = () => {
  const { data, error } = useFetch<Screeners[]>(url)
  const [selectedScreener, setSelectedScreener] = useState<number>()

  if (error) return <p>error</p>
  if (!data) return <p>Loading...</p>
  if (selectedScreener) return <Screener screenerId={selectedScreener} />

  return (
    <>
      <HeaderText>Welcome! Select a screener to get started.</HeaderText>
      <Menu>
        {data.map((screener) => (
          <MenuItem
            key={uuidv4()}
            onClick={() => setSelectedScreener(screener.id)}
            onKeyDown={() => setSelectedScreener(screener.id)}
          >
            {screener.full_name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default ScreenerSelection
