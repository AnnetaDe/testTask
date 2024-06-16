import { RxFontStyle } from 'react-icons/rx';
import { SearchPanel } from './SearchPanel';
export const searchPanelStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? 'grey' : ' rgba(74, 86, 226, 0.10)',
    backgroundColor: '#F7F7FB',
    color: '#121417',
    borderCollapse: 'separate',
    width: '224px',
    borderRadius: '14px',
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#121417',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    padding: '8px',
    background: '#fff',
    borderCollapse: 'separate',
    borderRadius: '14px',
    scrollBehavior: 'smooth',
    fontSize: '16px',
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
    fontSize: '18px',
    fontWeight: '500',
  }),

  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: '14px 14px 14px 18px',
  }),

  cursor: 'pointer',
};

export const searchPanelFromToStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: '160px',
    backgroundColor: '#F7F7FB',
    borderCollapse: 'collapse',
    borderRadius: '14px',
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#121417',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    padding: '8px',
    background: '#fff',
    borderCollapse: 'separate',
    borderRadius: '14px',
    scrollBehavior: 'smooth',
    fontSize: '16px',
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
    fontSize: '18px',
    fontWeight: '500',
  }),

  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: '14px 14px 14px 18px',
  }),

  cursor: 'pointer',
};
