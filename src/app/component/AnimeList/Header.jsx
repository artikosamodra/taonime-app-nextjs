import Link from "next/link";

const Header = ({ title, linkTitle, linkHref}) => {
    return(
        <div className="flex justify-between pb-4">
          <h1 className="font-bold text-2xl">{title}</h1>
          <Link href={linkHref} className="font-bold underline text-blue-400">
            {linkTitle}
          </Link>
        </div>
    )
}

export default Header;