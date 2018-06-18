// Global import
import styled from 'styled-components';

export const StyledRadio: any = styled.div``;

export const ItemWrapper: any = styled.div`
  display: flex;
  ${({ isVertical }: any): string =>
    isVertical ? 'flex-direction: column;' : 'flex-direction: row'};
`;
