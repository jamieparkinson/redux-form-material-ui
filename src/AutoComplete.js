import AutoComplete from 'material-ui/AutoComplete'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  AutoComplete,
  ({ input: { onChange, value, ...inputProps }, searchText, handleSelect, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    searchText: searchText || value,
    onNewRequest: (selected) => {
      value = selected.value
      handleSelect(selected.object)
      handleSelect = null
      return onChange(selected.text)
    }
  })
)

