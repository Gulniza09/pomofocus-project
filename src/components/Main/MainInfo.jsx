import React from 'react'
import styled from 'styled-components'

const MainInfo = () => {
   return (
      <WrapperInfo>
         <h1>An online Pomodoro Timer to boost your productivity</h1>
         <Questions>
            <h2>What is Pomofocus?</h2>
            <hr />
            <p>
               Pomofocus is a customizable pomodoro timer that works on desktop
               & mobile browser. The aim of this app is to help you focus on any
               task you are working on, such as study, writing, or coding. This
               app is inspired by <i>Pomodoro Technique</i> which is a time
               management method developed by Francesco Cirillo.
            </p>
            <h2>What is Pomodoro Technique?</h2>
            <hr />
            <p>
               The Pomodoro Technique is created by Francesco Cirillo for a more
               productive way to work and study. The technique uses a timer to
               break down work into intervals, traditionally 25 minutes in
               length, separated by short breaks. Each interval is known as a
               pomodoro, from the Italian word for 'tomato', after the
               tomato-shaped kitchen timer that Cirillo used as a university
               student. - <i>Wikipedia</i>
            </p>
            <h2>How to use the Pomodoro Timer?</h2>
            <hr />
            <ol>
               <li>Add tasks to work on today</li>
               <li>
                  Set estimate pomodoros (1 = 25min of work) for each tasks
               </li>
               <li>Start timer and focus on the task for 25 minutes</li>
               <li>Take a break for 5 minutes when the alarm ring</li>
               <li>Iterate 3-5 until you finish the tasks</li>
            </ol>
            <h2>Features</h2>
            <hr />
            <ul>
               <li> Responsive design that works with desktop and mobile</li>
               <li>
                  Color transition to switch moods between work time and rest
                  time
               </li>
               <li>Audio notification at the end of a timer period</li>
               <li>Customizable timer intervals to suit your preference</li>
            </ul>
            <h2>Download App</h2>
            <hr />
            <li>
               <i>For macOS</i> (zip file)
            </li>
            <li>
               <i> For Windows</i> (exe file)
            </li>
         </Questions>
      </WrapperInfo>
   )
}
const WrapperInfo = styled.div`
   margin-top: 30px;
   color: hsl(357, 50%, 22%);
   height: 1100px;
   h1 {
      padding: 0 12px;
   }
`
const Questions = styled.div`
   hr {
      height: 6px;
      width: 34px;
      background-color: #f05b56;
   }
   i {
      color: rgb(217 85 80);
      font-size: 18px;
   }
   h2 {
      margin-top: 1.8rem;
      margin-bottom: 0em;
      padding-bottom: 10px;
   }
   p {
      line-height: 1.6em;
      margin-top: 15px;
   }
   ul,
   ol {
      padding: 0 0 0 15px;
      margin-top: 15px;
   }
`
export default MainInfo
