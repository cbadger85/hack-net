import styled from 'styled-components';

import colors from '../utils/colors';

const Layout = styled.div`
  width: 1200px;
  min-width: 1200px;
  height: 745px;
  /* min-height: 750px; */
  margin: auto;
  box-sizing: border-box;
  border: 1px solid ${colors.blue};
  color: ${colors.blue};
  background: ${colors.darkPurple};
`;

export default Layout;
