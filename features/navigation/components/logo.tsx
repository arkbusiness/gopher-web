import Link from "next/link";
import Image from "next/image";
import { APP_ROUTES } from "@/constants";

export function Logo() {
  return (
    <Link href={APP_ROUTES.root()}>
      <Image
        src="/logo.svg"
        alt="Ark Logo"
        width={150}
        height={51}
        className="h-[51px] w-[150px]"
      />
    </Link>
  );
}
