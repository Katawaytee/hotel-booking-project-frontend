import Link from 'next/link';

export default function TopMenuItem( {title,pageRef,className} : {title:string,pageRef:string,className?:string} ) {
  return(
    <>
      {
      className?
        <Link className={'w-fit mx-3 text-center text-[10pt] text-black my-auto font-[Verdana] '+ className} href={pageRef}>
          {title}
        </Link>
        :
        <Link className={'w-fit mx-3 text-center text-[10pt] text-black my-auto font-[Verdana] '} href={pageRef}>
          {title}
        </Link>

    }
    </>
  );
}