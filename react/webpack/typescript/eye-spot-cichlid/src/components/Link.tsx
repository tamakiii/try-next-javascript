import * as React from 'react'
import * as PropTypes from 'prop-types'

const Link:any = (event:any) => (
  <button
     onClick={event.onClick}
     disabled={event.active}
     style={{
         marginLeft: '4px',
     }}
  >
    {event.children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link