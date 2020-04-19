import React, { useState } from 'react'
import Fuse from 'fuse.js'

import * as S from './styles'
import options from './fuseOptions'

export default ({ data, onChange }) => {
  const [searchValue, setSearchValue] = useState('')

  const onSearchChange = e => {
    const { value } = e.target
    setSearchValue(value)
    if (value === '') {
      onChange(data)
      return
    }

    const fuse = new Fuse(data, options)
    const result = fuse.search(value).map(item => item.item)
    onChange(result)
  }

  return (
    <S.FilterComponent>
      <S.SearchIcon>
        <S.StyledSearch />
      </S.SearchIcon>
      <S.TextField
        onChange={onSearchChange}
        value={searchValue}
        placeholder='Search'
      />
    </S.FilterComponent>
  )
}
