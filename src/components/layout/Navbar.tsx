"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

type DropdownName = "features" | "resources" | null;

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] =
    useState<DropdownName>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const closeMenus = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (name: Exclude<DropdownName, null>) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">

      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenus}
            className="flex items-center gap-3"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-xl font-bold text-white shadow-lg shadow-primary/20">
              F
            </span>

            <span className="text-xl font-bold tracking-tight">
              FlowSync
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            {/* Features Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("features")}
                aria-expanded={activeDropdown === "features"}
                aria-controls="features-menu"
                className="flex items-center gap-2 text-sm font-medium text-muted transition hover:text-white"
              >
                Features
                <span aria-hidden="true">⌄</span>
              </button>

              {activeDropdown === "features" && (
                <div
                  id="features-menu"
                  className="absolute left-0 top-full mt-4 w-64 rounded-xl border border-border bg-surface p-3 shadow-2xl"
                >
                  <Link
                    href="/features"
                    onClick={closeMenus}
                    className="block rounded-lg p-3 text-sm text-white hover:bg-surface-light"
                  >
                    All Features
                    <span className="mt-1 block text-xs text-muted">
                      Explore everything FlowSync offers
                    </span>
                  </Link>

                  <Link
                    href="/features#collaboration"
                    onClick={closeMenus}
                    className="block rounded-lg p-3 text-sm text-white hover:bg-surface-light"
                  >
                    Team Collaboration
                  </Link>

                  <Link
                    href="/features#analytics"
                    onClick={closeMenus}
                    className="block rounded-lg p-3 text-sm text-white hover:bg-surface-light"
                  >
                    Analytics
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-sm font-medium text-muted transition hover:text-white"
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("resources")}
                aria-expanded={activeDropdown === "resources"}
                aria-controls="resources-menu"
                className="flex items-center gap-2 text-sm font-medium text-muted transition hover:text-white"
              >
                Resources
                <span aria-hidden="true">⌄</span>
              </button>

              {activeDropdown === "resources" && (
                <div
                  id="resources-menu"
                  className="absolute left-0 top-full mt-4 w-52 rounded-xl border border-border bg-surface p-3 shadow-2xl"
                >
                  <Link
                    href="/blog"
                    onClick={closeMenus}
                    className="block rounded-lg p-3 text-sm text-white hover:bg-surface-light"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/about"
                    onClick={closeMenus}
                    className="block rounded-lg p-3 text-sm text-white hover:bg-surface-light"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/contact"
                    onClick={closeMenus}
                    className="block rounded-lg p-3 text-sm text-white hover:bg-surface-light"
                  >
                    Help & Contact
                  </Link>
                </div>
              )}
            </div>

          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-5 md:flex">

            <Link
              href="/contact"
              className="text-sm font-medium text-muted transition hover:text-white"
            >
              Talk to Sales
            </Link>

            <Link href="/pricing">
              <Button size="md">
                Get Started
              </Button>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((current) => !current)
            }
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-border md:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-white transition ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-white transition ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-white transition ${
                isMobileMenuOpen
                  ? "-translate-y-2 -rotate-45"
                  : ""
              }`}
            />
          </button>

        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border py-5 md:hidden"
          >
            <div className="flex flex-col gap-2">

              <button
                type="button"
                onClick={() => toggleDropdown("features")}
                aria-expanded={activeDropdown === "features"}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-white hover:bg-surface"
              >
                Features
                <span aria-hidden="true">⌄</span>
              </button>

              {activeDropdown === "features" && (
                <div className="ml-4 flex flex-col border-l border-border pl-4">
                  <Link
                    href="/features"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-3 text-sm text-muted hover:text-white"
                  >
                    All Features
                  </Link>

                  <Link
                    href="/features#collaboration"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-3 text-sm text-muted hover:text-white"
                  >
                    Team Collaboration
                  </Link>

                  <Link
                    href="/features#analytics"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-3 text-sm text-muted hover:text-white"
                  >
                    Analytics
                  </Link>
                </div>
              )}

              <Link
                href="/pricing"
                onClick={closeMenus}
                className="rounded-lg px-4 py-3 text-sm font-medium text-white hover:bg-surface"
              >
                Pricing
              </Link>

              <button
                type="button"
                onClick={() => toggleDropdown("resources")}
                aria-expanded={activeDropdown === "resources"}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-white hover:bg-surface"
              >
                Resources
                <span aria-hidden="true">⌄</span>
              </button>

              {activeDropdown === "resources" && (
                <div className="ml-4 flex flex-col border-l border-border pl-4">
                  <Link
                    href="/blog"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-3 text-sm text-muted hover:text-white"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/about"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-3 text-sm text-muted hover:text-white"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/contact"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-3 text-sm text-muted hover:text-white"
                  >
                    Contact
                  </Link>
                </div>
              )}

              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-5">
                <Link
                  href="/contact"
                  onClick={closeMenus}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted"
                >
                  Talk to Sales
                </Link>

                <Link
                  href="/pricing"
                  onClick={closeMenus}
                  className="px-4"
                >
                  <Button size="lg" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        )}

      </Container>
    </header>
  );
}