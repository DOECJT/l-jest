import { getNameAfterOneSecond } from './asyncFunction'

test('some test', async () => {
  const name = await getNameAfterOneSecond('jack')
  expect(name).toBe('jack')
})
