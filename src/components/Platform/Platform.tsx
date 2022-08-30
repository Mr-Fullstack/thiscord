import React from 'react'
import { ChildrenProps } from '@/types';
import platform from '@/helpers/platform';

interface PlatformProps extends ChildrenProps {
  rules: string
}
export function Platform({ rules, children }: PlatformProps) {
  return (
    <div>{platform.OS.name?.toLowerCase().includes(rules.toLowerCase()) && children} </div>
  )
}
