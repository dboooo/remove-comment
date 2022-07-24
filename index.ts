export function rmComment(str: string): string {
  let x = str.replace(/(\/\/).*\n/g, '')
  return x.replace(/(\/\*+)[\s\S]*(\*\/)/g, '')
}
