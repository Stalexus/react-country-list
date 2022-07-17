import React from 'react'
import { Color } from '../types'

interface Iprops {
  color: Color;
}

export const Badge = ({ color }: Iprops) => {
  return (
    <div className={`badge bg-${color}`}>Badge</div>
  )
}
