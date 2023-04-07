import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"

export const Beverage = () => (
  <div>
    <FontAwesomeIcon icon="eye" />
    Your <FontAwesomeIcon icon="eye" /> is hot and ready!
    <FontAwesomeIcon icon={Icons.faCopyright} size="6x" />
  </div>
)

