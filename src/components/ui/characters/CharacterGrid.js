import React from 'react'
import CharacterItems from './characteritem'
import Spinner from '../../spinner.js'
const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
      <Spinner />
    ) : (
      <section className='cards'>
        {items.map((item) => (
          <CharacterItems key={item.char_id} item={item}></CharacterItems>
        ))}
      </section>
    )
  }
export default CharacterGrid
