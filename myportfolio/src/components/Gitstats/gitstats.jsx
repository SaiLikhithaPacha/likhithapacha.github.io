import React from 'react';
import ReactGitHubCalendar from 'react-ts-github-calendar';
import "./git.styles.css"

export const Stats= React.FC = () => {
  return (
      <>
    <h1 className="pt-3 text-center font-details pb-3">GIT COMMITS</h1>
  <div className="git" style={{background:"white",padding:"3px"}}><ReactGitHubCalendar userName="GopiChandana"  responsive={true}/></div><br/></>)
   
};