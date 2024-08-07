export const searchPanelStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? 'grey' : ' #F7F7FB',
    backgroundColor: '#F7F7FB',
    color: '#121417',
    borderCollapse: 'separate',
    width: '177px',
    borderRadius: '14px',
    fontSize: '12px',
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#121417',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    padding: '4px',
    background: '#fff',
    borderCollapse: 'separate',
    borderRadius: '14px',
    scrollBehavior: 'smooth',
    fontSize: '14px',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? '#ffffff1a' : 'transparent',
    color: state.isSelected ? '#121417' : '#12141733',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    color: '#121417',
    fontSize: '14px',
    fontWeight: '500',
  }),

  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: '0.5rem 1rem',
  }),

  cursor: 'pointer',
};

export const from = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? 'grey' : ' #F7F7FB',

    width: '180px',
    backgroundColor: '#F7F7FB',
    borderCollapse: 'collapse',
    borderRadius: '14px 0 0 14px',
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#121417',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    padding: '4px',
    background: '#fff',
    borderCollapse: 'separate',
    borderRadius: '14px',
    scrollBehavior: 'smooth',
    fontSize: '14px',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? '#ffffff1a' : 'transparent',
    color: state.isSelected ? '#121417' : '#12141733',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    RxFontStyle: state.isSelected ? 'bold' : 'normal',
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    color: '#121417',
    fontSize: '14px',
    fontWeight: '500',
  }),

  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: '0.5em 1em',
  }),

  cursor: 'pointer',
};
export const to = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? 'grey' : ' #F7F7FB',
    borderLeft: '1px solid rgba(138, 138, 137, 0.20)',

    width: '160px',
    backgroundColor: '#F7F7FB',
    borderRadius: '0 14px 14px 0',
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#121417',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    padding: '8px',
    background: '#fff',
    borderCollapse: 'collapse',
    borderRadius: '14px',
    scrollBehavior: 'smooth',
    fontSize: '14px',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? '#ffffff1a' : 'transparent',
    color: state.isSelected ? '#121417' : '#12141733',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    RxFontStyle: state.isSelected ? 'bold' : 'normal',
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    color: '#121417',
    fontSize: '14px',
    fontWeight: '500',
  }),

  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: '0.5em 1em',
  }),

  cursor: 'pointer',
};
