import React from 'react'
import { SearchBoxStyle } from '../styles'
import {FaSearch} from 'react-icons/fa'
export default function SearchBox() {
  return (
    <SearchBoxStyle>
      <input type="text" placeholder='گوشی ، لبتاب ، تبلت ...' />
      <FaSearch/>
    </SearchBoxStyle>
  )
}
