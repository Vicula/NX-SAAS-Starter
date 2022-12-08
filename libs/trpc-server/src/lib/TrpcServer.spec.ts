import { trpcServer } from './TrpcServer';

describe('trpcServer', () => {
  it('should work', () => {
    expect(trpcServer()).toEqual('trpc-server');
  });
});
