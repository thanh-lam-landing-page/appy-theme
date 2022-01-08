import NextLink from "next/link";

function CustomLink({ to, children, ...props }) {
  return (
    <NextLink passHref href={to}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}

export default CustomLink;
