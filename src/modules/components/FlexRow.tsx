import React from 'react';
import styled from 'styled-components';

interface RowProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  align?: 'normal' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
  justify?: | 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end' | 'normal';
  gutter?: number;
}

const DivWrapper = styled.div<any>`
  display: flex;
  flex-direction: row;
  align-items: ${({align}) => align || 'center'};
  justify-content: ${({justify}) => justify || 'normal'};
`;

export default function FlexRow({
  children, className, style, align = 'center', gutter, justify, ...props
}: RowProps) {
  return (<DivWrapper
          className={className}
          style={style}
          align={align}
          justify={justify}
          gutter={gutter}
          {...props}
      >
        {React.Children.map(children, (child: any, index: number) => {
          if (!child) return;
          return React.cloneElement(child, {
            style: !gutter || index === 0
                ? {...child.props.style}
                : {...child.props.style, marginLeft: gutter},
          });
        })}
      </DivWrapper>);
}
