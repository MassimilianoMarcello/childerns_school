import Link from "next/link";
import "./PreFooter.css"

const PreFooter = () => {
  return (<>
  <div className='prefooter-container'>

    <h1 className='prefooter-title'>Want to support CS?</h1>
    <Link href="./">General Donations</Link>
    <Link href="./">Lorraain Ipsum</Link>
    <Link href="./">Program Sponsorship</Link>
    <Link href="./">Annual Dinner</Link>

  </div>
  </>
  )
}

export default PreFooter