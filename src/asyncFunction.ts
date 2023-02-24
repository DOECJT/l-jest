export async function getNameAfterOneSecond(name) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return name
}
