export type ButtonProps = {
  variant?: 'default' | 'outlined' | 'text'
  disableShadow?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'danger'
  children?: React.ReactNode
}

export type StyledButtonProps = {
  variant?: 'default' | 'outlined' | 'text'
  disableShadow?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'danger'
}
