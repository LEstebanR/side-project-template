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

export function Header(): React.ReactElement {
  return (
    <Navbar className="bg-light dark:bg-dark flex items-center">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 items-center"
        justify="center"
      >
        {options.map((option, index) => (
          <NavbarItem key={index}>
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
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly size="md" variant="bordered">
                <MdDensityMedium
                  size={24}
                  className="dark:text-white text-black"
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              variant="shadow"
              className="dark:bg-dark dark:text-light rounded-xl"
              aria-label="Dropdown menu"
            >
              <DropdownSection showDivider>
                {options.map((option, index) => (
                  <DropdownItem textValue={option.label} key={option.label}>
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
                <DropdownItem textValue="Login button">
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
                <DropdownItem textValue="Sign Up button">
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
