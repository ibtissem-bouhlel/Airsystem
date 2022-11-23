import React, { useRef } from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
} from "cdbreact";
import Logo from "../../img/logo-red.png";
import LogoSmall from "../../small-logo.png";
import { NavLink, useParams } from "react-router-dom";

const Sidebar = () => {

    var slug = useParams();
    return (
        <div
            
            style={{ display: "flex", height: "100%", overflow: "scroll initial"}}
        >
            <CDBSidebar
                textColor="#fff"
                backgroundColor="#333"
            >
                <CDBSidebarHeader
                >
                    <a href="/home" className="text-decoration-none logo" style={{ color: "inherit" }}>
                        <img src={Logo}></img>

                    </a>
                    <a href="/home" className="text-decoration-none logo-small" style={{ color: "inherit" }}>
                        <img src={LogoSmall}></img>

                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink
                            
                            to={`dashboard/${slug.id}`}
                            className="activeClicked"
                        >
                            <CDBSidebarMenuItem
                                icon="table"
                            >
                                Dashboard
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            
                            to={`hours/${slug.id}`}
                            className="activeClicked"
                        >
                            <CDBSidebarMenuItem
                                icon="clock"
                            >
                                Hours
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            
                            to={`days/${slug.id}`}
                            className="activeClicked"
                        >
                            <CDBSidebarMenuItem
                                icon="calendar"
                            >
                                Days
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            

                            to={`month/${slug.id}`}

                            className="activeClicked"
                        >
                            <CDBSidebarMenuItem
                              icon="calendar"
                            >
                                Month
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            

                            to={`info/${slug.id}`}
                            className="activeClicked"
                        >
                            <CDBSidebarMenuItem
                                icon="book"

                            >
                                Sensors Info
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <a
                        
                            href="https://www.linkedin.com/company/arcangel-technologies/about/"
                            target="_blank"
                        >
                            <CDBSidebarMenuItem
                                icon="exclamation-circle"
                            >
                                Help
                            </CDBSidebarMenuItem>
                        </a>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarHeader

                    prefix={
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    }
                >
                    {/* <a href="/home" className="text-decoration-none" style={{ color: "inherit" }}>
                        <img src={Logo}></img>

                    </a> */}
                </CDBSidebarHeader>
            </CDBSidebar>
        </div>
    );
}

export default Sidebar;
