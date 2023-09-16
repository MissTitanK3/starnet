import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

type Props = {
  cardTitle?: string;
  cardDescription?: string;
  children?: React.ReactNode;
  footerChildren?: React.ReactNode;
  variant?: 'default' | 'noHover' | 'ghost' | null | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
};

const ShadCard = ({ cardTitle, cardDescription, children, footerChildren, variant, size }: Props) => {
  return (
    <Card size={size} variant={variant}>
      {cardTitle ||
        (cardDescription && (
          <CardHeader>
            {cardTitle && <CardTitle>{cardTitle}</CardTitle>}
            {cardDescription && <CardDescription>{cardDescription}</CardDescription>}
          </CardHeader>
        ))}
      <CardContent>{children}</CardContent>
      <CardFooter>{footerChildren}</CardFooter>
    </Card>
  );
};

export default ShadCard;
