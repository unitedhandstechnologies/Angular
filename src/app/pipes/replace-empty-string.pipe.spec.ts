import { ReplaceEmptyStringPipe } from './replace-empty-string.pipe';

describe('ReplaceEmptyStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ReplaceEmptyStringPipe();
    expect(pipe).toBeTruthy();
  });
});
