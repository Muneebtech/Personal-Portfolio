import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider>
    </SectionDivider>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({id,image,description,title,tags,source,visit}) => (
          <BlogCard key={id} onClick={()=> window.open(source,'_blank')}>
            <Img src={image}></Img>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr></Hr>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag,i) => (
                  <Tag key={i}>{tag }</Tag>
                ))}
              </TagList>
            </div>
           </BlogCard>
        ))}
    </GridContainer>
    <SectionDivider/>
  </Section>
);

export default Projects;
