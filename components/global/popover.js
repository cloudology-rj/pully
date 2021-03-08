import { useRef } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PreTitle, Body } from '@/components/global/Text';

import useOutsideClick from '../../hooks/useOutsideClick';

const SearchHistories = styled.ul`
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 20;
  list-style: none;
  padding: 24px;
  background: ${(props) => props.theme.colors.cloud};
  width: 300px;
  box-shadow: 0px 4px 8px -4px rgba(14, 19, 44, 0.16),
    0px 1px 1px rgba(14, 19, 44, 0.04);
  border-radius: 8px;
  display: grid;
  gap: 16px;
  max-height: 220px;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: block;
  }
`;

const SearchHistoriesItem = styled(Body)`
  color: ${(props) => props.theme.colors.subtleText};

  &:first-child {
    margin-top: 7px;
  }
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const popover = ({ title, list, onSetPopup }) => {
  const popup = useRef(null);
  useOutsideClick(popup, onSetPopup);

  const router = useRouter();

  const handleClick = (selected) => {
    onSetPopup();
    router.push(`/search/${selected}`);
  };

  return (
    <SearchHistories ref={popup}>
      <PreTitle>{title}</PreTitle>

      {list.map((name, i) => (
        <SearchHistoriesItem
          key={`${name} ${i}`}
          onClick={() => handleClick(name)}
        >
          {name}
        </SearchHistoriesItem>
      ))}
    </SearchHistories>
  );
};

popover.propTypes = {};

export default popover;
