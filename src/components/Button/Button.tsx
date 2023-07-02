import styled, { css } from 'styled-components'
import { ButtonProps, StyledButtonProps } from './types'

const StyledButton = styled.button<StyledButtonProps>`
  text-align: center;
  font-size: 0.875rem;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  flex-shrink: 0;
  border-radius: 0.375rem;

  ${({ variant }) =>
    variant === 'default' &&
    css`
      color: #3f3f3f;
      box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.2);
      background: #e0e0e0;
      border: none;
      &:hover,
      &:focus {
        background: #aeaeae;
      }
    `}
  ${({ variant }) =>
    variant === 'outline' &&
    css`
      color: #3d5afe;
      border: 1px solid #3d5afe;
      background: transparent;
      &:hover,
      &:focus {
        background: rgba(41, 98, 255, 0.1);
      }
    `}
  ${({ variant }) =>
    variant === 'text' &&
    css`
      color: #3d5afe;
      background: transparent;
      border: none;
      &:hover,
      &:focus {
        background: rgba(41, 98, 255, 0.1);
      }
    `}

  ${({ disableShadow }) =>
    disableShadow &&
    css`
      box-shadow: none;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      // small size styles here
    `}
  ${({ size }) =>
    size === 'md' &&
    css`
      width: 5.0625rem;
      height: 2.25rem;
    `}
  ${({ size }) =>
    size === 'lg' &&
    css`
      // large size styles here
    `}

  ${({ color }) =>
    color === 'default' &&
    css`
      color: #3f3f3f;
      background: #e0e0e0;
      box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.2);
    `}
  ${({ color }) =>
    color === 'primary' &&
    css`
      // put primary color styles here
    `}
  ${({ color }) =>
    color === 'secondary' &&
    css`
      // put secondary color styles here
    `}
  ${({ color }) =>
    color === 'danger' &&
    css`
      // put danger color styles here
    `}

    ${({ disabled }) =>
    disabled &&
    css`
      color: #9e9e9e;
      background: #e0e0e0;
      box-shadow: none;
      cursor: not-allowed;
      &:hover,
      &:focus {
        color: #9e9e9e;
        background: #e0e0e0;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
`

export const Button = ({
  variant = 'default',
  disableShadow = false,
  size = 'md',
  color = '',
  // startIcon, // TODO: add icon feature
  // endIcon, // TODO: add icon feature
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      disableShadow={disableShadow}
      size={size}
      color={color}
      {...otherProps}>
      {children}
    </StyledButton>
  )
}
