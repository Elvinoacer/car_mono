import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-surface-container-lowest text-on-primary dark:text-on-surface full-width border-t border-outline-variant dark:border-outline">
      <div className="flex flex-col items-center w-full py-section-padding px-gutter max-w-container-max mx-auto gap-12">
        <h2 className="font-headline-md text-headline-md text-on-primary dark:text-on-surface">
          MONOLITH
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Link
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors duration-300 cursor-pointer"
            href="/legal"
          >
            Privacy Policy
          </Link>
          <Link
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors duration-300 cursor-pointer"
            href="/legal"
          >
            Terms of Service
          </Link>
          <Link
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors duration-300 cursor-pointer"
            href="/legal"
          >
            Cookie Policy
          </Link>
          <Link
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors duration-300 cursor-pointer"
            href="/legal"
          >
            Corporate
          </Link>
          <Link
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors duration-300 cursor-pointer"
            href="/reserve/contact"
          >
            Contact
          </Link>
        </div>
        <p className="font-body-md text-body-md text-on-primary-container dark:text-on-surface-variant">
          © 2024 MONOLITH AUTOMOTIVE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
