import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <Container className="main-content">
      <h2 className="main-title">Services</h2>
      <div className="summary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ipsum
          tempore ratione amet reiciendis illo id quis qui. Consequuntur, optio?
        </p>
        <p>
          Provident cumque voluptate iusto repellendus debitis, molestiae
          exercitationem, totam similique voluptates accusamus fuga quis eius
          porro dolores modi odit excepturi?
        </p>
      </div>
      <Outlet/>
    </Container>
  );
};

export default Services;
