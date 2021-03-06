import React from "react";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Footer() {
  function renderTooltip(props) {
    console.log(props);
    return (
      <Tooltip id="button-tooltip" {...props}>
        <span style={{ wordWrap: "normal" }}>lowelljacobs@mail.com</span>
      </Tooltip>
    );
  }

  return (
    <>
      <Container fluid className="bg-danger">
        <a className="mr-4" href="https://www.linkedin.com/in/lowell-jacobs">
          <i class="bi bi-linkedin fs-2"></i>
        </a>
        <a href="https://www.github.com/lowell1">
          <i class="bi bi-github fs-2"></i>
        </a>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 40000 }}
          overlay={renderTooltip}
        >
          <a href="mailto:lowelljacobs@mail.com">
            <i class="bi bi-envelope fs-2"></i>
          </a>
        </OverlayTrigger>
      </Container>
    </>
  );
}
