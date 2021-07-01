import React from 'react';
import styled from 'styled-components';

export interface FlexColProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  align?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'normal';
  justify?: | 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end';
  gutter?: number;
}

const DivWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align || 'center'};
  justify-content: ${({justify}) => justify || 'normal'};
`;

export default function FlexCol({
  children, className, style, align = 'center', justify, gutter, ...props
}: FlexColProps) {
  return (<DivWrapper
          className={className}
          style={{
            ...style,
          }}
          align={align}
          gutter={gutter}
          justify={justify}
          {...props}
      >
        {React.Children.map(children, (child: any, index: number) => {
          if (!child) return;
          return React.cloneElement(child, {
            style: !gutter || index === 0
                ? {...child.props.style}
                : {...child.props.style, marginTop: gutter},
          });
        })}
      </DivWrapper>);
}
