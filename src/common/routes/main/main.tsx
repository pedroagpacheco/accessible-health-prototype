import { labels } from 'common/utils/labels'
import { Card } from 'common/components/card'
import { Header } from 'common/components/header'
import { faSyringe, faStethoscope, faHospital } from '@fortawesome/free-solid-svg-icons'

import './main.scss'

const Main = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="w-full h-full max-w-5xl m-auto flex justify-center items-center page-height-container">
        <Card
          title={labels.vaccine_card}
          description={labels.vaccine_card_description}
          icon={faSyringe}/>
        <Card
          title={labels.exams_card}
          description={labels.exams_card_description}
          icon={faStethoscope}/>
        <Card
          title={labels.edu_card}
          description={labels.edu_card_description}
          icon={faHospital}/>
      </div>
    </div>
  )
}

export default Main