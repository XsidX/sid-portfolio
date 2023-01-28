import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiRedux, SiTailwindcss, SiRubyonrails, SiPostgresql, SiMongodb, SiAwsamplify } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import skills from '../../data/skills';

const icons = {
  React: FaReact,
  Redux: SiRedux,
  Nextjs: TbBrandNextjs,
  Tailwind: SiTailwindcss,
  GraphQL: GrGraphQl,
  'Ruby on Rails': SiRubyonrails,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Nodejs: FaNodeJs,
  'AWS Amplify, Cognito, AppSync, S3, Lambda, DynamoDB...': SiAwsamplify,
};

const Skills = () => (
  <div className="flex flex-col flex-wrap h-32 gap-2 mt-6 overflow-x-scroll">
    {
      skills.map((skill) => {
        const Icon = icons[skill.name];
        return (
          <div key={skill.name} className="text-sm font-semibold text-teal-900 dark:text-teal-400 transition duration-500 ease-in-out">
            <div className="flex gap-2">
              <Icon className="text-lg" />
              <h3 className="">
                {skill.name}
              </h3>
            </div>
          </div>
        );
      })
    }
  </div>
);

export default Skills;
