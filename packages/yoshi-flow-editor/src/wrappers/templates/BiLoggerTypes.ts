import t from './template';

type Opts = {
  visitor?: string | null;
  owner?: string | null;
};

export default t<Opts>`
  ${({ owner }) =>
    owner ? `export { default as OwnerBILogger } from '${owner}'` : ''}
  ${({ visitor }) =>
    visitor ? `export { default as VisitorBILogger } from '${visitor}'` : ''}
`;
