import  Link  from "next/link"

export function Footer() {

  return (
  <footer className="text-center pb-4 pt-4">
    <Link href='https://xkcd.com' target='_blank' rel="noopener noreferrer" >
    All comics By xkcd 
    </Link>
  </footer>
  )

}