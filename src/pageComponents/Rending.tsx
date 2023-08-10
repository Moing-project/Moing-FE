import { useRef } from 'react'
import Section1 from '../layoutComponents/Rending/Section1'
import Section2 from '../layoutComponents/Rending/Section2'
import Section3 from '../layoutComponents/Rending/Section3'

export default function Rending() {
  
  // 각 세션별로 보여주기
  return (
        <div>
          <Section1/>
          <Section2/>
          <Section3/>
          <section>
          </section>
        </div>
  )
}
