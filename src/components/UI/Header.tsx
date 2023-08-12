import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownSection,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import Logo from "./Logo";
import { MdDensityMedium } from "react-icons/md";

const options = [
  { label: "Features", value: "option-1" },
  { label: "Constumers", value: "option-2" },
  { label: "Integrations", value: "option-3" },
];

export default function App() {
  return (
    <Navbar className="bg-light dark:bg-dark flex items-center">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 items-center"
        justify="center"
      >
        {options.map((option) => (
          <NavbarItem key={option.value}>
            <Link color="foreground" href="#" className="dark:text-white">
              {option.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} color="primary" href="#" variant="bordered">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="hidden sm:flex"
            as={Link}
            color="primary"
            href="#"
            variant="solid"
          >
            Sign Up
          </Button>
        </NavbarItem>
        <div className="sm:hidden">
          <Dropdown type="listbox">
            <DropdownTrigger>
              <MdDensityMedium size={24} className="color-primary" />
            </DropdownTrigger>
            <DropdownMenu
              variant="shadow"
              className=" dark:bg-dark dark:text-light rounded-xl"
            >
              <DropdownSection showDivider>
                {options.map((option) => (
                  <DropdownItem key={option.value}>
                    <Link
                      color="foreground"
                      href="#"
                      className="dark:text-white"
                    >
                      {option.label}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownSection>
              <DropdownSection>
                <DropdownItem>
                  <Button
                    as={Link}
                    color="primary"
                    href="#"
                    fullWidth
                    variant="bordered"
                  >
                    Login
                  </Button>
                </DropdownItem>
                <DropdownItem>
                  <Button as={Link} color="primary" href="#" fullWidth>
                    Sign Up
                  </Button>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
