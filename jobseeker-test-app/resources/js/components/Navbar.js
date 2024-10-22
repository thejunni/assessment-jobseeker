import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const MainNavbar = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Job Portal</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/candidates">Candidates</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/vacancy">Vacancies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/applicants">Applicants</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default MainNavbar;
