interface CustomButtonProps {
  type: string;
  children: React.ReactNode;
}

interface FormInputProps {
  handleChange: (event: FormEvent) => void;
  label: string;
}

interface SignUpStates {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
