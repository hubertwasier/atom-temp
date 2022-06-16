import Link from 'next/link'

function Button({ buttonLabel }, { href }) {
  return (
    <Link href={href}>
      <a>{buttonLabel}</a>
    </Link>
  )
}

export default Button
