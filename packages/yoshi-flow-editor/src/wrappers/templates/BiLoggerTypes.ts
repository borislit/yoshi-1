import { BiConfig } from 'yoshi-flow-editor-runtime/build/constants';
import t from './template';

type Opts = {
  bi: BiConfig;
};

export default t<Opts>`
  ${({ bi }) =>
    bi.owner ? `export { default as OwnerBILogger } from '${bi.owner}'` : ''}
  ${({ bi }) =>
    bi.visitor
      ? `export { default as VisitorBILogger } from '${bi.visitor}'`
      : ''}
`;
