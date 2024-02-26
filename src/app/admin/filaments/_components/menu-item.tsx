"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, forwardRef } from "react";

type MenuItemProps = Readonly<ComponentProps<typeof Link>>;

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>((props, ref) => {
  const pathname = usePathname();
  const { className, href, ...rest } = props;

  const hrefPathName = href instanceof URL ? href.pathname : (href as string);

  const isActive = pathname.startsWith(hrefPathName);

  return (
    <Link
      {...rest}
      ref={ref}
      href={href}
      className={clsx(
        className,
        "hover:bg-base-content/10 border-r-4 p-2 transition-colors",
        isActive ? "border-r-base-content" : "border-r-base-content/30",
      )}
    />
  );
});

MenuItem.displayName = "MenuItem";

export default MenuItem;
