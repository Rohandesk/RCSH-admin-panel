// not imported anywhere other than about page
// multi select component select2
// React imports
import { forwardRef } from 'react'

// MUI imports
import Paper from '@mui/material/Paper'
import Autocomplete from '@mui/material/Autocomplete'

const CustomAutocomplete = forwardRef((props, ref) => {
  return (
    // eslint-disable-next-line lines-around-comment
    <Autocomplete
      {...props}
      ref={ref}
      slots={{
        paper: props => <Paper {...props} />
      }}
    />
  )
})

export default CustomAutocomplete
