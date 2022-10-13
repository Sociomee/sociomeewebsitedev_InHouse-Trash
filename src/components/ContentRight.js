import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";
import Birthday from './left-right-components/Birthday';
import Gallery from './left-right-components/Gallery';
import Event from './left-right-components/Event';
import TrendingHashtags from './left-right-components/TrendingHashtags';
import GroupSuggesion from './left-right-components/GroupSuggesion';

export  default function ContentRight() {  

  return (
    <>
    <div className="content-right">
      <Birthday></Birthday>
      <Gallery></Gallery>
      <Event></Event>
      <GroupSuggesion></GroupSuggesion>
      <TrendingHashtags></TrendingHashtags>
    </div>
    </>
  );
} 
