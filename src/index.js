import React from 'react'
import { useState } from 'react'
// import ClearIcon from "@mui/icons-material/Clear"
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import './style.css'

exports.Mui5search = function (props) {
  const [searchText, setSearchText] = useState('')

  let cls = props.opt === 1 ? 's1' : props.opt === 2 ? 's2' : 's3'
  cls += props.size === 's' ? ' small' : ''

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
          tabIndex={-1}
          value={searchText}
          size={props.size === 's' ? 'small' : ''}
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
          tabIndex={-1}
          size={props.size === 's' ? 'small' : ''}
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
          tabIndex={-1}
          size={props.size === 's' ? 'small' : ''}
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value)
          }}
        />
      )}
      {/* <ClearIcon></ClearIcon> */}
      <div className={cls} onClick={triggerSearch}>
        <SearchIcon></SearchIcon>
      </div>
    </>
  )
}
