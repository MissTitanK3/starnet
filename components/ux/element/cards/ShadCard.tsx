'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';
import NeuPopover from '../custom/NeuPopover';

type Props = {
  cardTitle?: string | React.ReactNode;
  cardDescription?: string;
  children?: React.ReactNode;
  footerChildren?: React.ReactNode;
  variant?:
    | 'default'
    | 'solid'
    | 'noHover'
    | 'solidNoHover'
    | 'ghost'
    | 'withPointer'
    | 'underColor'
    | 'underColorWithPointer'
    | null
    | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  styleOverride?: React.CSSProperties;
  OnClicked?: () => void;
  OnRoute?: string;
};

const ShadCard = ({
  cardTitle,
  cardDescription,
  children,
  footerChildren,
  variant,
  size,
  styleOverride,
  OnClicked,
  OnRoute,
}: Props) => {
  return (
    <>
      {OnRoute !== undefined ? (
        <Link href={OnRoute}>
          <Card size={size} variant={variant} style={styleOverride} onClick={OnClicked}>
            {cardTitle && (
              <CardHeader>
                {cardTitle && (
                  <CardTitle
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                    }}>
                    {cardTitle}
                  </CardTitle>
                )}
                {cardDescription && <CardDescription>{cardDescription}</CardDescription>}
              </CardHeader>
            )}
            {children && <CardContent>{children}</CardContent>}
            {footerChildren && <CardFooter>{footerChildren}</CardFooter>}
          </Card>
        </Link>
      ) : (
        <Card size={size} variant={variant} style={styleOverride} onClick={OnClicked}>
          {cardTitle && (
            <CardHeader>
              {cardTitle && (
                <CardTitle
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}>
                  {cardTitle}
                </CardTitle>
              )}
              {cardDescription && <CardDescription>{cardDescription}</CardDescription>}
            </CardHeader>
          )}
          {children && <CardContent>{children}</CardContent>}
          {footerChildren && <CardFooter>{footerChildren}</CardFooter>}
        </Card>
      )}
    </>
  );
};

export default ShadCard;
