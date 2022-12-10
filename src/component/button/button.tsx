interface IProps {
  onSubmit: any;
  onChange: any;
  value: string;
  placeholder: string;
  maxLength: number;
  buttonText: string;
}

Button.defaultProps = {
  placeholder: 'title',
  maxLength: 30,
  buttonText: 'add',
};

export function Button({
  onSubmit,
  onChange,
  value,
  placeholder,
  maxLength,
  buttonText,
}: IProps) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
      />
      <input type='submit' value={buttonText} />
    </form>
  );
}
