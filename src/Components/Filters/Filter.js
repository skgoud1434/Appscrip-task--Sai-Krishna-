import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Filter.css'; 
export default function CustomAccordion() {
  return (
    <div>
       <div className='input'>
           <input type='checkbox' value="CUSTOMIZE"/>
           <label>
        CHECKBOX
      </label>
      </div>

      <Accordion className="customAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="customAccordionSummary"
        >
          <Typography className="customAccordionTitle">
            <span>IDEAL FOR</span>
            <span>All</span>
            </Typography>
        </AccordionSummary>
        <AccordionDetails className="customAccordionDetails">
          <Typography>
            This is the content of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="customAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="customAccordionSummary"
        >
          <Typography className="customAccordionTitle">
            <span>OCCASION FOR</span>
            <span>All</span>
            </Typography>
        </AccordionSummary>
        <AccordionDetails className="customAccordionDetails">
          <Typography>
            This is the content of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="customAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="customAccordionSummary"
        >
          <Typography className="customAccordionTitle">
            <span>WORK</span>
            <span>All</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="customAccordionDetails">
          <Typography>
            This is the content of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="customAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="customAccordionSummary"
        >
          <Typography className="customAccordionTitle">
            <span>FABRIC</span> 
            <span>All</span></Typography>
        </AccordionSummary>
        <AccordionDetails className="customAccordionDetails">
          <Typography>
            This is the content of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion className="customAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="customAccordionSummary"
        >
          <Typography className="customAccordionTitle"><span>SEGMENT</span>  
           <span>All</span></Typography>
        </AccordionSummary>
        <AccordionDetails className="customAccordionDetails">
          <Typography>
            This is the content of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>


        <Accordion className="customAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="customAccordionSummary"
        >
          <Typography className="customAccordionTitle"><span>RAW MATERIALS</span>   <span>All</span></Typography>
        </AccordionSummary>
        <AccordionDetails className="customAccordionDetails">
          <Typography>
            This is the content of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion className="customAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="customAccordionSummary"
        >
          <Typography className="customAccordionTitle"><span>PATTERN</span>   <span>All</span></Typography>
        </AccordionSummary>
        <AccordionDetails className="customAccordionDetails">
          <Typography>
            This is the content of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
