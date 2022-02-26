import React from 'react'
import { useState } from 'react'
// import ClearIcon from "@mui/icons-material/Clear"
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import './style.css'

exports.Mui5search = function (props) {
  const [searchText, setSearchText] = useState('')

  const triggerSearch = () => {
    axios
      .post(props.url, { searchTerm: searchText })
      .then(response => props.cb(response.data))
  }

  return (
    <>
      {props.opt === 1 ? (
        <TextField
          id='outlined-search'
          label='Search'
          type='search'
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value)
          }}
        />
      ) : props.opt === 2 ? (
        <TextField
          id='filled-search'
          label='Search'
          type='search'
          variant='filled'
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value)
          }}
        />
      ) : (
        <TextField
          id='standard-search'
          label='Search'
          placeholder='Search'
          variant='standard'
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value)
          }}
        />
      )}
      {/* <ClearIcon></ClearIcon> */}
      <div
        className={props.opt === 1 ? 's1' : props.opt === 2 ? 's1' : 's2'}
        onClick={triggerSearch}
      >
        <SearchIcon></SearchIcon>
      </div>
    </>
  )
}
