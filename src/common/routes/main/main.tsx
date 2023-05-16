import { useNavigate } from 'react-router-dom'
import { faSyringe, faStethoscope, faHospital } from '@fortawesome/free-solid-svg-icons'
import { labels } from 'common/utils/labels'
import { Card } from 'common/components/card'
import { Header } from 'common/components/header'

import './main.scss'

const Main = () => {
  const navigate = useNavigate()

  const handleCardClick = (path: string) => {
    navigate(path)
  }

  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="w-full h-full max-w-5xl m-auto flex justify-center items-center page-height-container">
        <Card
          title={labels.vaccine_card}
          description={labels.vaccine_card_description}
          icon={faSyringe}
          onClick={() => handleCardClick('medicines')}/>
        <Card
          title={labels.exams_card}
          description={labels.exams_card_description}
          icon={faStethoscope}
          onClick={() => handleCardClick('exams')}/>
        <Card
          title={labels.edu_card}
          description={labels.edu_card_description}
          icon={faHospital}
          onClick={() => handleCardClick('edu')}/>
      </div>
    </div>
  )
}

export default Main
