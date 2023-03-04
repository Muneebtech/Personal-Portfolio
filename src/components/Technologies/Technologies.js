import React from "react";
import { DiAws, DiDatabase, DiFirebase, DiNodejs, DiReact, DiZend } from "react-icons/di";
import { FaBitcoin, FaMask, FaWallet } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Design. Deploying sites on AWS, Aapanel, Cpanel & Vercel.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph />
          Experience with <br />
          React.js, Next.js & TypeScript
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph />
          Experience with <br />
          Node.js, Express.js & Nest,js
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph />
          Experience with <br />
          AWS
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaWallet size="3rem" />
        <ListContainer>
          <ListTitle>Web3</ListTitle>
          <ListParagraph />
          Experience with <br />
          Web3 Wallets
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
  </Section>
);

export default Technologies;
