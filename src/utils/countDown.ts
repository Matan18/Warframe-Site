export function countDown(date: string) {
  const expiry = new Date(date);
  const now = new Date(Date.now());
  const diff = new Date(
    expiry.getFullYear() - now.getFullYear(),
    expiry.getMonth() - now.getMonth(),
    expiry.getDate() - now.getDate(),
    expiry.getHours() - now.getHours(),
    expiry.getMinutes() - now.getMinutes(),
    expiry.getSeconds() - now.getSeconds()
  )
  const asString = `${diff.getHours()}h${diff.getMinutes()}m${diff.getSeconds()}s`
  return asString
}
