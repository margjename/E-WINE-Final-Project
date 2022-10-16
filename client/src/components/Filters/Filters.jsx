import React, { useState, useEffect } from 'react'
import { types, varietales, provinces } from '../utilities/data.js'
import { useDispatch } from 'react-redux'
import { filterPublications, clearFilter } from '../../store/actions/actions'

function Filters () {
  const [filter, setFilter] = useState({
    opt: '',
    varietal: '',
    type: '',
    origin: ''
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(filterPublications(filter))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])
  function handleSort (e) {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    })
    /*  dispatch(
      filterPublications(filter)
    ) */
    // setPage(1)
  }

  return (
    <div>
      <button onClick={() => {
        setFilter({
          order: '',
          varietal: '',
          type: '',
          origin: ''
        })
        dispatch(clearFilter())
      }}
      >Limpiar Filtros
      </button>

      <select name='opt' onChange={handleSort}>
        <option value=''> Ordernar </option>
        <option value='az'> A-Z </option>
        <option value='za'> Z-A </option>
        <option value='more'> Mayor Precio </option>
        <option value='less'> Menor Precio </option>
      </select>
      <select name='varietal' onChange={handleSort}>
        <option value=''> Varietal</option>
        {varietales && varietales.map(e => {
          return (
            <option key={e} value={e}> {e} </option>
          )
        })}
      </select>
      <select name='type' onChange={handleSort}>
        <option value=''> Tipo </option>
        {types && types.map(e => {
          return (
            <option key={e} value={e}> {e} </option>
          )
        })}
      </select>
      <select name='origin' onChange={handleSort}>
        <option value=''> Origen </option>
        {provinces && provinces.map(e => {
          return (
            <option key={e} value={e}> {e} </option>
          )
        })}
      </select>
    </div>
  )
}

export default Filters