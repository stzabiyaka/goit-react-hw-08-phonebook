import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { TextField } from '@mui/material';

export function Input({
  name,
  type,
  value,
  title,
  required,
  placeholder,
  onChange,
  error,
  minLength,
  maxLength,
}) {
  const id = nanoid();
  return (
    <TextField
      id={id}
      error={error}
      label={error ? 'error' : name}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      title={title}
      required={required}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      color="primary"
      sx={{
        mb: 2,
      }}
    />
  );
}

Input.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};
