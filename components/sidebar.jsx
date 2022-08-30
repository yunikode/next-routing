import Link from "next/link";
import { useRouter } from "next/router";
import { NavLink } from "@mantine/core";

const links = [
  { location: "loka1", post: "bost1" },
  { location: "loka1", post: "bost2" },
  { location: "loka2", post: "bost1" },
];

function Sidebar() {
  const router = useRouter();
  return (
    <>
      <Link href="/home">
        <NavLink
          component="a"
          label="Home"
          active={router.asPath === "/home"}
        />
      </Link>
      {links.map((i, index) => (
        <Link key={index} href={`/${i.location}/${i.post}`} passHref>
          
          <NavLink
            component="a"
            label={`/${i.location}/${i.post}`}
            active={router.asPath === `/${i.location}/${i.post}`}
          />
        </Link>
      ))}
      
    </>
  );
}

export default Sidebar