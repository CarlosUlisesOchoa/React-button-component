import styled, { css } from 'styled-components'
import { ButtonProps, StyledButtonProps } from './types'

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 0.875rem;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  flex-shrink: 0;
  border-radius: 0.375rem;

  width: 5.0625rem;
  height: 2.25rem;
  box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.2);
  color: #3f3f3f;
  background: #e0e0e0;
  border: none;

  &:hover,
  &.hover,
  &:focus,
  &.focus {
    background: #aeaeae;
  }
  &:disabled,
  &.disabled {
    opacity: 0.65;
    color: #9e9e9e;
    background: #e0e0e0;
    box-shadow: none;
    cursor: not-allowed;
  }

  ${({ $variant }) =>
    $variant === 'default' &&
    css`
      // default styles are already applied
    `}
  ${({ $variant }) =>
    $variant === 'outline' &&
    css`
      color: #3d5afe;
      border: 1px solid #3d5afe;
      box-shadow: none;
      background: transparent;
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: rgba(41, 98, 255, 0.1);
      }
      &:disabled,
      &.disabled {
        color: #3d5afe;
        background: transparent;
      }
    `}
  ${({ $variant }) =>
    $variant === 'text' &&
    css`
      color: #3d5afe;
      background: transparent;
      border: none;
      box-shadow: none;
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: rgba(41, 98, 255, 0.1);
      }
      &:disabled,
      &.disabled {
        color: #9e9e9e;
        background: transparent;
        box-shadow: none;
      }
    `}

  ${({ $disableShadow }) =>
    $disableShadow &&
    css`
      box-shadow: none;
      color: #ffffff;
      background: #3d5afe;
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: #0039cb;
      }
      &:disabled,
      &.disabled {
        box-shadow: none;
        color: #ffffff;
        background: #3d5afe;
      }
    `}

${({ $startIcon }) =>
    $startIcon &&
    css`
      width: 6.5625rem;
      color: #ffffff;
      background: #3d5afe;
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: #0039cb;
      }
      &:disabled,
      &.disabled {
        color: #ffffff;
        background: #3d5afe;
      }
    `}
    ${({ $endIcon }) =>
    $endIcon &&
    css`
      width: 6.5625rem;
      color: #ffffff;
      background: #3d5afe;
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: #0039cb;
      }
      &:disabled,
      &.disabled {
        color: #ffffff;
        background: #3d5afe;
      }
    `}
  ${({ $size }) =>
    $size === 'sm' &&
    css`
      width: 4.5625rem;
      height: 2rem;
      color: #ffffff;
      background: #3d5afe;
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: #0039cb;
      }
      &:disabled,
      &.disabled {
        color: #ffffff;
        background: #3d5afe;
      }
    `}
  ${({ $size }) =>
    $size === 'md' &&
    css`
      // width and height are already applied
      color: #ffffff;
      background: #3d5afe;
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: #0039cb;
      }
      &:disabled,
      &.disabled {
        color: #ffffff;
        background: #3d5afe;
      }
    `}
  ${({ $size }) =>
    $size === 'lg' &&
    css`
      width: 5.8125rem;
      height: 2.625rem;
      color: #ffffff;
      background: #3d5afe;
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: #0039cb;
      }
      &:disabled,
      &.disabled {
        color: #ffffff;
        background: #3d5afe;
      }
    `}

  ${({ $color }) =>
    $color === 'default' &&
    css`
      // default styles are already applied
    `}
  ${({ $color }) =>
    $color === 'primary' &&
    css`
      color: #ffffff;
      background: #3d5afe;
      box-shadow: 0px 2px 3px 0px rgba(41, 98, 255, 0.2);
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: #0039cb;
      }
      &:disabled,
      &.disabled {
        color: #ffffff;
        background: #3d5afe;
      }
    `}
  ${({ $color }) =>
    $color === 'secondary' &&
    css`
      color: #ffffff;
      background: #455a64;
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: #1c313a;
      }
      &:disabled,
      &.disabled {
        color: #ffffff;
        background: #455a64;
      }
    `}
  ${({ $color }) =>
    $color === 'danger' &&
    css`
      color: #ffffff;
      background: #d32f2f;
      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background: #9a0007;
      }
      &:disabled,
      &.disabled {
        color: #ffffff;
        background: #d32f2f;
      }
    `}
`

export const Button = ({
  variant,
  disableShadow,
  size,
  color,
  startIcon,
  endIcon,
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $disableShadow={disableShadow}
      $size={size}
      $color={color}
      $startIcon={startIcon}
      $endIcon={endIcon}
      {...otherProps}>
      {startIcon && (
        <span
          style={{ fontSize: '1rem', marginRight: '0.5rem' }}
          className='material-symbols-outlined'>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span
          style={{ fontSize: '1rem', marginLeft: '0.5rem' }}
          className='material-symbols-outlined'>
          {endIcon}
        </span>
      )}
    </StyledButton>
  )
}
