import { useState, forwardRef } from 'react'

import {
  Tab,
  Tabs,
  TabsList,
  TabPanel,
  Modal
} from '@mui/base'
import classnames from 'classnames'
import {
  exams,
  appointments,
  specialties
} from 'common/utils/constants'
import { labels } from 'common/utils/labels'
import { Header } from 'common/components/header'
import { ListItem } from 'common/components/listItem'

import './exams.scss'

const Exams = () => {
  const [appointmentList, setAppointmentList] = useState(appointments)
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false)

  const handleAddAppointment = (event) => {
    event.preventDefault()

    const medicineName = event.target.medicineName.value
    const medicineFrequency = event.target.medicineFrequency.value
    const medicineDuration = event.target.medicineDuration.value

    setAppointmentList(prevAppointmentList => {
      return [...prevAppointmentList, {
        title: medicineName,
        subtitle: medicineFrequency,
        description: medicineDuration
      }]
    })

    setOpenAppointmentModal(false)
    event.target.reset()
  }

  const Backdrop = forwardRef<
    HTMLDivElement,
    { open?: boolean, className: string }
  >((props, ref) => {
    const { open, className, ...other } = props
    return (
      <div
        className={classnames({ 'MuiBackdrop-open': open }, className)}
        ref={ref}
        {...other}/>
    )
  })

  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="w-full h-full max-w-5xl m-auto flex justify-center items-center page-height-container">
        <Tabs aria-label='Tab Section' defaultValue={0}>
          <TabsList className="w-full max-w-5xl">
            <Tab
              aria-controls='exam-results-panel'
              className="w-2/4 border-b-2 py-2 my-2 border-black border-solid hover:bg-gray-300">
              {labels.exam_results}
            </Tab>
            <Tab
              aria-controls='scheduled-appointment-panel'
              className="w-2/4 border-b-2 py-2 my-2 border-black border-solid hover:bg-gray-300">
              {labels.scheduled_appointment}
            </Tab>
          </TabsList>
          <TabPanel
            id='exam-results-panel'>
            <ul className={`divide-y divide-gray-400 w-full
            overflow-y-auto mr-3 mb-9 list-container scrollbar`}>
              {exams.map((exams) => (
                <ListItem
                  key={exams.title}
                  title={exams.title}
                  subtitle={exams.subtitle}
                  description={exams.description}
                  onClick={() => console.log('crazy an alert in 2023')}/>
              ))}
            </ul>
          </TabPanel>
          <TabPanel
            id='scheduled-appointment-panel'>
            <ul className={`divide-y divide-gray-400 w-full
            overflow-y-auto mr-3 list-container scrollbar`}>
              {appointmentList.map(appointment => (
                <ListItem
                  key={appointment.title}
                  title={appointment.title}
                  subtitle={appointment.subtitle}
                  description={appointment.description}/>
              ))}
            </ul>
            <button
              className="bg-blue-900 hover:bg-blue-950 text-white p-2 rounded w-full"
              onClick={() => setOpenAppointmentModal(true)}>
              {labels.schedule_appointment}
            </button>
          </TabPanel>
        </Tabs>
      </div>
      <Modal
        open={openAppointmentModal}
        onClose={() => setOpenAppointmentModal(false)}
        slots={{ backdrop: Backdrop }}
        className='modal-container'>
        <form className="w-full max-w-lg bg-gray-100 p-9" onSubmit={handleAddAppointment}>
          <h1 className="text-2xl mb-12" role="complementary">
            {labels.schedule_appointment}
          </h1>
          <main>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-900 md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="appointmentSpecialty">
                  {labels.specialty}
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  className={`bg-gray-200 border-2 border-gray-200
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none w-full
                    focus:bg-white rounded-lg`}
                  id="appointmentSpecialty">
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>

              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-900 md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="appointmentDate">
                  {labels.date}
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={`bg-gray-200 appearance-none border-2 border-gray-200
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none w-full
                    focus:bg-white rounded-lg`}
                  id="appointmentDate"
                  type="text"/>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3" />
              <div className="md:w-2/3">
                <button className={`shadow bg-blue-900 hover:bg-blue-950 focus:shadow-outline
                  focus:outline-none text-white py-2 px-4 rounded`}
                type="submit">
                  {labels.schedule}
                </button>
              </div>
            </div>
          </main>
        </form>
      </Modal>
    </div>
  )
}

export default Exams
