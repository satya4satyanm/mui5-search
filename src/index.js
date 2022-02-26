import React from 'react'
import { useState } from 'react'
// import ClearIcon from "@mui/icons-material/Clear"
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import axios from 'axios'

exports.Mui5search = function (props) {
  const [searchText, setSearchText] = useState('')

  const triggerSearch = () => {
    console.log("URL " + props.url + " CallBack : " + props.cb)
    axios.post(props.url, JSON.stringify({"searchTerm": searchText})).then(response => props.cb(response))
  }

  return (
    <>
      <TextField
        id='searchText'
        label='Search'
        placeholder='Search'
        variant='standard'
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value)
          console.log('Search text set to ' + e.target.value)
        }}
      />
      {/* <ClearIcon></ClearIcon> */}
      <SearchIcon onClick={triggerSearch}></SearchIcon>
    </>
  )
}
