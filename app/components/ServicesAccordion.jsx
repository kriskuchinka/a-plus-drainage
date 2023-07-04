// import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <>
      <h1>Our Service Area</h1>
      <h3>
        We service the following cities in parts of Clackamas, Columbia,
        Multnomah, Washington and Yamhill County:
      </h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>$50 Assessment Fee:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Aloha, Beaverton, Clackamas, Damascus, Gladstone, Gresham, Happy
            Valley, Hillsboro, King City, Lake Oswego, Milwaukie, North Plains,
            Oregon City, Portland, Sherwood, Tigard, Tualatin, West Linn,
            Wilsonville
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>$100 Assessment Fee:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Banks, Beavercreek, Boring, Canby, Cornelius, Fairview, Forest
            Grove, Newberg, Sandy, Sauvie Island, Scappoose, St. Helens,
            Troutdale, Wood Village
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
