import Image from "next/image";

export const FooterBrand = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Image src="/footer-logo.svg" alt="Gopher" width={200} height={51} />
      </div>
      {/* <p className="font-medium text-white/77">
        Descriptive line about what your company does.
      </p> */}
    </div>
  );
};
