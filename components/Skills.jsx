import React from 'react';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Node from '../public/assets/skills/node.png'
import Angular from '../public/assets/skills/angular-logo.png'
import Vue from '../public/assets/skills/vue-logo.png'
import Jquery from '../public/assets/skills/jquery.png'
import Html from '../public/assets/skills/html.png'
import Css from '../public/assets/skills/css.png'
import Php from '../public/assets/skills/php.png'
import Sql from '../public/assets/skills/sql.png'
import MySql from '../public/assets/skills/mysql.png'
import Mongo from '../public/assets/skills/mongo.png'
import Aws from '../public/assets/skills/aws.png'
import Item from './Item';

const Skills = () => {
  return (
    <div id='skills' className='w-full mt-5 p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <Item name="Javascript" image={Javascript}/>
          <Item name="React" image={ReactImg}/>
          <Item name="Firebase" image={Firebase}/>
          <Item name="Next" image={NextJS}/>
          <Item name="Node" image={Node}/>
          <Item name="Angular" image={Angular}/>
          <Item name="Vue" image={Vue}/>
          <Item name="JQuery" image={Jquery}/>
          <Item name="HTML" image={Html}/>
          <Item name="CSS" image={Css}/>
          <Item name="PHP" image={Php}/>
          <Item name="SQL" image={Sql}/>
          <Item name="MySQL" image={MySql}/>
          <Item name="Mongo" image={Mongo}/>
          <Item name="AWS" image={Aws}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
